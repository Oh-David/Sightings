from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(allow_unicode=True, unique=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Sighting(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='sightings')
    location = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    description = models.TextField()
    date_time = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='sightings/', blank=True, null=True)

    def __str__(self):
        return f"{self.category.name} sighting by {self.user.username} on {self.date_time.strftime('%Y-%m-%d')}"

class Comment(models.Model):
    sighting = models.ForeignKey(Sighting, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.user.username} on {self.created_at.strftime('%Y-%m-%d')}"

# The Profile model remains unchanged
