from django.db import models

# Create your models here.
class skill(models.Model):
    skill_name=models.TextField()
    skill_img=models.FileField(upload_to="skill/")