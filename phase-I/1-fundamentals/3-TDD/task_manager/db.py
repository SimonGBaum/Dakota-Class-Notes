MY_DB={
    
}

def generate_id():
    if not MY_DB:
        return 1
    return max(MY_DB.keys())+1

def create_record(a_task):
    if not isinstance(a_task, dict):
        raise ValueError("Needs to be a Dictionary")
    if not a_task["id"]:
        raise Exception("Tasks must have an ID")
    MY_DB[a_task["id"]]=a_task
    return "Success"