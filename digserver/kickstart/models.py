from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
  title = models.CharField(max_length=140)
  description = models.TextField()
  funding_goal = models.IntegerField()
  amount_raised = models.IntegerField(default=0)
  created_on = models.DateTimeField(auto_now_add=True)
  modified_on = models.DateTimeField(auto_now=True)
  # creator = models.ForeignKey(User)
  # image = models.ImageField(blank=True, null=True)

  def __unicode__(self):
    return self.title + ' -- created by ' + self.creator.username

class Contribution(models.Model):
  project = models.ForeignKey(Project)
  amount = models.IntegerField()
  contributor = models.ForeignKey(User)
  created_on = models.DateTimeField(auto_now_add=True)
  modified_on = models.DateTimeField(auto_now=True)
