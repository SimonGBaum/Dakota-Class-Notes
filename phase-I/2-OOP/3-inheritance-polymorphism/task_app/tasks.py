from task_app.task_template import TaskTemplate

class SubTask(TaskTemplate):
    pass

class Task(TaskTemplate): # Inheritance == Is-a
    def __init__(
            self,
            title:str,
            description:str|None = None,
            status:bool = False,
            subtasks:list[SubTask] = [] 
    ) -> 'Task':
        super().__init__(title, description, status)
        self.subtasks = subtasks # Composition == HAS-a
    #Polymorphism
    def __repr__(self) -> str:
        return f"<ID:{self.id} | TITLE:{self.title} | SUBTASKS:{self.subtasks}>"

class Person:
    def __init__(self, name:str)-> 'Person':
        self.name = name

class Owner(Person):
    def __init__(self, name:str, tasks:list[Task]=[])-> 'Owner':
        super().__init__(name)
        self.tasks = tasks

class PriorityTask(TaskTemplate):
    URGENCY = "Priority"

class UrgentTask(TaskTemplate):
    URGENCY = "Urgent"

