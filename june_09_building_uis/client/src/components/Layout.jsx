import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useTasks } from '../contexts/TaskContext'
import './Layout.css'

export default function Layout({ children }) {
  const { logout } = useAuth()
  const { dailyCompletedCount } = useTasks()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-logo">
          <span className="logo-text">TASK<span className="neon-text-red">MASTER</span></span>
        </div>
        {dailyCompletedCount > 0 && (
          <div className="daily-counter">
            <span className="counter-label">Today</span>
            <span className="counter-value neon-text-yellow">{dailyCompletedCount}</span>
            <span className="counter-label">completed</span>
          </div>
        )}
      </header>

      <nav className="layout-nav">
        <div className="nav-links">
          <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/tasks" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            All Tasks
          </NavLink>
          <NavLink to="/tasks/completed" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Completed
          </NavLink>
          <NavLink to="/tasks/pending" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Pending
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact Us
          </NavLink>
        </div>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
      </nav>

      <main className="layout-main">
        {children}
      </main>
    </div>
  )
}
