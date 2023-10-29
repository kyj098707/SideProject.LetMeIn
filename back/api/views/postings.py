from django.db import transaction

from ..serializers.postings import PostingCreateSerializer,PostingListSerializer, SkillCreateSerializer,SkillListSerializer
from ..models import Posting,Skill

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET','POST'])
def create_or_list(request):
    # if request.method == "POST":
    #     if request.data["skill"]:
        
        #     with transaction.atomic():
        #         for skill in list(request.data["skill"].split("|")):
        #             if Skill.objects.filter(name=skill).exists():
        #                 raise "스킬 이미 있음"
        #                 return 
        #             # 저장
                    
        # serializer = PostingCreateSerializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save(leader = request.user)

        # return Response(status=201, data=serializer.data)
    
    if request.method == "GET":
        postings = Posting.objects.order_by("-created_at")
        serializer = PostingListSerializer(postings, many=True)
        
        return Response(status=201, data=serializer.data)
    
@api_view(['POST','GET'])
def create_or_list_skill(request):
    if request.method == "POST":
        if Skill.objects.filter(name=request.data['name']).exists():
            return Response(status=400, data="")
        
        serializer = SkillCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=201, data=serializer.data)
    if request.method == "GET":
        skills = Skill.objects.all()
        serializer = SkillListSerializer(skills, many=True)

        return Response(status=201, data=serializer.data)
