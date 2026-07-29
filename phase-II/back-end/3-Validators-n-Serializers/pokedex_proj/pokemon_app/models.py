from django.db import models

# Create your models here.
class Pokemon(models.Model):
    pokemon_type: str = models.CharField(
        max_length=20,
        default="Normal",
        null=False,
        blank=False
    )
    name: str = models.CharField(max_length=30, null=False, blank=False)
    level: int = models.IntegerField(
        default=5,
        null=False,
        blank=False
    )
    description: str = models.TextField(default="Story unknown")
    is_caught = models.BooleanField(default=False)
    test = models.BooleanField(default=False)

    def __str__(self):
        return f"< Pokemon | {self.name} >"
    
    def level_up(self):
        self.level += 1
        self.save()
        
    def change_caught_status(self):
        self.is_caught = not self.is_caught
        self.save()