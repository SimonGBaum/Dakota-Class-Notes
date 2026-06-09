import { useState, useEffect } from 'react'
import { useTasks } from '../contexts/TaskContext'
import './ViewTaskModal.css'

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function formatDateTime(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit',
  })
}

export default function ViewTaskModal({ task, onClose }) {
  const { updateTask, completeTask, uncompleteTask, deleteTask } = useTasks()
  const [name, setName] = useState(task.name)
  const [description, setDescription] = useState(task.description)

  useEffect(() => {
    setName(task.name)
    setDescription(task.description)
  }, [task.id])

  function handleSave() {
    updateTask(task.id, { name: name.trim() || task.name, description })
    onClose()
  }

  function handleDelete() {
    if (window.confirm(`Delete task "${task.name}"? This cannot be undone.`)) {
      deleteTask(task.id)
      onClose()
    }
  }

  function handleToggleComplete() {
    if (task.completed) {
      uncompleteTask(task.id)
    } else {
      completeTask(task.id)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-field">
          <input
            className="modal-name-input"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="task name"
          />
        </div>

        <div className="modal-field">
          <input
            type="date"
            className="modal-date-input"
            value={new Date(task.createdAt).toISOString().split('T')[0]}
            readOnly
          />
        </div>

        <div className="modal-field">
          <label className="modal-label">Description:</label>
          <textarea
            className="modal-description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Add a description..."
            rows={4}
          />
        </div>

        {task.completed && (
          <div className="modal-completed-info">
            <div className="completed-stamp">COMPLETED!!!</div>
            <p className="completed-on">
              Completed On: {formatDateTime(task.completedAt)}
            </p>
          </div>
        )}

        <div className="modal-actions">
          <button className="modal-btn save" onClick={handleSave}>SAVE</button>
          <button
            className={`modal-btn toggle ${task.completed ? 'pending' : 'complete'}`}
            onClick={handleToggleComplete}
          >
            {task.completed ? 'Pending??' : 'Completed'}
          </button>
          <button className="modal-btn delete" onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </div>
  )
}
