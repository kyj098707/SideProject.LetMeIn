from django.urls import path
from .views import users,postings

urlpatterns = [
    path('join/', users.join),
    path('login/', users.LoginView.as_view()),

    path('posting/', postings.create_or_list),
]