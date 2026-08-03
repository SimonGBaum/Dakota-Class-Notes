from .serializers import PokemonSerializer
from .models import Pokemon
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status as s
from django.shortcuts import get_object_or_404
# Create your views here.

class AllPokemon(APIView):
    # axios.get => def get()
    # axios.post => def post()
    # axios.put => def put()
    # axios.delete => def delete()
    def get(self, request):
        # Get all the pokemon from the db
        # Serialize the pokemoen
        # Send back a Response
        
        pokemon = Pokemon.objects.all().order_by("id")
        ser_poke = PokemonSerializer(pokemon, many=True)
        return Response(ser_poke.data)
    
    def post(self, request):
        new_pokemon = PokemonSerializer(data=request.data)
        if new_pokemon.is_valid():
            new_pokemon.save()
            return Response(new_pokemon.data, status=s.HTTP_201_CREATED)
        else:
            return Response(new_pokemon.errors, status=s.HTTP_400_BAD_REQUEST)
<<<<<<< HEAD
=======
        
        
>>>>>>> 5ade3974762c55be673f8475ad95755be680b39c

class APokemon(APIView):
    
    # Not an endpoint, helper function
    def retrieve_pokemon(self, id):
        if isinstance(id, int):
            pokemon=get_object_or_404(Pokemon, id=id)
        else:
            pokemon=get_object_or_404(Pokemon, name=id)
        return pokemon
                
    def get(self, request, id):
        # Look up the Pokemon by ID
        # SELECT * FROM pokemon WHERE id = id
        pokemon = self.retrieve_pokemon(id)           
        ser_pokemon=PokemonSerializer(pokemon)
        return Response(ser_pokemon.data)
    
    def put(self, request, id):
        pokemon = self.retrieve_pokemon(id)           
        ser_pokemon = PokemonSerializer(pokemon, data=request.data, partial=True)
        if ser_pokemon.is_valid():
            ser_pokemon.save()
            return Response(ser_pokemon.data, status=s.HTTP_200_OK)
        else:
            return Response(ser_pokemon.errors, status=s.HTTP_400_BAD_REQUEST)
<<<<<<< HEAD
        
=======
    
>>>>>>> 5ade3974762c55be673f8475ad95755be680b39c
    def delete(self, request, id):
        pokemon = self.retrieve_pokemon(id)
        pokemon.delete()
        return Response(None, status=s.HTTP_204_NO_CONTENT)