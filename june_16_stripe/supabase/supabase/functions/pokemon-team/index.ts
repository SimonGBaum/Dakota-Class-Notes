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

  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  if (!type) {
    return errorResponse("Missing required query parameter: type");
  }

  const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
  if (!typeRes.ok) {
    return errorResponse(`Unknown type: "${type}"`);
  }

  const typeData = await typeRes.json();
  const pool = [...typeData.pokemon];

  // Partial Fisher-Yates — shuffle only the first 6 slots
  for (let i = 0; i < 6 && i < pool.length; i++) {
    const j = i + Math.floor(Math.random() * (pool.length - i));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const selected = pool.slice(0, Math.min(6, pool.length));

  const details = await Promise.all(
    selected.map(({ pokemon }: { pokemon: { name: string; url: string } }) =>
      fetch(pokemon.url).then((r) => r.json())
    ),
  );

  const team = details.map((d) => ({ [d.name]: d.sprites.front_default }));

  return new Response(
    JSON.stringify(team),
    { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
  );
});
