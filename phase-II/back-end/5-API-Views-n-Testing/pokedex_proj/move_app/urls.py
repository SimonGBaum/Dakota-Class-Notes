from .views import Allmoves
from django.urls import path
urlpatterns = [
    path('', AllMoves.as_view(), name='all_moves')
]
