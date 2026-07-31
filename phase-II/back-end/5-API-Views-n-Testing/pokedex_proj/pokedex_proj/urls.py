"""
URL configuration for pokedex_proj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
import math


def hello(request):
    
    return HttpResponse("Hello World")
    # return HttpResponse(f"<pre>{request.headers}</pre>")
# Function Based View
# Accept a Request, Params
# Return Response

def area_square(request, width):
    return HttpResponse(width**2)


def area_circle(request, radius):
    return HttpResponse(math.pi*(radius**2))
#/circle
# math.pi*(radius**2)

from pokemon_app.views import AllPokemon


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', hello),
    path('square/<int:width>/',area_square),
    path('circle/<int:radius>/',area_circle),
    path('api/v1/pokemon/', include("pokemon_app.urls"))
    path('api/v1/moves/'), include("move_app.urls")
]

