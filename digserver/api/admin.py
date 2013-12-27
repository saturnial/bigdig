from django.contrib import admin

# Register your models here.
from api import models

# @admin.register(models.Project)
class ProjectAdmin(admin.ModelAdmin):
  date_hierarchy = 'modified_on'
  list_filter = ['created_on']
  search_fields = ['title']

admin.site.register(models.Project, ProjectAdmin)
