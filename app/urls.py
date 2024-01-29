from django.urls import path
from rest_framework import routers
from .views import BusList, home

router = routers.DefaultRouter()
router.register(r'buses', BusList)

urlpatterns = [
    path('', home, name='home'),
    path('buses/', BusList.as_view({'get': 'list'}), name='bus-list'),
]
