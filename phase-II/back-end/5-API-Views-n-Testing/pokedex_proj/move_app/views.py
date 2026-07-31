from django.shortcuts import render
from .serializers import PokemonSerializer
from rest_framerwork.views import APIView
from rest_framwork.response import Response
# Create your views here.

class AllMoves(APIView):
    def get(self, request):
        moves = Moves.objects.all()
        ser_moves = MoversSerializer(moves, many=True)
        return Response(ser_moves.data)

class AMove(APIView):
    def get(self, request, move_name):
        move = Move.objects.get(name = move_name)
        ser_move=MoveSerializer(move)
        return Response(ser_move.data)