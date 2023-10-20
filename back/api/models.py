from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser,PermissionsMixin


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=128)
    nickname = models.CharField(max_length=20)

    is_active = models.BooleanField(default=True)
    
    REQUIRED_FIELDS = ["nickname"]
    USERNAME_FIELD = "username"

    objects = BaseUserManager()
    