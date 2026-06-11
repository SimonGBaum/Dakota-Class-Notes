import { createContext, useContext, useState } from 'react'
import { registerUser, loginUser } from '../services/userService'
import { fetchTasks, createTask, patchTask, removeTask } from '../services/taskService'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [tasks,       setTasks]       = useState([])
  const [loading,     setLoading]     = useState(false)
  const [error,       setError]       = useState(null)

  const today = new Date().toDateString()
  const dailyCount = tasks.filter(
    t => t.completed && t.completedAt && new Date(t.completedAt).toDateString() === today
  ).length

  async function withRequest(fn) {
    setLoading(true)
    setError(null)
    try {
      return await fn()
    } catch (err) {
      const code = err.response?.data?.code
      const msg = code === '23505'
        ? 'Email or username already exists.'
        : (err.response?.data?.message || err.message || 'An unexpected error occurred.')
      setError(msg)
      return { error: msg }
    } finally {
      setLoading(false)
    }
  }

  async function register({ firstName, lastName, username, email, password }) {
    return withRequest(async () => {
      const user = await registerUser({ firstName, lastName, username, email, password })
      setCurrentUser(user)
      return { success: true }
    })
  }

  async function login({ email, password }) {
    return withRequest(async () => {
      const user = await loginUser({ email, password })
      setCurrentUser(user)
      const userTasks = await fetchTasks(user.id)
      setTasks(userTasks)
      return { success: true }
    })
  }

  function logout() {
    setCurrentUser(null)
    setTasks([])
    setError(null)
  }

  async function addTask({ title, description = '' }) {
    return withRequest(async () => {
      const task = await createTask({ title, description, userId: currentUser.id })
      setTasks(prev => [task, ...prev])
    })
  }

  async function updateTask(id, changes) {
    return withRequest(async () => {
      const updated = await patchTask(id, changes)
      setTasks(prev => prev.map(t => t.id === id ? updated : t))
    })
  }

  async function deleteTask(id) {
    return withRequest(async () => {
      await removeTask(id)
      setTasks(prev => prev.filter(t => t.id !== id))
    })
  }

  async function toggleComplete(id) {
    return withRequest(async () => {
      const task = tasks.find(t => t.id === id)
      if (!task) return
      const nowComplete = !task.completed
      const updated = await patchTask(id, {
        completed:   nowComplete,
        completedAt: nowComplete ? new Date().toISOString() : null,
      })
      setTasks(prev => prev.map(t => t.id === id ? updated : t))
    })
  }

  return (
    <AppContext.Provider value={{
      currentUser, tasks, dailyCount,
      loading, error,
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
