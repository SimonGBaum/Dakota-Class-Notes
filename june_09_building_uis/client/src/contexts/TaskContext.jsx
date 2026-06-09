import { createContext, useContext, useState } from 'react'

const TaskContext = createContext(null)

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [dailyCompletedCount, setDailyCompletedCount] = useState(0)

  function addTask(name) {
    const task = {
      id: Date.now(),
      name,
      description: '',
      createdAt: new Date(),
      completedAt: null,
      completed: false,
    }
    setTasks(prev => [...prev, task])
    return task
  }

  function updateTask(id, updates) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t))
  }

  function completeTask(id) {
    // Check current state before calling setters — avoids StrictMode double-invoke issue
    // (nesting setState calls inside another setState updater causes double-fire in dev)
    const task = tasks.find(t => t.id === id)
    if (!task || task.completed) return
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, completed: true, completedAt: new Date() } : t
    ))
    setDailyCompletedCount(c => c + 1)
  }

  function uncompleteTask(id) {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, completed: false, completedAt: null } : t
    ))
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const sortedTasks = [...tasks].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  const pendingTasks = sortedTasks.filter(t => !t.completed)
  const completedTasks = sortedTasks.filter(t => t.completed)

  return (
    <TaskContext.Provider value={{
      tasks: sortedTasks,
      pendingTasks,
      completedTasks,
      dailyCompletedCount,
      addTask,
      updateTask,
      completeTask,
      uncompleteTask,
      deleteTask,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}
