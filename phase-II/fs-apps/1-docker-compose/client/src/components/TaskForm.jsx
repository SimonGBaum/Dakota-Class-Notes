import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

function TaskForm({addTask}) {
    const [taskTitle, setTaskTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTask = {
            id: crypto.randomUUID(),
            title: taskTitle
        }
        addTask(newTask)
        setTaskTitle('')
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
                <Form.Control
                    type="text"
                    placeholder='input a new task title here'
                    value={taskTitle}
                    onChange={(e)=>setTaskTitle(e.target.value)}
                />
                <Button type='submit'>
                    Create
                </Button>
            </Form>
        </>
    );
}

export default TaskForm;