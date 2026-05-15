import { useState } from 'react'
import './Contact.css'

const API = import.meta.env.VITE_API_URL || ''
const PHONE = import.meta.env.VITE_BUSINESS_PHONE || '+91 7880275152'
const EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || 'info@nativesoftservices.com'
const ADDR_DELHI = import.meta.env.VITE_ADDRESS_DELHI || 'Shahdara, Delhi 110094'
const ADDR_GZB = import.meta.env.VITE_ADDRESS_GHAZIABAD || 'Lal Kuan, Ghaziabad UP 201009'

const services = ['Web Development', 'SEO', 'PPC Ads', 'Social Marketing', 'Other']

const initialForm = { name: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    // Mocking API call for demo
    setTimeout(() => {
        setStatus('success')
        setForm(initialForm)
    }, 1500)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="badge">Get In Touch</span>
          <h1 className="hero-title">
            Let's Build Something <br />
            <span className="text-gradient">Extraordinary Together</span>
          </h1>
          <p className="hero-desc">
            Ready to take your digital presence to the next level? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Contact Details</h2>
              <p className="contact-subtitle">Our team typically responds within a few hours.</p>

              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <a href={`mailto:${EMAIL}`} className="info-value">{EMAIL}</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <a href={`tel:${PHONE}`} className="info-value">{PHONE}</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Delhi Office</span>
                  <span className="info-value">{ADDR_DELHI}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Ghaziabad Office</span>
                  <span className="info-value">{ADDR_GZB}</span>
                </div>
              </div>

              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
            </div>

            <div className="contact-form-container">
              {status === 'success' ? (
                <div className="success-message">
                  <h3>Thank you!</h3>
                  <p>Your message has been sent successfully. We'll be in touch soon.</p>
                  <button className="btn btn-outline" onClick={() => setStatus('idle')}>Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Interested In</label>
                    <select name="service" value={form.service} onChange={onChange} required>
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your project..." required />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="map-wrapper">
             <iframe
                title="Delhi Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7!2d77.28!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzEyLjAiTiA3N8KwMTYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{border:0, borderRadius:'var(--radius-lg)'}}
                allowFullScreen=""
                loading="lazy"
              />
          </div>
        </div>
      </section>
    </main>
  )
}

