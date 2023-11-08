# sightings/forms.py

from django import forms
from .models import Sighting

class SightingForm(forms.ModelForm):
    class Meta:
        model = Sighting
        fields = ['category', 'location', 'latitude', 'longitude', 'description', 'image']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4, 'cols': 40}),
        }
