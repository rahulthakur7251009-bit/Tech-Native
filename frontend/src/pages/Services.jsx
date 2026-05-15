import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  { title: 'Full-stack Development', cat: 'Technology', desc: 'Custom platforms, e-commerce solutions, and high-performance web applications built with React, Node, and modern tech stacks.' },
  { title: 'Search Engine Authority', cat: 'Growth', desc: 'Data-driven SEO strategies designed to dominate search rankings and drive sustainable organic revenue.' },
  { title: 'Paid Performance', cat: 'Marketing', desc: 'ROI-focused Google and Meta ad campaigns engineered for maximum conversion and scaling.' },
  { title: 'Digital Brand Identity', cat: 'Design', desc: 'Strategic visual identities and UI/UX systems that position your brand at the forefront of your industry.' },
]

export default function Services() {
  return (
    <main className="services-page">
      <section className="hero">
        <div className="container">
          <div className="reveal">
            <span className="badge">Our Capabilities</span>
            <h1 className="hero-title">WE BUILD <br /> WHAT MATTERS.</h1>
            <p className="hero-desc">Specialized services for companies that want to lead, not follow.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((s, i) => (
              <div key={i} className="service-item grid">
                <div className="service-meta">
                  <span className="service-num">0{i + 1}</span>
                  <span className="service-cat">{s.cat}</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-text">{s.desc}</p>
                </div>
                <div className="service-action">
                  <Link to="/contact" className="btn btn-outline">ENQUIRE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="cta-title">HAVE A VISION?</h2>
          <Link to="/contact" className="btn btn-primary cta-btn">TALK TO AN EXPERT</Link>
        </div>
      </section>
    </main>
  )
}
