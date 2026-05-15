import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { title: 'Results-Driven', desc: 'Every strategy we craft is laser-focused on delivering measurable ROI.' },
  { title: 'Innovation First', desc: 'We stay ahead of digital trends to ensure your brand is always ahead.' },
  { title: 'Client-Centric', desc: 'Your success is our success. We treat every relationship as a partnership.' },
  { title: 'Data-Backed', desc: 'Every decision is grounded in analytics and real data.' },
]

const timeline = [
  { year: '2020', label: 'Founded', desc: 'Started with a vision to redefine digital marketing.' },
  { year: '2022', label: 'Market Leader', desc: 'Recognized as a top digital agency in Delhi-NCR.' },
  { year: '2024', label: 'TechNative', desc: 'Rebranded and scaled to serve global clients.' },
]

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="badge">Our Story</span>
          <h1 className="hero-title">
            Delhi-NCR's Most <br />
            <span className="text-gradient">Trusted Digital Agency</span>
          </h1>
          <p className="hero-desc">
            Empowering businesses for 4+ years with world-class digital marketing strategies that deliver real, measurable results.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">From Local to Global</h2>
              <p>
                TechNative was founded with a single purpose: to make world-class digital marketing accessible to every business. Starting in the heart of Delhi-NCR, we quickly grew into a full-service powerhouse.
              </p>
              <p>
                Today, we serve clients across India and internationally, driving growth through smart SEO, high-converting web design, and data-driven strategies.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>4+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-card">
                <h3>1200+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-card">
                <h3>45+</h3>
                <p>Digital Experts</p>
              </div>
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-desc">The principles that drive our work every single day.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-desc">How we became who we are today.</p>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.label}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to start your journey?</h2>
            <p>Let's build something extraordinary together.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Work With Us</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

