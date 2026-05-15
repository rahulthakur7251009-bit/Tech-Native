import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    title: 'Web Development',
    desc: 'High-performance, mobile-first websites engineered to convert visitors into loyal customers.',
    features: ['Custom UI/UX', 'E-commerce', 'CMS Integration', 'SEO Optimized'],
    tag: 'Web',
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Dominate search rankings and drive sustainable organic growth for your brand.',
    features: ['Technical Audit', 'Keyword Strategy', 'Link Building', 'Local SEO'],
    tag: 'SEO',
  },
  {
    title: 'Paid Advertising',
    desc: 'ROI-focused campaigns that put your business in front of the right audience.',
    features: ['Google Ads', 'Meta Ads', 'Retargeting', 'Lead Gen'],
    tag: 'PPC',
  },
  {
    title: 'Social Marketing',
    desc: 'Strategic social management that builds communities and drives engagement.',
    features: ['Content Strategy', 'Community Mgmt', 'Influencers', 'Analytics'],
    tag: 'Social',
  },
]

const faqs = [
  { q: 'How long does SEO take?', a: 'SEO is a long-term strategy. You can expect initial results in 3-4 months, with significant growth in 6-12 months.' },
  { q: 'Do you work with startups?', a: 'Yes, we work with businesses of all sizes, from early-stage startups to established enterprises.' },
  { q: 'What is your process?', a: 'Our process is transparent: Consultation, Strategy, Execution, and continuous Optimization.' },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <span className="badge">Expertise</span>
          <h1 className="hero-title">
            Digital Solutions That <br />
            <span className="text-gradient">Drive Real Growth</span>
          </h1>
          <p className="hero-desc">
            From performance marketing to high-end development, we provide the tools you need to succeed in the digital era.
          </p>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-detail-card">
                <div className="card-tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="feature-list">
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-link">Get Started →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Process</h2>
            <p className="section-desc">How we deliver excellence consistently.</p>
          </div>
          <div className="process-list">
            {[
              { n: '01', t: 'Discovery', d: 'We learn about your business, goals, and challenges.' },
              { n: '02', t: 'Strategy', d: 'We craft a custom roadmap designed for growth.' },
              { n: '03', t: 'Execution', d: 'Our experts implement the plan with precision.' },
              { n: '04', t: 'Optimization', d: 'We monitor and refine to maximize your results.' },
            ].map((p, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{p.n}</div>
                <div className="step-content">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Common Questions</h2>
            <p className="section-desc">Everything you need to know about working with us.</p>
          </div>
          <div className="faq-container">
            {faqs.map((f, i) => (
              <div 
                key={i} 
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{f.q}</span>
                  <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && <div className="faq-answer"><p>{f.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to scale your business?</h2>
            <p>Book a free consultation and let's discuss your roadmap to success.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
              <a href="tel:+917880275152" className="btn btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

