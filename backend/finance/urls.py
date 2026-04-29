from django.urls import path
from .views import DonationCreateView, DonationListView, PaymentListView

urlpatterns = [
    path('donate/', DonationCreateView.as_view(), name='donate'),
    path('donations/', DonationListView.as_view(), name='donation-list'),
    path('payments/', PaymentListView.as_view(), name='payment-list'),
]
