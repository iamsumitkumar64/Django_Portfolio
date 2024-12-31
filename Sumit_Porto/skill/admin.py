from django.contrib import admin
from .models import skill

class skill_admin(admin.ModelAdmin):
    list_display = ('skill_name', 'skill_img')

# Register your models here.

admin.site.register(skill,skill_admin)