class Task:

    nxt_id = 1

    def __init__(self, 
            title:str, 
            description:str = None, 
            status:bool = False, 
        ) -> 'Task':
        self.id = Task.nxt_id
        self.title = title
        self.description = description
        self.status = status
        Task.nxt_id += 1

    def __str__(self):
        return f"ID:{self.id} | TITLE: {self.title}"