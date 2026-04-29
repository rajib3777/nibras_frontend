from django.contrib import admin
from .models import Program, Batch, Admission


class BatchInline(admin.TabularInline):
    model = Batch
    extra = 1


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ('name', 'duration', 'fees', 'is_active', 'order')
    list_editable = ('is_active', 'order')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'description')
    inlines = [BatchInline]
    filter_horizontal = ('teachers',)


@admin.register(Admission)
class AdmissionAdmin(admin.ModelAdmin):
    list_display = ('student_name', 'program', 'phone', 'status', 'created_at')
    list_filter = ('status', 'program')
    list_editable = ('status',)
    search_fields = ('student_name', 'guardian_name', 'email', 'phone')
    readonly_fields = ('created_at',)
