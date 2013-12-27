import models
from api import serializers
from rest_framework import viewsets
from django.contrib.auth.models import User
from django.conf import settings

class ProjectViewSet(viewsets.ModelViewSet):
  queryset = models.Project.objects.all()
  serializer_class = serializers.ProjectSerializer


class ContributionViewSet(viewsets.ModelViewSet):
  queryset = models.Contribution.objects.all()
  serializer_class = serializers.ContributionSerializer


# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = settings.AUTH_USER_MODEL.objects.all()
#     serializer_class = serializers.UserSerializer
