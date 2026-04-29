from rest_framework import viewsets, permissions
from .models import Attendance, Result
from .serializers import AttendanceSerializer, ResultSerializer


class IsStudentOrGuardian(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role in ('STUDENT', 'GUARDIAN')


class AttendanceViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = AttendanceSerializer
    permission_classes = [IsStudentOrGuardian]

    def get_queryset(self):
        return Attendance.objects.filter(student=self.request.user).order_by('-date')


class ResultViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ResultSerializer
    permission_classes = [IsStudentOrGuardian]

    def get_queryset(self):
        return (
            Result.objects
            .filter(student=self.request.user)
            .select_related('batch__program')
            .order_by('-date_published')
        )
