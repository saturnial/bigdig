import models
from rest_framework import serializers
from django.contrib.auth.models import User


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = models.Project
    fields = ('title', 'description', 'funding_goal', 'latitude', 'longitude')


class ContributionSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = models.Contribution


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = settings.AUTH_USER_MODEL
#     fields = ('url', 'username', 'first_name', 'last_name', 'email',)

