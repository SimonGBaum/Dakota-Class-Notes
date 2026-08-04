from pokemon_app.models import Pokemon
from pokemon_app.serializers import PokemonSerializer

all_pokemon = Pokemon.objects.all()
ser_pokemon = PokemonSerializer(all_pokemon, many=True)
print(ser_pokemon.data)

dict_data={
    "na1me":"Moltres"
}
new_pokemon = PokemonSerializer(data=dict_data)
if new_pokemon.is_valid():
    new_pokemon.save()
    print(new_pokemon.data)
else:
    print(new_pokemon.errors.get('name'))