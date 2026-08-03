from .views import AllPokemon, APokemon
from django.urls import path, register_converter

class IntOrStrConverter:
    regex=r'[0-9]+|[a-zA-Z]+'
    
    def to_python(self, value:str):
        if value.isdigit():
            return int(value)
        return str(value)
    
    def to_url(self, value:str):
        return str(value)
    
register_converter(IntOrStrConverter, 'int_str')

# api/v1/pokemon/:id
urlpatterns = [
    path('',AllPokemon.as_view(), name='all_pokemon'),
    path('<int_str:id>', APokemon.as_view(), name='a_pokemon'),
]
