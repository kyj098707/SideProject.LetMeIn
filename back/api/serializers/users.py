from django.contrib.auth import get_user_model
from rest_framework import serializers


User = get_user_model()

class JoinSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk','username','password','nickname']

    def create(self, validated_data):
        user = User(username = validated_data['username'],
                    password = validated_data['password'],
                    nickname = validated_data['nickname'])
        user.save()
        return user