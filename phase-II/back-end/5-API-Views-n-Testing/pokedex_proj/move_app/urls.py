from .views import AllMoves
from django.urls import path

urlpatterns = [
    path('',AllMoves.as_view(), name='all_moves')
]

