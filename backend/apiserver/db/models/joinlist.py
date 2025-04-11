from django.db import models
from django.utils import timezone
import uuid

class JoinListEntry(models.Model):
    email = models.EmailField(unique=True)
    submission_date = models.DateTimeField(default=timezone.now)
    confirmation_token = models.UUIDField(default=uuid.uuid4, editable=False)
    is_confirmed = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.email} - {'Confirmed' if self.is_confirmed else 'Unconfirmed'}"