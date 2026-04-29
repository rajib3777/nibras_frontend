from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AttendanceViewSet, ResultViewSet

router = DefaultRouter()
router.register(r'attendance', AttendanceViewSet, basename='attendance')
router.register(r'results', ResultViewSet, basename='result')

urlpatterns = [
    path('', include(router.urls)),
]
