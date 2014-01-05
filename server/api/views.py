from api import serializers
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
import models


class ProjectViewSet(viewsets.ModelViewSet):
  queryset = models.Project.objects.all()
  serializer_class = serializers.ProjectSerializer


# class ContributionViewSet(viewsets.ModelViewSet):
#   queryset = models.Contribution.objects.all()
#   serializer_class = serializers.ContributionSerializer


class PhotoViewSet(viewsets.ModelViewSet):
  queryset = models.Photo.objects.all()
  serializer_class = serializers.PhotoSerializer


# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = settings.AUTH_USER_MODEL.objects.all()
#     serializer_class = serializers.UserSerializer
