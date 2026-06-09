import { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'
import TaskRow from '../components/TaskRow'
import ViewTaskModal from '../components/ViewTaskModal'
import './TaskPage.css'

export default function PendingTasksPage() {
  const { pendingTasks, addTask } = useTasks()
  const [newTaskName, setNewTaskName] = useState('')
  const [selectedTask, setSelectedTask] = useState(null)

  function handleAddTask(e) {
    e.preventDefault()
    const name = newTaskName.trim()
    if (!name) return
    addTask(name)
    setNewTaskName('')
  }

  return (
    <div className="task-page">
      <form className="new-task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="new task?"
          value={newTaskName}
          onChange={e => setNewTaskName(e.target.value)}
          className="new-task-input"
        />
        <button type="submit" className="btn-add">+</button>
      </form>

      <p className="task-list-label">Here are your tasks sorted by date created:</p>

      <div className="task-list">
        {pendingTasks.length === 0 && (
          <p className="empty-state">No pending tasks. Great work!</p>
        )}
        {pendingTasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onOpen={() => setSelectedTask(task)}
          />
        ))}
      </div>

      {selectedTask && (
        <ViewTaskModal
          task={pendingTasks.find(t => t.id === selectedTask.id) || selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  )
}
