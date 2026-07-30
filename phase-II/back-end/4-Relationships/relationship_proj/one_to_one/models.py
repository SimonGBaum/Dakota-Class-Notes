from django.db import models

# Create your models here.

class Passenger(models.Model):
    name = models.CharField(default="idk")
    # passport       added behind the scenes by the one to one field
    # luggage_bags
    def __str__(self):
        return f"<Name: {self.name} | Flights: {[f.flight_num for f in self.flights.all()]}>"
    

class Passport(models.Model):
    is_valid = models.BooleanField(default=True)
    passenger = models.OneToOneField(
        to=Passenger,
        on_delete=models.CASCADE,
        related_name="passport"
    )
    
    def __str__(self):
        return f"<IsValid: {self.is_valid} | Passenger: {self.passenger.name}>"