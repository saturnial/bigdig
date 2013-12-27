import models
from rest_framework import serializers
from django.contrib.auth.models import User

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = models.Project
    fields = ('title', 'description', 'funding_goal')

class UserSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = User
    fields = ('url', 'username', 'first_name', 'last_name', 'email',)

