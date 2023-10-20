from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

class JoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk','username','password','nickname']

    def create(self, validated_data):
        user = User(username = validated_data['username'],
                    password = validated_data['password'],
                    nickname = validated_data['nickname'])
        user.set_password(validated_data['password'])
        user.save()
        return user
        
    
class LoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        data["username"] = self.user.username
       

        return data
        