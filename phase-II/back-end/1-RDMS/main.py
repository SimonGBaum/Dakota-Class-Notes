
class Dog:

    def __init__(self, name, breed, color, age):
        self.name : str = name
        self.breed : str = breed
        self.color : str = color
        self.age : int = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, val):
        if not isinstance(val, str) or (len(val)<0 or len(val)>25):
            raise ValueError("This must be a string where length is 0 < x < 25")
        self._name = val

    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, val):
        if not isinstance(val, int):
            raise ValueError("Age must be an integer")
        elif val < 0 or val > 30:
            raise ValueError("Age must be between 0 and 30")
        self._age = val
    
