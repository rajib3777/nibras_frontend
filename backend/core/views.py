from rest_framework import viewsets, generics, permissions
from .models import Slider, Page, Testimonial, Statistic, GalleryImage, SiteSettings
from .serializers import (
    SliderSerializer, PageSerializer, TestimonialSerializer,
    StatisticSerializer, GalleryImageSerializer, SiteSettingsSerializer
)


class SiteSettingsView(generics.RetrieveAPIView):
    serializer_class = SiteSettingsSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        obj, _ = SiteSettings.objects.get_or_create(pk=1)
        return obj


class SliderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Slider.objects.filter(is_active=True)
    serializer_class = SliderSerializer
    permission_classes = [permissions.AllowAny]


class PageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Page.objects.filter(is_published=True)
    serializer_class = PageSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.AllowAny]


class StatisticViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer
    permission_classes = [permissions.AllowAny]


class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = GalleryImageSerializer
    permission_classes = [permissions.AllowAny]
    filterset_fields = ['category', 'is_active']

    def get_queryset(self):
        return GalleryImage.objects.filter(is_active=True)

from rest_framework.views import APIView
from rest_framework.response import Response
from programs.models import Program
from news.models import Notice

class ChatBotView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        message = request.data.get('message', '').lower()
        
        if any(greet in message for greet in ['salam', 'assalamu', 'hello', 'hi']):
            return Response({"reply": "Wa Alaikumussalam! Welcome to Nibras Foundation. How can I help you today?"})
        
        if 'program' in message or 'course' in message:
            programs = Program.objects.all()[:3]
            if programs:
                prog_list = ", ".join([p.title for p in programs])
                return Response({"reply": f"We offer several programs including: {prog_list}. You can find more details on our Programs page."})
            return Response({"reply": "We offer programs like Hifz, General Education, and Pre-Hifz. Please check our Programs page."})
            
        if 'admission' in message or 'apply' in message:
            return Response({"reply": "Admissions are currently open! You can apply online through our Admission portal or visit our campus for a physical form."})
            
        if 'contact' in message or 'phone' in message or 'address' in message:
            return Response({"reply": "You can reach us at +880 1909995555 or visit us at House-1, Road-5, Block-D, Banasree, Rampura, Dhaka. Our email is info@nibras.org."})
            
        return Response({"reply": "Jazakallah Khair for reaching out. I'm a simple assistant. For detailed queries, please check our website sections or contact our office directly."})
