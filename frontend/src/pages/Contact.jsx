import { useState } from 'react'
import '../styles/pages/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-details">
                  <h3 className="info-label">Email</h3>
                  <p className="info-value">contact@nftree.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">💬</div>
                <div className="info-details">
                  <h3 className="info-label">Support</h3>
                  <p className="info-value">support@nftree.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">🌐</div>
                <div className="info-details">
                  <h3 className="info-label">Community</h3>
                  <p className="info-value">Join our Discord</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2 className="form-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === 'error' && (
                <div className="form-message error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button
                type="submit"
                className="btn-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

