import models
from rest_framework import serializers
from django.contrib.auth.models import User


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = models.Project
    fields = ('id', 'url', 'title', 'description', 'funding_goal', 'latitude', 'longitude')


# class ContributionSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = models.Contribution

class PhotoSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = models.Photo


# class ContributionSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = models.Contribution


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = settings.AUTH_USER_MODEL
#     fields = ('url', 'username', 'first_name', 'last_name', 'email',)

