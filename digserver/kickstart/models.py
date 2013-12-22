from django.db import models

class Project(models.Model):
  title = models.CharField(max_length=140)
  description = models.TextField()
  amount_raised = models.FloatField()
