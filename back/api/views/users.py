from django.shortcuts import render

from ..serializers.users import JoinSerializer,LoginSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(['POST'])
def join(request):

    serializer = JoinSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response(status=201,data=serializer.data)


class LoginView(TokenObtainPairView):
    serializer_class = LoginSerializer
