import os
import shutil
from django.core.management.base import BaseCommand
from django.core.files import File
from django.conf import settings
from core.models import Slider
from programs.models import Program

class Command(BaseCommand):
    help = 'Seed initial data for the site including sliders and programs with AI generated images.'

    def handle(self, *args, **kwargs):
        # Paths to generated images
        # The generated paths may have different suffixes based on when they were generated.
        # We will dynamically find them in the brain folder.
        
        brain_dir = r"C:\Users\Admin\.gemini\antigravity\brain\ab127376-71e3-4637-8130-303a3c10ebcb"
        
        hero_students = next((f for f in os.listdir(brain_dir) if f.startswith('hero_students_')), None)
        hero_building = next((f for f in os.listdir(brain_dir) if f.startswith('hero_building_')), None)
        program_education = next((f for f in os.listdir(brain_dir) if f.startswith('program_education_')), None)
        program_hifz = next((f for f in os.listdir(brain_dir) if f.startswith('program_hifz_')), None)
        program_clinic = next((f for f in os.listdir(brain_dir) if f.startswith('program_clinic_')), None)
        
        # Clear existing data
        Slider.objects.all().delete()
        Program.objects.all().delete()
        
        # Seed Sliders
        sliders = [
            {
                'title': 'Empowering the Next Generation',
                'subtitle': 'Providing modern education combined with moral values.',
                'image_path': os.path.join(brain_dir, hero_students) if hero_students else None,
                'button_text': 'Learn More',
                'order': 1
            },
            {
                'title': 'A Foundation for the Future',
                'subtitle': 'Building a strong community through knowledge and care.',
                'image_path': os.path.join(brain_dir, hero_building) if hero_building else None,
                'button_text': 'Our Programs',
                'order': 2
            }
        ]
        
        for s_data in sliders:
            slider = Slider.objects.create(
                title=s_data['title'],
                subtitle=s_data['subtitle'],
                button_text=s_data['button_text'],
                order=s_data['order']
            )
            if s_data['image_path'] and os.path.exists(s_data['image_path']):
                with open(s_data['image_path'], 'rb') as img_file:
                    slider.image.save(os.path.basename(s_data['image_path']), File(img_file), save=True)
            self.stdout.write(f"Created Slider: {slider.title}")

        # Seed Programs
        programs = [
            {
                'name': "Children's Education",
                'slug': 'childrens-education',
                'description': 'Essential schooling for young students.',
                'image_path': os.path.join(brain_dir, program_education) if program_education else None,
                'order': 1
            },
            {
                'name': 'Hifz Program',
                'slug': 'hifz-program',
                'description': 'Memorization of the Holy Quran.',
                'image_path': os.path.join(brain_dir, program_hifz) if program_hifz else None,
                'order': 2
            },
            {
                'name': 'Community Health Clinic',
                'slug': 'community-health-clinic',
                'description': 'Medical care for the underprivileged.',
                'image_path': os.path.join(brain_dir, program_clinic) if program_clinic else None,
                'order': 3
            }
        ]

        for p_data in programs:
            prog = Program.objects.create(
                name=p_data['name'],
                slug=p_data['slug'],
                description=p_data['description'],
                order=p_data['order']
            )
            if p_data['image_path'] and os.path.exists(p_data['image_path']):
                with open(p_data['image_path'], 'rb') as img_file:
                    prog.image.save(os.path.basename(p_data['image_path']), File(img_file), save=True)
            self.stdout.write(f"Created Program: {prog.name}")

        self.stdout.write(self.style.SUCCESS('Successfully seeded initial data!'))
