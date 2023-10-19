from django.urls import path
from .views import users

urlpatterns = [
    path('join/', users.join),
    path('login/', users.LoginView.as_view()),
]