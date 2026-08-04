from django.test import TestCase
from .models import Pokemon
from django.core.exceptions import ValidationError
# Create your tests here.

class PokemonTests(TestCase):
    
    def test_01_create_a_pokemon(self):
        pikachu = Pokemon(
            pokemon_type="Electric",
            name="Pikachu",
            description = "Yellow shocking fuzzball"
        )
        pikachu.full_clean()
        pikachu.save()
        
        self.assertIsInstance(pikachu, Pokemon)
        self.assertIsNotNone(pikachu.id)
        # SELECT COUNT(*) FROM pokemon;
        self.assertEqual(Pokemon.objects.count(), 1)
        
    def test_02_create_a_pokemon_fail(self):
        pikachu = Pokemon(
            pokemon_type="electric",
            name="pikachu",
            level=-10,
            description = ""
        )
        with self.assertRaises(ValidationError):
            pikachu.full_clean()

from django.urls import reverse
from django.test import Client
import json
from .test_data import all_pokemon_response, a_pokemon_response
            
class PokemonEndpointsTests(TestCase):
    
    fixtures=[
        'move_data.json',
        'pokemon_data.json'
    ]
    
    
    def test_01_get_all_pokemon(self):
        client = Client()
        url = reverse('all_pokemon')
        client_response = client.get(url)
        resp= json.loads(client_response.content)
        self.assertEqual(resp, all_pokemon_response)
    
    def test_02_get_a_pokemon(self):
        client=Client()
        # arg=[1] meaning the id of 1 will be passed to the url
        url=reverse('a_pokemon', args=[1])
        client_response = client.get(url)
        resp= json.loads(client_response.content)
        self.assertEqual(resp,a_pokemon_response)
        
