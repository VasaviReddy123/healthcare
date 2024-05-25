from django.db import models

class HealthcareProvider(models.Model):
    name = models.CharField(max_length=200)
    specialty = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    availability = models.CharField(max_length=200)
    operating_hours = models.CharField(max_length=200)
    contact_info = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    provider = models.ForeignKey(HealthcareProvider, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=200)
    appointment_date = models.DateTimeField()
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.patient_name} with {self.provider.name} on {self.appointment_date}"

class Resource(models.Model):
    category = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name

class Review(models.Model):
    provider = models.ForeignKey(HealthcareProvider, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=200)
    rating = models.IntegerField()
    comment = models.TextField()

    def __str__(self):
        return f"{self.rating} by {self.patient_name} for {self.provider.name}"


