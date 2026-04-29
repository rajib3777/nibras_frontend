from rest_framework import serializers
from .models import Donation, Payment
import uuid


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = ['id', 'donor_name', 'donor_email', 'amount', 'donation_type',
                  'transaction_id', 'status', 'created_at']
        read_only_fields = ['transaction_id', 'status', 'created_at']

    def create(self, validated_data):
        validated_data['transaction_id'] = 'TXN-' + str(uuid.uuid4())[:16].upper()
        return super().create(validated_data)


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
        read_only_fields = ['transaction_id', 'status', 'created_at']
