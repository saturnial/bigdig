import models
from rest_framework import serializers

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = models.Project
    fields = ('title', 'description') 

