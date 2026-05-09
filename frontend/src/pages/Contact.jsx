import { useState } from 'react'
import './Contact.css'

const API = import.meta.env.VITE_API_URL || ''
const PHONE = import.meta.env.VITE_BUSINESS_PHONE || '+91 7880275152'
const EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || 'info@nativesoftservices.com'
const EMAIL2 = import.meta.env.VITE_BUSINESS_EMAIL_SUPPORT || 'support@nativesoftservices.com'
const ADDR_DELHI = import.meta.env.VITE_ADDRESS_DELHI || 'C-43, Street No. 4, Shankar Nagar Ext., North Chhajjupur, Shahdara, Delhi, 110094'
const ADDR_GZB = import.meta.env.VITE_ADDRESS_GHAZIABAD || 'AHS-02, 2nd Floor, Lal Kuan, Bulandshahr Road Industrial Area, Ghaziabad, UP 201009'

const services = ['Web Design & Development','Search Engine Optimization','Online Reputation Management','Social Media Marketing','PPC / Google Ads','Branding & Design','Content Writing','Digital Strategy','Other']

const initialForm = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection or call us directly.')
    }
  }

  return (
    <main>
      {/* ─── Hero ────────────────────────────── */}
      <section className="page-hero contact-hero">
        <div className="orb orb-cyan" style={{ width:300, height:300, top:-60, left:'10%', zIndex:0 }} />
        <div className="orb orb-violet" style={{ width:350, height:350, bottom:-80, right:'5%', zIndex:0 }} />
        <div className="hero-grid-overlay" />
        <div className="container" style={{position:'relative', zIndex:2}}>
          <div className="tag animate-fade-up" style={{margin:'0 auto 20px'}}>Get In Touch</div>
          <h1 className="section-title animate-fade-up-d1" style={{fontSize:'clamp(40px,6vw,72px)'}}>
            Let's Build Something<br/><span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="section-subtitle animate-fade-up-d2" style={{margin:'24px auto 0', textAlign:'center', fontSize:18}}>
            Ready to take your digital presence to the next level? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── Contact Section ─────────────────── */}
      <section className="section">
        <div className="container contact-layout">

          {/* Left — Info */}
          <div className="contact-info">
            <div className="section-label">Contact Details</div>
            <h2 className="section-title" style={{fontSize:'clamp(28px,3vw,40px)'}}>We're Here to <span className="gradient-text">Help You</span></h2>
            <p style={{color:'var(--muted)', lineHeight:1.7, margin:'20px 0 40px'}}>
              Have a project in mind? Want a free consultation? Just want to say hello? Reach out — our team typically responds within a few hours.
            </p>

            {/* Info Cards */}
            <div className="info-cards">
              <a href={`tel:${PHONE}`} className="info-card">
                <div className="info-icon">📞</div>
                <div>
                  <div className="info-label">Call Us</div>
                  <div className="info-value">{PHONE}</div>
                  <div className="info-sub">Mon-Sat, 9AM – 7PM IST</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="info-card">
                <div className="info-icon">✉️</div>
                <div>
                  <div className="info-label">Email (General)</div>
                  <div className="info-value">{EMAIL}</div>
                  <div className="info-sub">Response within 24 hours</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL2}`} className="info-card">
                <div className="info-icon">🛠️</div>
                <div>
                  <div className="info-label">Email (Support)</div>
                  <div className="info-value">{EMAIL2}</div>
                  <div className="info-sub">For existing clients</div>
                </div>
              </a>
            </div>

            {/* Offices */}
            <div className="offices">
              <h4 className="offices-title">Our Offices</h4>
              <div className="office-item">
                <div className="office-badge">Delhi HQ</div>
                <p>{ADDR_DELHI}</p>
              </div>
              <div className="office-item">
                <div className="office-badge">Ghaziabad</div>
                <p>{ADDR_GZB}</p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="contact-stats">
              {[['< 1 hr','Avg Response'],['Free','Consultation'],['24/7','Support Portal']].map(([v,l]) => (
                <div key={l} className="cs-stat">
                  <div className="cs-stat-val">{v}</div>
                  <div className="cs-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-form-wrap">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send Us a Message</h3>
              <p style={{color:'var(--muted)', fontSize:14, marginBottom:28}}>Fill out the form below and we'll get back to you shortly.</p>

              {status === 'success' ? (
                <div className="success-state">
                  <div className="success-icon">🎉</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you! We've received your message and will get back to you within 24 hours. Check your inbox for a confirmation email.</p>
                  <button className="btn-outline" onClick={() => setStatus('idle')} style={{marginTop:24}}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input className="form-input" name="firstName" value={form.firstName} onChange={onChange} placeholder="Rahul" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input className="form-input" name="lastName" value={form.lastName} onChange={onChange} placeholder="Sharma" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={onChange} placeholder="rahul@company.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input className="form-input" type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service Interested In</label>
                    <div className="select-wrap">
                      <select className="form-select" name="service" value={form.service} onChange={onChange}>
                        <option value="">Select a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="select-arrow">▾</div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea className="form-textarea" name="message" value={form.message} onChange={onChange} placeholder="Tell us about your project, goals, budget and timeline..." required />
                  </div>

                  {status === 'error' && (
                    <div className="error-banner">⚠️ {errorMsg}</div>
                  )}

                  <button type="submit" className="btn-primary submit-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <>
                        <div className="spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map placeholder ─────────────────── */}
      <section style={{padding:'0 0 100px'}}>
        <div className="container">
          <div className="map-section">
            <div className="map-tab-group">
              <div className="map-tab active">📍 Delhi HQ</div>
              <div className="map-tab">📍 Ghaziabad</div>
            </div>
            <div className="map-embed">
              <iframe
                title="Delhi Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7!2d77.28!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzEyLjAiTiA3N8KwMTYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{border:0, borderRadius:'var(--radius)'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-overlay-card">
                <div style={{fontSize:24, marginBottom:8}}>🏢</div>
                <div style={{fontFamily:'var(--font-display)', fontWeight:700, color:'#fff', marginBottom:4}}>Delhi Head Office</div>
                <div style={{fontSize:13, color:'var(--muted)', lineHeight:1.5}}>{ADDR_DELHI}</div>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{marginTop:16, fontSize:13, padding:'10px 20px', display:'inline-flex'}}>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
