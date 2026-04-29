from rest_framework import serializers
from .models import Attendance, Result


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'


class ResultSerializer(serializers.ModelSerializer):
    program_name = serializers.CharField(source='batch.program.name', read_only=True)
    batch_name = serializers.CharField(source='batch.name', read_only=True)
    percentage = serializers.SerializerMethodField()

    class Meta:
        model = Result
        fields = ['id', 'exam_name', 'batch', 'batch_name', 'program_name',
                  'marks_obtained', 'total_marks', 'grade', 'percentage', 'date_published']

    def get_percentage(self, obj):
        if obj.total_marks and float(obj.total_marks) > 0:
            return round((float(obj.marks_obtained) / float(obj.total_marks)) * 100, 2)
        return 0
