import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

// ─── Theme Context ──────────────────────────────────────────────────────────
export const ThemeContext = createContext(null)
export function useTheme() { return useContext(ThemeContext) }

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
  const [theme, setTheme] = useState(stored || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
