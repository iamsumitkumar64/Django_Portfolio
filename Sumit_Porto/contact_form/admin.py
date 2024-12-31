from django.contrib import admin
from .models import dj_form

class contact_admin(admin.ModelAdmin):
    list_display = ('name_model', 'email_model', 'mobile_model', 'message_model')

# Register your models here.
admin.site.register(dj_form, contact_admin)