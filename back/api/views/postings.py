
from ..serializers.postings import PostingCreateSerializer,PostingListSerializer
from ..models import Posting

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def create_or_list(request):
    if request.method == "POST":
        serializer = PostingCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(leader = request.user)

        return Response(status=201,data=serializer.data)
    
    if request.method == "GET":
        postings = Posting.objects.order_by("-created_at")
        serializer = PostingListSerializer(postings, many=True)
        
        return Response(status=201,data=serializer.data)