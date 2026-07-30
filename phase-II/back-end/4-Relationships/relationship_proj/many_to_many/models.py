from django.db import models

class Flight(models.Model):
    flight_num = models.CharField(default="123HTC")
    passengers = models.ManyToManyField(
        to="one_to_one.Passenger",
        related_name="flights"
    )
    
    def __str__(self):
        return f"Num: {self.flight_num} | Passengers: {[p.name for p in self.passengers.all()]}"
    
