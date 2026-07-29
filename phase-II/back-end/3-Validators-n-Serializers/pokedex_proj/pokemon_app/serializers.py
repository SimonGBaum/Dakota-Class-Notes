from rest_framework.serializers import ModelSerializer
from .models import Pokemon


class PokemonSerializer(ModelSerializer):
    
    class Meta:
        model = Pokemon
        # fields = ['id', 'name', 'description','pokemon_type']
        fields = '__all__'
        # exclude = ['is_caught']
        
