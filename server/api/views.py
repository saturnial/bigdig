import models
from api import serializers
from rest_framework import viewsets
from django.contrib.auth.models import User, Group

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = serializers.UserSerializer


class ProjectViewSet(viewsets.ModelViewSet):
  queryset = models.Project.objects.all()
  serializer_class = serializers.ProjectSerializer

  def pre_save(self, obj):
    obj.creator = self.request.user


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
