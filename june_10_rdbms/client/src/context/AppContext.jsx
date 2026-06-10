import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [tasks, setTasks] = useState([])
  const [dailyCount, setDailyCount] = useState(0)

  function register({ firstName, lastName, username, email, password }) {
    const existing = users.find(u => u.email === email || u.username === username)
    if (existing) return { error: 'Email or username already exists.' }
    const user = { id: Date.now(), firstName, lastName, username, email, password }
    setUsers(prev => [...prev, user])
    setCurrentUser(user)
    return { success: true }
  }

  function login({ email, password }) {
    const user = users.find(u => u.email === email && u.password === password)
    if (!user) return { error: 'Invalid email or password.' }
    setCurrentUser(user)
    return { success: true }
  }

  function logout() {
    setCurrentUser(null)
  }

  function addTask({ title, description = '' }) {
    const task = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date(),
      completedAt: null,
      completed: false,
    }
    setTasks(prev => [task, ...prev])
  }

  function updateTask(id, changes) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...changes } : t))
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function toggleComplete(id) {
    const task = tasks.find(t => t.id === id)
    if (!task) return
    const nowComplete = !task.completed
    if (nowComplete) setDailyCount(c => c + 1)
    setTasks(prev => prev.map(t =>
      t.id !== id ? t : { ...t, completed: nowComplete, completedAt: nowComplete ? new Date() : null }
    ))
  }

  return (
    <AppContext.Provider value={{
      currentUser, tasks, dailyCount,
      register, login, logout,
      addTask, updateTask, deleteTask, toggleComplete,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
