import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  function register({ firstName, lastName, username, email, password }) {
    const existing = users.find(u => u.email === email || u.username === username)
    if (existing) {
      return { success: false, error: 'Email or username already in use.' }
    }
    const newUser = { firstName, lastName, username, email, password }
    setUsers(prev => [...prev, newUser])
    setUser(newUser)
    return { success: true }
  }

  function login({ email, password }) {
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) {
      return { success: false, error: 'Invalid email or password.' }
    }
    setUser(found)
    return { success: true }
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
