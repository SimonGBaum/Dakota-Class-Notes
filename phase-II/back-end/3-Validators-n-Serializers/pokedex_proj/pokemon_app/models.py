from django.db import models
from django.core import validators as val
from .validators import title_format_validate
# Create your models here.
class Pokemon(models.Model):
    pokemon_type: str = models.CharField(
        max_length=20,
        default="Normal",
        null=False,
        blank=False,
        validators=[
            title_format_validate
        ]
        #hold title format
    )
    name: str = models.CharField(
        max_length=30,
        null=False,
        blank=False,
        validators=[
            title_format_validate
        ]
    )
    
    
    
    level: int = models.IntegerField(
        default=5,
        null=False,
        blank=False,
        validators=[
            val.MinValueValidator(1, "YOU FOOL NO LOWER NUMBER!"),
            val.MaxValueValidator(100)
        ]
        #  0 < level < 100
    )
    
    
    description: str = models.TextField(
        default="Story unknown",
        validators=[
            val.MinLengthValidator(5),
            val.MaxLengthValidator(500)
            ]
    # upper and lower limit ont he length of the text field min 5 max 500
    )
    
    is_caught = models.BooleanField(
        default=False
    )

    def __str__(self):
        return f"< Pokemon | {self.name} >"
    
    def level_up(self):
        self.level += 1
        self.save()
        
    def change_caught_status(self):
        self.is_caught = not self.is_caught
        self.save()