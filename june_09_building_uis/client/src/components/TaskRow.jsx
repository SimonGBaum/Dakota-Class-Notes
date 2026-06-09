import { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'
import './TaskRow.css'

export default function TaskRow({ task, onOpen }) {
  const { updateTask, completeTask, uncompleteTask, deleteTask } = useTasks()
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(task.name)

  function handleSaveEdit() {
    const name = editName.trim()
    if (name) updateTask(task.id, { name })
    setIsEditing(false)
  }

  function handleCancelEdit() {
    setEditName(task.name)
    setIsEditing(false)
  }

  function handleDelete() {
    if (window.confirm(`Delete task "${task.name}"? This cannot be undone.`)) {
      deleteTask(task.id)
    }
  }

  function handleToggleComplete() {
    if (task.completed) {
      uncompleteTask(task.id)
    } else {
      completeTask(task.id)
    }
  }

  if (isEditing) {
    return (
      <div className="task-row editing">
        <input
          className="task-edit-input"
          value={editName}
          onChange={e => setEditName(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSaveEdit()
            if (e.key === 'Escape') handleCancelEdit()
          }}
          autoFocus
        />
        <div className="task-actions">
          <button className="icon-btn save-btn" onClick={handleSaveEdit} title="Save">✓</button>
          <button className="icon-btn cancel-btn" onClick={handleCancelEdit} title="Cancel">✕</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`task-row ${task.completed ? 'completed' : ''}`}>
      <span
        className="task-name"
        onClick={onOpen}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onOpen()}
      >
        {task.name}
      </span>
      <div className="task-actions">
        <button className="icon-btn trash-btn" onClick={handleDelete} title="Delete">🗑</button>
        <button
          className="icon-btn edit-btn"
          onClick={() => { setEditName(task.name); setIsEditing(true) }}
          title="Edit"
        >
          ✏
        </button>
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
          title={task.completed ? 'Mark pending' : 'Mark complete'}
        />
      </div>
    </div>
  )
}
