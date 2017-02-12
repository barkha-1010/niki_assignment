from django.db import models

class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=15)
    phonenum = models.CharField(max_length=10)

class Chat(models.Model):
    created_at = models.DateTimeField('created_at')
    type = models.CharField(max_length=7)

class Statement(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    text = models.CharField(max_length=400)
    created_at = models.DateTimeField('created_at')

class ChatDetails(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    joined_at = models.DateTimeField('joined_at')