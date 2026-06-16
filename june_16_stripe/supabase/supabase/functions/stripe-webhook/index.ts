import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

function errorResponse(message: string, status = 400): Response {
  return new Response(JSON.stringify({ error: message }), {
    headers: { "Content-Type": "application/json" },
    status,
  });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
  const snapshotSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET_SNAPSHOT");
  const thinSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET_THIN");

  if (!stripeSecretKey || !snapshotSecret || !thinSecret) {
    return errorResponse("Server misconfiguration", 500);
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2024-12-18.acacia",
  });

  const body = await req.text();
  const signature = req.headers.get("stripe-signature") ?? "";

  // Detect format before verification: v2 thin events have "object": "v2.core.event"
  // v1 snapshot events have "object": "event"
  let rawParsed: { object?: string };
  try {
    rawParsed = JSON.parse(body);
  } catch {
    return errorResponse("Invalid JSON body", 400);
  }

  const isThinEvent = rawParsed.object === "v2.core.event";
  const webhookSecret = isThinEvent ? thinSecret : snapshotSecret;

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Signature verification failed";
    return errorResponse(`Webhook signature verification failed: ${msg}`, 400);
  }

  // Thin events carry only a related_object reference — no embedded PaymentIntent data.
  // Acknowledge and return early; the donation flow uses snapshot events only.
  if (isThinEvent) {
    return new Response(JSON.stringify({ received: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }

  // Snapshot events (v1) — process PaymentIntent state changes
  if (
    event.type === "payment_intent.succeeded" ||
    event.type === "payment_intent.payment_failed"
  ) {
    const pi = event.data.object as Stripe.PaymentIntent;
    const status = event.type === "payment_intent.succeeded" ? "succeeded" : "failed";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error } = await supabase.from("donations").insert({
      user_id: pi.metadata.user_id,
      amount: pi.amount,
      stripe_payment_intent_id: pi.id,
      status,
    });

    // 23505 = unique_violation — idempotent replay, skip silently
    if (error && error.code !== "23505") {
      console.error("DB insert error:", error.message);
      return errorResponse("Database error", 500);
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});
