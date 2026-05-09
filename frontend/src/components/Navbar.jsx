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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-inner container">

          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-icon">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <defs>
                  <linearGradient id="nlg" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6"/>
                    <stop offset="0.5" stopColor="#8b5cf6"/>
                    <stop offset="1" stopColor="#ec4899"/>
                  </linearGradient>
                </defs>
                <rect width="34" height="34" rx="9" fill="url(#nlg)"/>
                <path d="M9 10h16M17 10v14" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="17" cy="24" r="2.5" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-main">Tech</span><span className="logo-accent">Native</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links" aria-label="Primary navigation">
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

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Phone */}
            <a
              href={`tel:${import.meta.env.VITE_BUSINESS_PHONE || '+917880275152'}`}
              className="nav-phone"
              aria-label="Call us"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12 19.79 19.79 0 011 3.18 2 2 0 013 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>{import.meta.env.VITE_BUSINESS_PHONE || '+91 78802 75152'}</span>
            </a>

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* CTA */}
            <Link to="/contact" className="btn-primary nav-cta-btn">
              <span>Get Started</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <nav className="mobile-links">
            {NAV_LINKS.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                end={to === '/'}
              >
                {label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-link-arrow">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-bottom">
            <a href={`tel:${import.meta.env.VITE_BUSINESS_PHONE || '+917880275152'}`} className="mobile-phone">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 12 19.79 19.79 0 011 3.18 2 2 0 013 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {import.meta.env.VITE_BUSINESS_PHONE || '+91 78802 75152'}
            </a>
            <Link to="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>
              <span>Get Started</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <button className="mobile-theme-btn" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </>
  )
}
