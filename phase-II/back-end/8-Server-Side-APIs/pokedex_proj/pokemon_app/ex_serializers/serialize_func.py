from pokemon_app.models import Pokemon
from django.core.serializers import serialize
import json


pokemon = Pokemon(
    pokemon_type="Electric",
    name="Pikachu",
    description = "Yellow shocking fuzzball",
    level=15,
    is_caught=True
)

pokemon.full_clean()
pokemon.save()

print(pokemon)
print(pokemon.id)
pokemon_ser = json.loads(serialize("json",[pokemon]))
print(pokemon_ser)
response_data = pokemon_ser[0]["fields"]
print(response_data)
response_data["id"]=pokemon_ser[0]["pk"]
print(response_data)