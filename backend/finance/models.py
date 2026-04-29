from django.db import models
from django.conf import settings

class Donation(models.Model):
    TYPES = (
        ('ONE_TIME', 'One Time'),
        ('MONTHLY', 'Monthly'),
    )
    donor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True)
    donor_name = models.CharField(max_length=100) # For guest donors
    donor_email = models.EmailField()
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    donation_type = models.CharField(max_length=20, choices=TYPES, default='ONE_TIME')
    transaction_id = models.CharField(max_length=100, unique=True)
    status = models.CharField(max_length=20, default='PENDING') # PENDING, SUCCESS, FAILED
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.donor_name} - {self.amount}"

class Payment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    purpose = models.CharField(max_length=200) # e.g., Admission Fee, Monthly Fee
    transaction_id = models.CharField(max_length=100, unique=True)
    status = models.CharField(max_length=20, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.purpose}"
