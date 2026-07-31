from .serializers import PokemonSerializer
from .models import Pokemon
from rest_framerwork.views import APIView
from rest_framwork.response import Response
# Create your views here.



class AllPokemon(APIView):
    # axios.get => def get()
    # axios.post => def post()
    # axios.put => def put()
    # axios.delete => def delete()
    def get(self, request):
        # GEt all the pokemon from the db
        # Serialize the pokemon
        # Send back a Response

        pokemon = Pokemon.objects.all()
        ser_poke = PokemonSerializer(pokemon, many=True)
        return Response(ser_poke.data)