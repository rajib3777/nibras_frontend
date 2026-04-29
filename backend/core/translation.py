from modeltranslation.translator import register, TranslationOptions
from .models import Slider, Page, Testimonial

@register(Slider)
class SliderTranslationOptions(TranslationOptions):
    fields = ('title', 'subtitle')

@register(Page)
class PageTranslationOptions(TranslationOptions):
    fields = ('title', 'content')

@register(Testimonial)
class TestimonialTranslationOptions(TranslationOptions):
    fields = ('content',)
