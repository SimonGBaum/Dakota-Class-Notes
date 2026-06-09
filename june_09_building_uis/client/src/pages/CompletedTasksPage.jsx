import { useState } from 'react'
import { useTasks } from '../contexts/TaskContext'
import TaskRow from '../components/TaskRow'
import ViewTaskModal from '../components/ViewTaskModal'
import './TaskPage.css'

export default function CompletedTasksPage() {
  const { completedTasks } = useTasks()
  const [selectedTask, setSelectedTask] = useState(null)

  return (
    <div className="task-page">
      <p className="task-list-label">Here are your completed tasks sorted by date created:</p>

      <div className="task-list">
        {completedTasks.length === 0 && (
          <p className="empty-state">No completed tasks yet. Keep going!</p>
        )}
        {completedTasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onOpen={() => setSelectedTask(task)}
          />
        ))}
      </div>

      {selectedTask && (
        <ViewTaskModal
          task={completedTasks.find(t => t.id === selectedTask.id) || selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}
    </div>
  )
}
