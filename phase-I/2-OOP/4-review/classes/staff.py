from classes.people import People

class Staff(People):
# LOC should stay within 50-75 characters long
    def __init__(
            self, 
            name:str,
            age:int,
            employee_id:str,
            password:str
        ):
        super().__init__(name, age, "Staff", password)
        self.employee_id = employee_id

    @property
    def employee_id(self)-> str:
        return self._employee_id
    
    @employee_id.setter
    def employee_id(self, val:str) -> None:
        self.handle_id(val)
        self._employee_id = val