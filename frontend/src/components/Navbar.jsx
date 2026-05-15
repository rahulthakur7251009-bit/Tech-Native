import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../App'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          TECH<span>NATIVE</span>
        </Link>

        <div className="nav-links">
          {[
            ['/', 'Home'],
            ['/services', 'Services'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
          ].map(([path, label]) => (
            <Link 
              key={path} 
              to={path} 
              className={`nav-link ${pathname === path ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? 'LIGHT' : 'DARK'}
          </button>
          <Link to="/contact" className="btn btn-primary nav-cta">
            START A PROJECT
          </Link>
        </div>
      </div>
    </nav>
  )
}
