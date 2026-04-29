from django.db import models
from django.conf import settings


class Program(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    curriculum = models.TextField(help_text="Markdown or HTML content", blank=True)
    duration = models.CharField(max_length=100, blank=True)
    fees = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    image = models.ImageField(upload_to='programs/', blank=True, null=True)
    icon = models.CharField(max_length=50, blank=True, help_text="Lucide icon name")
    teachers = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='teaching_programs',
        limit_choices_to={'role': 'TEACHER'},
        blank=True
    )
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class Batch(models.Model):
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='batches')
    name = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_open_for_admission = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.program.name} — {self.name}"


class Admission(models.Model):
    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('REJECTED', 'Rejected'),
    )
    student_name = models.CharField(max_length=200)
    guardian_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    program = models.ForeignKey(Program, on_delete=models.SET_NULL, null=True, related_name='admissions')
    batch = models.ForeignKey(Batch, on_delete=models.SET_NULL, null=True, blank=True, related_name='admissions')
    document = models.FileField(upload_to='admissions/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_name} — {self.program}"
