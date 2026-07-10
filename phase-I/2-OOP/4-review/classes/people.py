class People:
# LOC should stay within 50-75 characters long
    def __init__(
            self, 
            name:str,
            age:int,
            role:str,
            password:str
        ):
        self.name = name
        self.age = age
        self.role = role
        self.password = password

    @classmethod
    def validate_str(cls, val:str) -> bool:
        if not isinstance(val, str):
            raise ValueError("This property must be a str")
        return True
    
    @classmethod
    def handle_id(cls, val:str)-> str:
        if cls.validate_str(val):
            for char in val:
                if not char.isnumeric():
                    raise ValueError("ID must be a string of nums")
        return val

    @property
    def password(self) -> str:
        return self._password
    
    @password.setter
    def password(self, val:str) -> None:
        if self.validate_str(val):
            self._password = val

    @property
    def role(self) -> str:
        return self._role
    
    @role.setter
    def role(self, val:str) -> str:
        if not val in ['Student', 'Staff']:
            raise ValueError("Roles must be either Student or Staff")
        self._role = val

    @property
    def age(self)->int:
        return self._age
    
    @age.setter
    def age(self, val:int) -> None:
        if not isinstance(val, int):
            raise ValueError('Age must be an int')
        self._age = val

    @property
    def name(self) -> str:
        return self._name
    
    @name.setter
    def name(self, new_name:str) -> None:
        if not isinstance(new_name, str):
            raise ValueError("Name must be a str")
        self._name = new_name