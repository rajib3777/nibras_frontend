from django.db import models
from django.conf import settings
from programs.models import Batch

class Attendance(models.Model):
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='attendances', limit_choices_to={'role': 'STUDENT'})
    date = models.DateField()
    is_present = models.BooleanField(default=True)
    remarks = models.TextField(blank=True, null=True)

    class Meta:
        unique_together = ('student', 'date')

    def __str__(self):
        return f"{self.student.username} - {self.date}"

class Result(models.Model):
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='results', limit_choices_to={'role': 'STUDENT'})
    exam_name = models.CharField(max_length=200)
    batch = models.ForeignKey(Batch, on_delete=models.CASCADE)
    marks_obtained = models.DecimalField(max_digits=5, decimal_places=2)
    total_marks = models.DecimalField(max_digits=5, decimal_places=2)
    grade = models.CharField(max_length=5, blank=True, null=True)
    date_published = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.student.username} - {self.exam_name}"
