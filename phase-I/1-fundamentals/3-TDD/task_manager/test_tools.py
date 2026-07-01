import pytest
from task_manager.tools import *

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