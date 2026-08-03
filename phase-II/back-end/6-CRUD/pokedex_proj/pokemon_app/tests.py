import json
from django.urls import reverse
from django.test import Client, TestCase
from .test_data import all_pokemon_response, a_pokemon_response
from .models import Pokemon
from django.core.exceptions import ValidationError
from .serializers import PokemonSerializer
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

            
class PokemonEndpointsTests(TestCase):
    
    fixtures=[
        'move_data.json',
        'pokemon_data.json'
    ]
    
    def setUP(self):
        self.client = Client()
    
    def test_01_get_all_pokemon(self):
        url = reverse('all_pokemon')
        client_response = self.client.get(url)
        resp= json.loads(client_response.content)
        self.assertEqual(resp, all_pokemon_response)
    
    def test_02_get_a_pokemon(self):
        # arg=[1] meaning the id of 1 will be passed to the url
        url=reverse('a_pokemon', args=[1])
        client_response = self.client.get(url)
        resp= json.loads(client_response.content)
        self.assertEqual(resp,a_pokemon_response)
    
    def test_03_update_a_pokemon(self):
        url = reverse('a_pokemon', args=[1])
        resp = self.client.put(
            url, 
            data={
            "is_caught":True
            },
            content_type="application/json"
        )
        with self.subTest():
            self.assertEqual(resp.status_code, 200)
        data = json.loads(resp.content)
        self.assertTrue(data["is_caught"])
        
    def test_04_delete_a_pokemon(self):
        url = reverse('a_pokemon', args=[3])
        resp = self.client.delete(url)
        self.assertEqual(resp.status_code, 204)
        
    def test_05_create_a_pokemon(self):
        url = reverse('all_pokemon')
        resp = self.client.post(url, data=
        {
            "name":"Blastoise",
            "pokemon_type":"Water",
            "is_caught":True
        },
        content = "application/json"                                               
        )
        data = json.loads(resp.content)
        last_insertion = PokemonSerializer(Pokemon.objects.last())
        self.assertEqual(data, last_insertion.data)