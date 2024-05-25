from django.shortcuts import render
from rest_framework import viewsets
from .models import HealthcareProvider, Appointment, Resource, Review
from .serializers import HealthcareProviderSerializer, AppointmentSerializer, ResourceSerializer, ReviewSerializer

def homepage(request):
    return render(request, 'core/homepage.html')

class HealthcareProviderViewSet(viewsets.ModelViewSet):
    queryset = HealthcareProvider.objects.all()
    serializer_class = HealthcareProviderSerializer

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
