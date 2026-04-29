from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import User, TeacherProfile
from .serializers import TeacherSerializer, UserSerializer, RegisterSerializer


class TeacherListView(generics.ListAPIView):
    serializer_class = TeacherSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['teacher_profile__is_featured']
    search_fields = ['first_name', 'last_name', 'teacher_profile__subject']
    ordering_fields = ['teacher_profile__order']

    def get_queryset(self):
        return (
            User.objects
            .filter(role='TEACHER')
            .select_related('teacher_profile')
            .order_by('teacher_profile__order')
        )


class TeacherDetailView(generics.RetrieveAPIView):
    serializer_class = TeacherSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return User.objects.filter(role='TEACHER').select_related('teacher_profile')


class MeView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
