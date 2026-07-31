from .views import AllMoves, AMove
from django.urls import path

urlpatterns = [
    path('',AllMoves.as_view(), name='all_moves'),
    path('<str:move_name>/', AMove.as_view(), name="a_move")
]

