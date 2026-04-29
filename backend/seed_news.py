import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nibras_backend.settings')
django.setup()

from django.contrib.auth import get_user_model
from django.core.files import File
from django.utils import timezone
from datetime import timedelta
from news.models import News, Event, Category, Notice

User = get_user_model()
user, _ = User.objects.get_or_create(username='admin', defaults={'email':'admin@a.com'})
if not user.password:
    user.set_password('a')
    user.save()

cat, _ = Category.objects.get_or_create(name='General', slug='general')

brain_dir = r"C:\Users\Admin\.gemini\antigravity\brain\ab127376-71e3-4637-8130-303a3c10ebcb"
hero_students = next((f for f in os.listdir(brain_dir) if f.startswith('hero_students_')), None)
program_education = next((f for f in os.listdir(brain_dir) if f.startswith('program_education_')), None)

News.objects.all().delete()
Event.objects.all().delete()
Notice.objects.all().delete()

# Seed News 1
n1 = News.objects.create(
    title='Free Sewing Training Launched', 
    slug='sewing-training', 
    author=user, 
    content='Free Sewing Training for the Needy launched successfully.', 
    category=cat, 
    is_published=True
)
if hero_students:
    with open(os.path.join(brain_dir, hero_students), 'rb') as img_file:
        n1.image.save('news1.png', File(img_file), save=True)

# Seed News 2
n2 = News.objects.create(
    title='Learn Quran Program Started', 
    slug='learn-quran', 
    author=user, 
    content='Our new Learn Quran program has officially started.', 
    category=cat, 
    is_published=True
)
if program_education:
    with open(os.path.join(brain_dir, program_education), 'rb') as img_file:
        n2.image.save('news2.png', File(img_file), save=True)

# Seed Event
e1 = Event.objects.create(
    title='Community Iftar Program', 
    location='Local Community Center', 
    description='Annual iftar program for the community.', 
    start_time=timezone.now() + timedelta(days=5), 
    end_time=timezone.now() + timedelta(days=5, hours=3)
)
if hero_students:
    with open(os.path.join(brain_dir, hero_students), 'rb') as img_file:
        e1.image.save('event1.png', File(img_file), save=True)

# Seed Notice
Notice.objects.create(
    title='Annual Examination Schedule 2026',
    content='The annual examination for all classes will commence from May 15th.',
    is_urgent=True
)
Notice.objects.create(
    title='Ramadan Holidays Announcement',
    content='The foundation will remain closed for the holy month of Ramadan.',
    is_urgent=False
)

print("Successfully seeded News, Events, and Notices.")
