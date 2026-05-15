import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <main className="contact-page">
      <section className="hero">
        <div className="container">
          <div className="reveal">
            <span className="badge">Direct Access</span>
            <h1 className="hero-title">LET'S <br /> CONNECT.</h1>
            <p className="hero-desc">Tell us about your project or just say hello.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid grid">
          <div className="contact-info">
            <div className="info-block">
              <h4 className="info-label">General Enquiries</h4>
              <p className="info-text">info@technative.com</p>
            </div>
            <div className="info-block">
              <h4 className="info-label">Call Us</h4>
              <p className="info-text">+91 7880275152</p>
            </div>
            <div className="info-block">
              <h4 className="info-label">Location</h4>
              <p className="info-text">Delhi-NCR, India</p>
            </div>
          </div>

          <div className="contact-form-container">
            {status === 'success' ? (
              <div className="success-message">
                <h3 className="section-title">MESSAGE RECEIVED.</h3>
                <p>We'll get back to you shortly.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>SEND ANOTHER</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label>NAME</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={onChange} required placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
