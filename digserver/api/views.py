import models
from rest_framework import viewsets
from api.serializers import ProjectSerializer
#from django.shortcuts import render

class ProjectViewSet(viewsets.ModelViewSet):
  queryset = models.Project.objects.all()
  serializer_class = ProjectSerializer
