from django.db import models
from django.contrib.auth.models import AbstractUser,BaseUserManager

class TrainerManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        
        user = self.model(
            email=email,
            **extra_fields,
        )   
        user.set_password(password)
        user.save(using=self._db)

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields["is_staff"]=True
        extra_fields["is_superuser"]=True
        return self.create_user(email=email, password=password, **extra_fields)


# Create your models here.
class Trainer(AbstractUser):
    username=None
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=[]
    
    objects = TrainerManager()
    
    def __str__(self):
        return self.email