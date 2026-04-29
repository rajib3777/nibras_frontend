from rest_framework import serializers
from .models import Program, Batch, Admission


class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = '__all__'


class ProgramSerializer(serializers.ModelSerializer):
    batches = BatchSerializer(many=True, read_only=True)
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Program
        fields = ['id', 'name', 'slug', 'description', 'curriculum', 'duration',
                  'fees', 'image', 'image_url', 'icon', 'is_active', 'order', 'batches']

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None


class AdmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admission
        fields = ['id', 'student_name', 'guardian_name', 'phone', 'email',
                  'program', 'batch', 'document', 'status', 'created_at']
        read_only_fields = ['status', 'created_at']
