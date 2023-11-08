from django.contrib import admin
from .models import Sighting, Category  # Import your models here

@admin.register(Sighting)
class SightingAdmin(admin.ModelAdmin):
    list_display = ('user', 'category', 'location', 'date_time')
    list_filter = ('date_time', 'category')
    search_fields = ('location', 'description')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_by', 'created_at')
    search_fields = ('name',)
