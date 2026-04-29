from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLES = (
        ('ADMIN', 'Admin'),
        ('DIRECTOR', 'Director'),
        ('TEACHER', 'Teacher'),
        ('STAFF', 'Staff'),
        ('STUDENT', 'Student'),
        ('GUARDIAN', 'Guardian'),
    )

    role = models.CharField(max_length=20, choices=ROLES, default='STUDENT')
    phone = models.CharField(max_length=15, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.username} ({self.role})"


class TeacherProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='teacher_profile',
        limit_choices_to={'role': 'TEACHER'}
    )
    subject = models.CharField(max_length=200)
    qualification = models.TextField(blank=True)
    experience_years = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    facebook = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.user.get_full_name()} — {self.subject}"
