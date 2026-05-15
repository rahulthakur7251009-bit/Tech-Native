import { Link } from 'react-router-dom'
import './Footer.css'

const PHONE = import.meta.env.VITE_BUSINESS_PHONE || '+91 7880275152'
const EMAIL = import.meta.env.VITE_BUSINESS_EMAIL || 'info@nativesoftservices.com'
const ADDR_DELHI = import.meta.env.VITE_ADDRESS_DELHI || 'Shahdara, Delhi 110094'
const ADDR_GZB = import.meta.env.VITE_ADDRESS_GHAZIABAD || 'Lal Kuan, Ghaziabad UP 201009'

const services = ['Web Design','SEO','ORM','Social Marketing','Google Ads','Branding','Strategy']
const quickLinks = [['/', 'Home'],['/about','About'],['/services','Services'],['/contact','Contact']]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-dot"></span>
              <span className="logo-text">TechNative</span>
            </Link>
            <p className="footer-desc">
              Professional digital solutions for modern businesses. We build websites that work and strategies that grow.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {quickLinks.map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li><a href={`tel:${PHONE}`}>{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><span>{ADDR_DELHI}</span></li>
              <li><span>{ADDR_GZB}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TechNative. Built for Excellence.</p>
          <div className="footer-socials">
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

