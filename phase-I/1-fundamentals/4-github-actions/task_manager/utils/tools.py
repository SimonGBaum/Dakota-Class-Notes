from utils.db import generate_id

def create_task():
    return {
        'id':generate_id(),
        'title':input("What title do you want for your task?\n"), 
        'completed':False
    }