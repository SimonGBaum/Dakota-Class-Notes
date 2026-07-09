class TaskTemplate:
    URGENCY = 'Routine'
    nxt_id = 1

    def __init__(self, 
            title:str, 
            description:str = None, 
            status:bool = False,
        ) -> 'TaskTemplate':
        self.id = self.gen_id()
        self.title = title
        self.description = description
        self.status = status


    def mark_completed(self)-> str:
        """
        change the status of a task from `False` to `True`
        """
        self.status = True
        return f"Task: {self.title} STATUS: Completed"

    @classmethod
    def gen_id(cls):
        curr_id = cls.nxt_id
        cls.nxt_id += 1
        return curr_id
    
    # FUNC != EFFICIENT CODE
    @classmethod
    def create_a_task(cls)->str:
        task_dict = {
            "title":input("What is the title of this task?\n>"),
            "description":input("Describe the task:\n>"),
            "status":False,
        }
        new_task = cls(**task_dict) 
        return f"Success <{new_task}>"
    
    @staticmethod
    def mark_all_completed(iter:list['TaskTemplate'])->None:
        for task in iter:
            task.mark_completed()
        print("All tasks in lists have been updated")

    def __repr__(self):
        return f"<< ID:{self.id} | TITLE: {self.title} | STATUS: {"COMPLETED" if self.status else "INCOMPLETE"} >>"
    