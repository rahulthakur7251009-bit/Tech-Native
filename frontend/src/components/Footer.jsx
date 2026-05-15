import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top grid">
          <div className="footer-brand">
            <h2 className="footer-logo">TECH<span>NATIVE</span></h2>
            <p>Building the digital infrastructure for modern commerce.</p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-label">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-label">Social</h4>
            <ul className="footer-links">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-label">Contact</h4>
            <ul className="footer-links">
              <li>info@technative.com</li>
              <li>+91 7880275152</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TECH NATIVE. ALL RIGHTS RESERVED.</p>
          <div className="footer-loc">DELHI / GHAZIABAD / REMOTE</div>
        </div>
      </div>
    </footer>
  )
}
