import models
from rest_framework import serializers
from django.contrib.auth.models import User

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
  creator = serializers.Field(source='creator.username')
  class Meta:
    model = models.Project
    fields = ('id', 'url', 'title', 'description', 'creator', 'funding_goal', 'latitude', 'longitude')

class UserSerializer(serializers.ModelSerializer):
    projects = serializers.PrimaryKeyRelatedField(many=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'projects')

# class ContributionSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = models.Contribution

class PhotoSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = models.Photo


# class ContributionSerializer(serializers.HyperlinkedModelSerializer):
#   class Meta:
#     model = models.Contribution


#class UserSerializer(serializers.HyperlinkedModelSerializer):
#  class Meta:
#    model = settings.AUTH_USER_MODEL
#    fields = ('url', 'username', 'first_name', 'last_name', 'email',)

