from django.contrib import admin
from .models import Donation, Payment


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ('donor_name', 'donor_email', 'amount', 'donation_type', 'status', 'created_at')
    list_filter = ('donation_type', 'status')
    search_fields = ('donor_name', 'donor_email', 'transaction_id')
    readonly_fields = ('transaction_id', 'created_at')


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('user', 'purpose', 'amount', 'status', 'created_at')
    list_filter = ('status',)
    search_fields = ('user__username', 'purpose', 'transaction_id')
    readonly_fields = ('transaction_id', 'created_at')
