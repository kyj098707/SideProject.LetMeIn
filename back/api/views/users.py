from django.shortcuts import render

from ..serializers.users import JoinSerializers

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def join(request):

    serializer = JoinSerializers(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response(status=201,data=serializer.data)