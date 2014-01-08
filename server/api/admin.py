from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

class MyUserChangeForm(UserChangeForm):
    class Meta:
        model = get_user_model()

class MyUserCreationForm(UserCreationForm):
    class Meta:
        model = get_user_model()

class MyUserAdmin(UserAdmin):
    form = MyUserChangeForm
    add_form = MyUserCreationForm

#admin.site.register(MyUser, MyUserAdmin)

# Register your models here.
#from api import models

# @admin.register(models.Project)
#class ProjectAdmin(admin.ModelAdmin):
#  date_hierarchy = 'modified_on'
#  list_filter = ['created_on']
#  search_fields = ['title']

#admin.site.register(models.Project, ProjectAdmin)
