from django.db import models

class dj_form(models.Model):
    name_model= models.CharField(max_length=255)
    email_model = models.EmailField(max_length=255)
    mobile_model = models.CharField(max_length=15)  
    message_model = models.TextField()