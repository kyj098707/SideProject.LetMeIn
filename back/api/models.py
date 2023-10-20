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
    

class Skill(models.Model):
    name = models.CharField(max_length=20)
    number = models.IntegerField(default=0)


class Posting(models.Model):
    title = models.CharField(max_length=100)
    period = models.IntegerField()
    content = models.TextField()
    
    representative_skill = models.CharField(max_length=104) 
    skills = models.ManyToManyField(Skill)

    total_member = models.IntegerField()
    cur_member = models.IntegerField(default=1)

    leader = models.ForeignKey(User, on_delete=models.CASCADE)
    
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)    
    

    def __str__(self):
        return self.title

