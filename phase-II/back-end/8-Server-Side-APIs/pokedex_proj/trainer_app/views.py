from django.shortcuts import render
from rest_framework.views import APIView
from .models import Trainer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status as s
from django.contrib.auth import authenticate

# Create your views here.
class RegisterUserView(APIView):
    def post(self, request):
        new_user_data = request.data
        
        # new_user_data would look like below
        # {
        #     "username": "email@email.com"
        #     "password": "password"
        # }
        new_user_inst = Trainer.objects.create_user(
            email = new_user_data.get("email"),
            password = new_user_data.get("password")
        )
        token_inst = Token.objects.create(
            user = new_user_inst
        )
        return Response(
            {
                "user" : new_user_inst.email,
                "token": token_inst.key
            },
            status=s.HTTP_201_CREATED
        )
        
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("email")
        password = request.data.get("password")
        trainer = authenticate(username=username, password=password)
        if not trainer:
            return Response("No matching Creds", status=s.HTTP_404_NOT_FOUND)
        token, _ = Token.objects.get_or_create(user = trainer)
        return Response(
            {
                "user":trainer.email,
                "token":token.key
            },
            status=s.HTTP_200_OK
        )
from rest_framework.permissions import IsAuthenticated


class UserView(APIView):
    permission_classes = [IsAuthenticated]

class LogOutView(UserView):

    def post(self, request):
        user_email = request.data.get("email")
        request.user.auth_token.delete()
        return Response(f"{user_email} has been logged out")

    
class InfoView(UserView):
    
    def get(self, request):
        user = request.user
        return Response({"email":user.email, "date_joined": user.date_joined})
