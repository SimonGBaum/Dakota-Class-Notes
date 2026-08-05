from django.urls import path
from .views import RegisterUserView, LoginView, LogOutView, InfoView

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register_user"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogOutView.as_view(), name="logout"),
    path("", InfoView.as_view(), name="info")

]
