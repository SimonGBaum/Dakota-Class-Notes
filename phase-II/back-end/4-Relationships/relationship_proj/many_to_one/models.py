from django.db import models

# Create your models here.

class LuggageBag(models.Model):
    weight = models.IntegerField(default=35)
    passenger = models.ForeignKey(
        to="one_to_one.Passenger",
        on_delete=models.CASCADE,
        related_name="luggage_bags"
    )
    
    
    def __str__(self):
        return f"Owner: {self.passenger.name} | Weight: {self.weight} "