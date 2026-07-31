from django.shortcuts import render
from .serializers import Move, MoveSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class AllMoves(APIView):
    def get(self, request):
        moves = Move.objects.all()
        ser_moves= MoveSerializer(moves, many=True)
        return Response(ser_moves.data)
