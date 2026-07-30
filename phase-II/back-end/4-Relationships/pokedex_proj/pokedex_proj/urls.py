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
# from django.contrib import admin
# from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

# FUNCTION BASED VIEWS
# ACCEPT REQUEST & PARAMS
# ALWAYS RETURN A RESPONSE

def hello(request):
    print(request.method)
    print(request.path)
    print(request.headers)
    # uses <pre>f"{request.SOEMTHING here}"</pre>

    return HttpResponse("Hello World")

def area_square(request, width):
    return HttpResponse(width**2)

import math
def area_circle(request, radius):
    math.pi * (radius**2)
    # Return the math frist then show about the part of the request.headers and teh request.body
    return HttpResponse(f"{request.body}")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', hello),
    path('square/<int:width>/', area_square),
    path('circle/<int:radius>/', area_circle)
]