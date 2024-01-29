from django.db import models


class Bus(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Arrived', 'Arrived'),
    ]
    bus_id = models.CharField(max_length=10, unique=True)
    plate_number = models.CharField(max_length=20, default='Unknown')
    capacity = models.IntegerField(default=0)
    origin = models.CharField(max_length=50, default='Unknown')
    destination = models.CharField(max_length=50, default='Unknown')
    departure_time = models.TimeField(default='00:00:00')
    arrival_time = models.TimeField(default='00:00:00')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def seats_available(self):
        booked_seats = Seat.objects.filter(bus=self).count()
        return self.capacity - booked_seats

    def booked_seat_numbers(self):
        booked_seat_numbers = Seat.objects.filter(bus=self).values_list('number', flat=True)
        return list(booked_seat_numbers)

    class Meta:
        app_label = 'app'
        verbose_name = "Bus"
        verbose_name_plural = "Buses"

    def __str__(self):
        return f"{self.bus_id} - {self.plate_number}"


class Seat(models.Model):
    bus = models.ForeignKey(Bus, on_delete=models.CASCADE, null=True)
    number = models.IntegerField()

    class Meta:
        app_label = 'app'
        verbose_name = "Pre Booked Seat"
        verbose_name_plural = "Pre Booked Seats"
