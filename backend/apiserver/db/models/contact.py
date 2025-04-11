from django.db import models
from django.utils import timezone

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    ticket_number = models.CharField(max_length=20, unique=True, default="")
    submission_date = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return f"{self.name}: {self.subject}"