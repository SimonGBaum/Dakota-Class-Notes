<<<<<<< HEAD
from .views import AllPokemon
from django.urls import path, register_converter

class IntOrStrConverter:
    regex =r'[0-9]+|[a-zA-Z]+'
=======
from .views import AllPokemon, APokemon
from django.urls import path, register_converter

class IntOrStrConverter:
    regex=r'[0-9]+|[a-zA-Z]+'
>>>>>>> da47ea70e028089d46a6bee1ce3a0aadf75a27e8
    
    def to_python(self, value:str):
        if value.isdigit():
            return int(value)
        return str(value)
    
<<<<<<< HEAD
    def to_url(self, value):
        return str(value)

register_converter(IntOrStrConverter, 'int_str')
# api/v1/pokemon
urlpatterns = [
    path('', AllPokemon.as_view(), name='all_pokemon')
    path('<int_str:id>', APokemon.as_view(), name='a_pokemon')

=======
    def to_url(self, value:str):
        return str(value)
    
register_converter(IntOrStrConverter, 'int_str')

# api/v1/pokemon/:id
urlpatterns = [
    path('',AllPokemon.as_view(), name='all_pokemon'),
    path('<int_str:id>', APokemon.as_view(), name='a_pokemon'),
>>>>>>> da47ea70e028089d46a6bee1ce3a0aadf75a27e8
]
