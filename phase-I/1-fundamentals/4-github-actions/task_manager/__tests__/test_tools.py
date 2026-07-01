import pytest
from utils.tools import *
from utils.db import *

def test_ensure_task_creation(monkeypatch):
    monkeypatch.setattr("builtins.input", lambda x: "This is a task")
    task = create_task()
    print(task)
    assert isinstance(task, dict)
    assert 'id' in task.keys()
    assert 'title' in task.keys()
    assert 'completed' in task.keys()
    assert len(task.keys()) == 3
    assert isinstance(task.get('id'), int)
    assert isinstance(task.get('title'), str)
    assert isinstance(task.get('completed'), bool)

def test_id_generation_empty():
    MY_DB.clear()
    assert generate_id() == 1

def test_task_insertion_by_id():
    task = {'id': 1, 'title': 'This is a task', 'completed': False}
    create_record(task)
    assert MY_DB.get(1) == task

def test_id_generation_after_insertion():
    assert generate_id() == 2