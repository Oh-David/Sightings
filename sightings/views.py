from django.shortcuts import render, redirect
from .models import Sighting
from .forms import SightingForm
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

def home(request):
    return HttpResponse("Welcome to the Paranormal Tracker App!")

def sighting_list(request):
    sightings = Sighting.objects.all()
    return render(request, 'sightings/list.html', {'sightings': sightings})

def add_sighting(request):
    if request.method == 'POST':
        form = SightingForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('sighting_list')
    else:
        form = SightingForm()
    return render(request, 'sightings/add.html', {'form': form})

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})