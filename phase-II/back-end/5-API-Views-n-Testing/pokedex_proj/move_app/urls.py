<<<<<<< HEAD
from .views import Allmoves, AMove
from django.urls import path
urlpatterns = [
    path('', AllMoves.as_view(), name='all_moves')
    path('<str:move_name>/', AMove.as_view(), name="a_move")
]
=======
from .views import AllMoves, AMove
from django.urls import path

urlpatterns = [
    path('',AllMoves.as_view(), name='all_moves'),
    path('<str:move_name>/', AMove.as_view(), name="a_move")
]

>>>>>>> da47ea70e028089d46a6bee1ce3a0aadf75a27e8
