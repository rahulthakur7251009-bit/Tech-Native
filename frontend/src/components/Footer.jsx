import { Link } from 'react-router-dom'
import './Footer.css'

const PHONE = import.meta.env.VITE_BUSINESS_PHONE || '+91 7880275152'
const EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || 'info@nativesoftservices.com'
const EMAIL2 = import.meta.env.VITE_BUSINESS_EMAIL_SUPPORT || 'support@nativesoftservices.com'
const ADDR_DELHI = import.meta.env.VITE_ADDRESS_DELHI || 'C-43, Street No. 4, Shankar Nagar Ext., Shahdara, Delhi 110094'
const ADDR_GZB = import.meta.env.VITE_ADDRESS_GHAZIABAD || 'AHS-02, 2nd Floor, Lal Kuan, Bulandshahr Road, Ghaziabad UP 201009'

const services = ['Web Design & Development','Search Engine Optimization','Online Reputation Management','Social Media Marketing','PPC / Google Ads','Branding & Design','Content Writing','Digital Strategy']
const quickLinks = [['/', 'Home'],['/about','About Us'],['/services','Services'],['/contact','Contact']]

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <p className="section-label">Ready to Grow?</p>
            <h2 className="footer-cta-title">Let's Build Your Digital Empire</h2>
            <p style={{color:'var(--muted)', marginTop:12}}>Schedule a free consultation with our experts today.</p>
          </div>
          <div className="footer-cta-actions">
            <Link to="/contact" className="btn-primary">
              <span>Book Free Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href={`tel:${PHONE}`} className="btn-outline">Call Now</a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                  <defs>
                    <linearGradient id="flg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00d4ff"/><stop offset="1" stopColor="#7b2ff7"/>
                    </linearGradient>
                  </defs>
                  <rect width="36" height="36" rx="10" fill="url(#flg)"/>
                  <path d="M10 11h16M18 11v14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="18" cy="25" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="footer-logo-text"><span>Tech</span><span className="logo-accent">Native</span></span>
            </Link>
            <p className="footer-tagline">Empowering businesses across Delhi-NCR with cutting-edge digital strategies that drive real growth.</p>
            {/* Social */}
            <div className="footer-social">
              {[
                ['Facebook', 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'],
                ['Instagram', 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01'],
                ['LinkedIn', 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z'],
                ['Twitter', 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'],
              ].map(([name, d]) => (
                <a key={name} href={import.meta.env[`VITE_SOCIAL_${name.toUpperCase()}`] || '#'} className="social-icon" aria-label={name} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              {services.map(s => (
                <li key={s}><Link to="/services" className="footer-link">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map(([to, label]) => (
                <li key={to}><Link to={to} className="footer-link">{label}</Link></li>
              ))}
            </ul>
            <h4 className="footer-col-title" style={{marginTop:28}}>Contact</h4>
            <ul className="footer-list">
              <li><a href={`tel:${PHONE}`} className="footer-link footer-contact-item">📞 {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="footer-link footer-contact-item">✉️ {EMAIL}</a></li>
              <li><a href={`mailto:${EMAIL2}`} className="footer-link footer-contact-item">✉️ {EMAIL2}</a></li>
            </ul>
          </div>

          {/* Offices */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Offices</h4>
            <div className="footer-office">
              <span className="office-label">Delhi HQ</span>
              <p>{ADDR_DELHI}</p>
            </div>
            <div className="footer-office">
              <span className="office-label">Ghaziabad</span>
              <p>{ADDR_GZB}</p>
            </div>
            <div className="footer-stats-mini">
              {[['1200+','Projects'],['1000+','Clients'],['45+','Team']].map(([n,l]) => (
                <div key={l} className="mini-stat">
                  <span className="mini-stat-num">{n}</span>
                  <span className="mini-stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>© {new Date().getFullYear()} TechNative. All rights reserved.</p>
            <p>Crafted with ❤️ for Digital Excellence in Delhi-NCR</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
