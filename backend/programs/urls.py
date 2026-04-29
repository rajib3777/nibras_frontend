from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProgramViewSet, AdmissionCreateView, AdmissionListView

router = DefaultRouter()
router.register(r'', ProgramViewSet, basename='program')

urlpatterns = [
    path('', include(router.urls)),
    path('admissions/apply/', AdmissionCreateView.as_view(), name='admission-apply'),
    path('admissions/', AdmissionListView.as_view(), name='admission-list'),
]
