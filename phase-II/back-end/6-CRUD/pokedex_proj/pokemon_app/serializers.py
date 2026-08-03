from rest_framework.serializers import ModelSerializer
from .models import Pokemon
from move_app.serializers import MoveSerializer

class PokemonSerializer(ModelSerializer):
    
    moves = MoveSerializer(many=True, read_only=True)
    class Meta:
        model = Pokemon
        # fields = ['id', 'name', 'description','pokemon_type']
        fields = '__all__'
        # exclude = ['is_caught']
        
