from django.shortcuts import render
<<<<<<< HEAD
from .serializers import PokemonSerializer
from rest_framerwork.views import APIView
from rest_framwork.response import Response
# Create your views here.

class AllMoves(APIView):
    def get(self, request):
        moves = Moves.objects.all()
        ser_moves = MoversSerializer(moves, many=True)
=======
from .serializers import Move, MoveSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class AllMoves(APIView):
    def get(self, request):
        moves = Move.objects.all()
        ser_moves= MoveSerializer(moves, many=True)
>>>>>>> da47ea70e028089d46a6bee1ce3a0aadf75a27e8
        return Response(ser_moves.data)

class AMove(APIView):
    def get(self, request, move_name):
        move = Move.objects.get(name = move_name)
        ser_move=MoveSerializer(move)
        return Response(ser_move.data)