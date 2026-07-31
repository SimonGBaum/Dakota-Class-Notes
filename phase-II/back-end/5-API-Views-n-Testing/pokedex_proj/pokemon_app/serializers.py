from rest_framework.serializers import ModelSerializer
from .models import Pokemon
from move_app.serializers import MoveSerializer
<<<<<<< HEAD

=======
>>>>>>> da47ea70e028089d46a6bee1ce3a0aadf75a27e8

class PokemonSerializer(ModelSerializer):
    
    moves = MoveSerializer(many=True, read_only=True)
    class Meta:
        model = Pokemon
        # fields = ['id', 'name', 'description','pokemon_type']
        fields = '__all__'
        # exclude = ['is_caught']
        
