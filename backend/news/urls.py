from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, NewsViewSet, EventViewSet, NoticeViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'articles', NewsViewSet, basename='news')
router.register(r'events', EventViewSet, basename='event')
router.register(r'notices', NoticeViewSet, basename='notice')

urlpatterns = [
    path('', include(router.urls)),
]
