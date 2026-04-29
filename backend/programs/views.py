from rest_framework import viewsets, generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Program, Batch, Admission
from .serializers import ProgramSerializer, BatchSerializer, AdmissionSerializer


class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ProgramSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'description']
    ordering_fields = ['order', 'name']

    def get_queryset(self):
        return Program.objects.filter(is_active=True).prefetch_related('batches')


class AdmissionCreateView(generics.CreateAPIView):
    queryset = Admission.objects.all()
    serializer_class = AdmissionSerializer
    permission_classes = [permissions.AllowAny]


class AdmissionListView(generics.ListAPIView):
    queryset = Admission.objects.all().order_by('-created_at')
    serializer_class = AdmissionSerializer
    permission_classes = [permissions.IsAdminUser]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['status', 'program']
