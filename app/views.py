from rest_framework import viewsets
from .models import Bus
from .serializers import BusSerializer
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


class BusList(viewsets.ModelViewSet):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer
