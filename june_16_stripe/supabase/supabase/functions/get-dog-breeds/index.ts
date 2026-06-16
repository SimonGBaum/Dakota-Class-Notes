const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const apiKey = Deno.env.get("DOG_API_KEY");

  const dogRes = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: { "x-api-key": apiKey ?? "" },
  });

  if (!dogRes.ok) {
    return new Response(
      JSON.stringify({
        error: `Dog API returned an error: ${dogRes.status} ${dogRes.statusText}`,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 502 },
    );
  }

  const breeds = await dogRes.json();

  const result = breeds.map((breed: { id: number; name: string; temperament?: string }) => ({
    id: breed.id,
    name: breed.name,
    temperament: breed.temperament ?? null,
  }));

  return new Response(
    JSON.stringify(result),
    { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
  );
});
