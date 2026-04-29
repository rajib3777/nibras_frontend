from django.contrib import admin
from .models import Category, News, Event, Notice


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'is_published', 'is_pinned', 'created_at')
    list_editable = ('is_published', 'is_pinned')
    list_filter = ('category', 'is_published', 'is_pinned')
    prepopulated_fields = {'slug': ('title',)}
    search_fields = ('title', 'content')
    readonly_fields = ('created_at',)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'start_time', 'end_time', 'rsvp_required')
    list_filter = ('rsvp_required',)
    search_fields = ('title', 'location')


@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_urgent', 'created_at')
    list_editable = ('is_urgent',)
    search_fields = ('title', 'content')
