const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function errorResponse(message: string, status = 400): Response {
  return new Response(
    JSON.stringify({ error: message }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" }, status },
  );
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return errorResponse("Request body must be valid JSON");
  }

  const rawA = body.a;
  const rawB = body.b;

  if (rawA === undefined && rawB === undefined) {
    return errorResponse("Missing required fields: a and b");
  }
  if (rawA === undefined) {
    return errorResponse("Missing required field: a");
  }
  if (rawB === undefined) {
    return errorResponse("Missing required field: b");
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (isNaN(a) && isNaN(b)) {
    return errorResponse(`Invalid values for a and b: "${rawA}" and "${rawB}" are not numbers`);
  }
  if (isNaN(a)) {
    return errorResponse(`Invalid value for a: "${rawA}" is not a number`);
  }
  if (isNaN(b)) {
    return errorResponse(`Invalid value for b: "${rawB}" is not a number`);
  }

  return new Response(
    JSON.stringify({ result: a + b }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
  );
});
