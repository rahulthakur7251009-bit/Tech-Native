import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  { title: 'Development', desc: 'Crafting high-performance digital products.' },
  { title: 'Growth', desc: 'Data-driven strategies for market dominance.' },
  { title: 'Identity', desc: 'Building brands that command attention.' },
  { title: 'Consulting', desc: 'Expert guidance for the digital age.' },
]

export default function Home() {
  return (
    <main className="home-page">
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="reveal">
            <span className="badge">Digital Agency 2024</span>
            <h1 className="hero-title">
              DESIGNING <br />
              HIGH-IMPACT <br />
              EXPERIENCES.
            </h1>
            <p className="hero-desc">
              We partner with ambitious brands to build the next generation <br />
              of digital products and platforms.
            </p>
            <div className="hero-actions flex">
              <Link to="/contact" className="btn btn-primary">WORK WITH US</Link>
              <Link to="/services" className="btn btn-outline">VIEW SERVICES</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ────────────────────────────────────────────────────── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OUR EXPERTISE</h2>
          </div>
          <div className="services-grid grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <span className="service-num">0{i + 1}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Clients / Marquee (Clean) ──────────────────────────────────── */}
      <section className="section clients-section">
        <div className="container">
          <div className="clients-header">
            <h2 className="section-title">GLOBAL PARTNERS</h2>
          </div>
          <div className="clients-list">
            {['Vercel', 'Stripe', 'Apple', 'Linear', 'OpenAI'].map(c => (
              <div key={c} className="client-logo">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ───────────────────────────────────────────────────── */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="cta-title">READY TO BUILD?</h2>
          <Link to="/contact" className="btn btn-primary cta-btn">START A PROJECT</Link>
        </div>
      </section>
    </main>
  )
}
