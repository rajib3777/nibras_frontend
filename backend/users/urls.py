from django.urls import path
from .views import TeacherListView, TeacherDetailView, MeView, RegisterView

urlpatterns = [
    path('teachers/', TeacherListView.as_view(), name='teacher-list'),
    path('teachers/<int:pk>/', TeacherDetailView.as_view(), name='teacher-detail'),
    path('me/', MeView.as_view(), name='user-me'),
    path('register/', RegisterView.as_view(), name='register'),
]
