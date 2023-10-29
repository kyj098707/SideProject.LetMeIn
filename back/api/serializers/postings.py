from rest_framework import serializers
from ..models import Posting, Skill

class PostingCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posting
        fields = ["title","period","content","total_member","representative_skill"]


class PostingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posting
        fields = ["title","period","content","total_member","cur_member","leader","representative_skill"]

class SkillCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["name"]


class SkillListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["name","number"]