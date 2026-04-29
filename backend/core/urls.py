from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SliderViewSet, PageViewSet, TestimonialViewSet,
    StatisticViewSet, GalleryViewSet, SiteSettingsView
)

router = DefaultRouter()
router.register(r'sliders', SliderViewSet)
router.register(r'pages', PageViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'statistics', StatisticViewSet)
router.register(r'gallery', GalleryViewSet, basename='gallery')

urlpatterns = [
    path('', include(router.urls)),
    path('settings/', SiteSettingsView.as_view(), name='site-settings'),
    path('chat/', ChatBotView.as_view(), name='chat-bot'),
]
