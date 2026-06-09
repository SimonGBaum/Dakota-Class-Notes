import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-glitch">ERR_404</div>
        <p className="error-message">
          Oops! Something went wrong. We've been notified of this issue and will work
          diligently to fix it. We apologize for the inconvenience.
        </p>
        <button className="btn-home" onClick={() => navigate('/home')}>
          Home
        </button>
      </div>
    </div>
  )
}
