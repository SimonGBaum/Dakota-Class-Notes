import './ContactPage.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <p className="contact-intro">
        We're here to help. Whether you've hit a bug, have a feature request, or just want to
        say hello — reach out through any of the channels below. Our team responds quickly and
        values every message from the community.
      </p>

      <div className="contact-section">
        <h3 className="contact-section-title neon-text-cyan">As a customer</h3>
        <ul className="contact-list">
          <li>
            <span className="contact-icon">✉</span>
            <span>email </span>
            <a href="mailto:fr4v1l4@gmail.com">fr4v1l4@gmail.com</a>
          </li>
          <li>
            <span className="contact-icon">☎</span>
            <span>phone of </span>
            <span className="contact-value">555-555-5555</span>
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h3 className="contact-section-title neon-text-red">As a dev</h3>
        <ul className="contact-list">
          <li>
            <span className="contact-icon">⌥</span>
            <span>github </span>
            <a href="https://github.com/fravila08/task_master" target="_blank" rel="noreferrer">
              fravila08/task_master
            </a>
          </li>
          <li>
            <span className="contact-icon">in</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
