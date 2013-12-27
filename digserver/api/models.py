from django.db import models
from django_facebook.models import FacebookCustomUser


class Project(models.Model):
  title = models.CharField(max_length=140)
  description = models.TextField()
  funding_goal = models.IntegerField()
  amount_raised = models.IntegerField(default=0)
  created_on = models.DateTimeField(auto_now_add=True)
  modified_on = models.DateTimeField(auto_now=True)
  #creator = models.ForeignKey(FacebookCustomUser)
  # image = models.ImageField(blank=True, null=True)

  def __unicode__(self):
    return self.title + ' -- created by ' + self.creator.username


class Contribution(models.Model):
  project = models.ForeignKey(Project)
  contributor = models.ForeignKey(FacebookCustomUser)
  amount = models.IntegerField()
  created_on = models.DateTimeField(auto_now_add=True)
  modified_on = models.DateTimeField(auto_now=True)
