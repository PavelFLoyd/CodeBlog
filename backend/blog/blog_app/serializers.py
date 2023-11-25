from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Article, Comment


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for model User
    """
    class Meta:
        model = User
        fields = ['username']


class ArticleListSerializer(serializers.ModelSerializer):
    """
    Serializer for model Article (queryset)
    """
    class Meta:
        model = Article
        fields = [
            'id',
            'name',
            'description',
            'picture_small',
            'amount_comments'
        ]


class ArticleSerializer(serializers.ModelSerializer):
    """
    Serializer for model Article
    """
    class Meta:
        model = Article
        fields = [
            'id',
            'name',
            'description',
            'picture_big',
            'pub_date',
            'content'
        ]


class CommentSerializer(serializers.ModelSerializer):
    """
    Serializer for model Comment
    """
    user = UserSerializer()

    class Meta:
        model = Comment
        fields = [
            'text',
            'user'
        ]
