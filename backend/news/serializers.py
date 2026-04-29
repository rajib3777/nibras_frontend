from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Category, News, Event, Notice

User = get_user_model()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = News
        fields = ['id', 'title', 'slug', 'content', 'image', 'category',
                  'category_name', 'author_name', 'is_pinned', 'created_at']

    def get_author_name(self, obj):
        return obj.author.get_full_name() or obj.author.username


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = '__all__'
