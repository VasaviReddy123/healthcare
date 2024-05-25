from django.contrib import admin
from .models import HealthcareProvider, Appointment, Resource, Review

admin.site.register(HealthcareProvider)
admin.site.register(Appointment)
admin.site.register(Resource)
admin.site.register(Review)


# Register your models here.
