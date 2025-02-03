from django.http import HttpResponse
from django.contrib.auth.models import User
from django.shortcuts import render
from skill.models import skill
from contact_form.models import dj_form

def check_superuser(request):
    superuser_exists = User.objects.filter(is_superuser=True).exists()
    
    if superuser_exists:
        return HttpResponse("At least one superuser exists.")
    else:
        return HttpResponse("No superuser exists.")

def home(request):
    skill_obj = skill.objects.all()
    
    # Print each skill
    for x in skill_obj:
        print(x.skill_name, x.skill_img)

    if request.method == "POST":
        # Safely retrieve POST data
        name_html = request.POST.get('name')
        email_html = request.POST.get('email')
        mobile_html = request.POST.get('mobile')
        message_html = request.POST.get('message')
        if name_html and email_html and mobile_html and message_html:
            contact_obj = dj_form(
                name_model=name_html,
                email_model=email_html,
                mobile_model=mobile_html,
                message_model=message_html
            )
            print(name_html)
            contact_obj.save()
            # Optionally, redirect or return a success message
        else:
            return HttpResponse("Please fill in all fields.")
    # Handle GET request
    return render(request, 'index.html', {'skill_data': skill_obj})