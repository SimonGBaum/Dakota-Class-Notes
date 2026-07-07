"""
- dunder methods
- init method initializes an instance of a class
- the `self` references to the instance of the class itself
"""
class Dog:
    
    def __init__(self, name:str, age:int, height:int, color:str)->'Dog':
        # instance attributes
        self.name = name
        self.age = age # pvt attr
        # self._age created by setter
        self.height = height
        self.color = color
        self.sleep = False
    
    @property
    def sleep(self)->bool:
        return self._sleep
    
    @sleep.setter
    def sleep(self, status:bool) -> None:
        if not isinstance(status, bool):
            raise ValueError("Status must be a boolean")
        self._sleep = status

    @property
    def name(self)->str:
        return self._name
    
    @name.setter
    def name(self, name_val:str)->None:
        """
        - name is str
        - name is in title format
        - name holds no white space to left and right(outsides)
        """
        if not isinstance(name_val, str):
            raise ValueError("Name must be a string")
        self._name = name_val.strip().title()

    # getters == properties
    @property
    def age(self) -> int:
        return self._age
    
    # SET it takes in a PARAM
    @age.setter
    def age(self, age_val:int) -> None:
        if not isinstance(age_val, int):
            raise ValueError("New age must be of int ")
        if (age_val > 26) or (age_val < 0):
            raise ValueError("New age must be between 0-25")
        self._age = age_val

    # instance methods (funcs within a class)
    def go_to_sleep(self) -> str:
        if not self.sleep:
            self.sleep = True
            return f"{self.name} is sleeping!"
        else:
            return f"{self.name} is already sleeping!!!"
    
    def fetch(self, item):
        return f"{self.name} fetch the {item}"
        
    def bark(self):
        return f"{self.name} is barking loudly"
    
    def __str__(self):
        return f"CLASS DOG: {self.name} STR"
    
    def __repr__(self):
        return f"CLASS DOG: {self.name} RPR"

