import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../App'
import './Navbar.css'

const NAV_LINKS = [['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/contact', 'Contact']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-inner container">
          
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-dot"></span>
            <span className="logo-text">TechNative</span>
          </Link>

          <nav className="nav-links">
            {NAV_LINKS.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link to="/contact" className="btn btn-primary nav-btn">
              Get Started
            </Link>
            <button 
              className={`hamburger ${menuOpen ? 'open' : ''}`} 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-links">
            {NAV_LINKS.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className="mobile-footer">
            <Link to="/contact" className="btn btn-primary w-full">Start a Project</Link>
          </div>
        </div>
      </header>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}

