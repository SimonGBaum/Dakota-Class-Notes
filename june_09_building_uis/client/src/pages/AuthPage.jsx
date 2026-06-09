import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './AuthPage.css'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [signupForm, setSignupForm] = useState({
    firstName: '', lastName: '', username: '',
    email: '', password: '', confirmPassword: '',
  })

  function handleLoginSubmit(e) {
    e.preventDefault()
    setError('')
    const result = login(loginForm)
    if (result.success) {
      navigate('/home')
    } else {
      setError(result.error)
    }
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    setError('')
    if (signupForm.password !== signupForm.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    const result = register({
      firstName: signupForm.firstName,
      lastName: signupForm.lastName,
      username: signupForm.username,
      email: signupForm.email,
      password: signupForm.password,
    })
    if (result.success) {
      navigate('/home')
    } else {
      setError(result.error)
    }
  }

  function handleLoginChange(e) {
    setLoginForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSignupChange(e) {
    setSignupForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <span className="logo-text">TASK<span className="neon-text-red">MASTER</span></span>
          <div className="logo-underline" />
        </div>

        {error && <div className="auth-error">{error}</div>}

        {isLogin ? (
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
                autoComplete="current-password"
              />
            </div>
            <div className="auth-footer">
              <button
                type="button"
                className="toggle-link"
                onClick={() => { setIsLogin(false); setError('') }}
              >
                I don't have an account
              </button>
              <button type="submit" className="btn-submit">Submit</button>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignupSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="first_name"
                value={signupForm.firstName}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="last_name"
                value={signupForm.lastName}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={signupForm.username}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="auth-footer">
              <button
                type="button"
                className="toggle-link"
                onClick={() => { setIsLogin(true); setError('') }}
              >
                I have an account
              </button>
              <button type="submit" className="btn-submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
