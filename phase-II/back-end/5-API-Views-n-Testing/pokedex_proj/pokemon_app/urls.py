from .views import AllPokemon
from django.urls import path

# api/v1/pokemon
urlpatterns = [
    path('', AllPokemon.as_view(), name='all_pokemon')
]
