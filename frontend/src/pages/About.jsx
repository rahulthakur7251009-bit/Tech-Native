import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <main className="about-page">
      <section className="hero">
        <div className="container">
          <div className="reveal">
            <span className="badge">Established 2020</span>
            <h1 className="hero-title">WE ARE <br /> THE AGNOSTICS.</h1>
            <p className="hero-desc">Neutral in style, aggressive in performance. We build digital infrastructure for the next era of business.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid grid">
          <div className="about-intro">
            <h2 className="section-title">THE PHILOSOPHY</h2>
          </div>
          <div className="about-text">
            <p>
              Founded in Delhi-NCR, TechNative was born out of a necessity for precision. We believe that digital products should be more than just functional; they should be architectural. 
            </p>
            <p>
              Our process is stripped of fluff. No generic templates, no over-animated distractions. Just pure, performant engineering coupled with high-impact strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container grid stats-grid">
          {[
            ['4+', 'Years of Precision'],
            ['1200+', 'Assets Deployed'],
            ['45+', 'Strategic Minds'],
            ['100%', 'Result Oriented'],
          ].map(([val, label]) => (
            <div key={label} className="stat-item">
              <span className="stat-val">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="cta-title">JOIN THE MOVEMENT.</h2>
          <Link to="/contact" className="btn btn-primary cta-btn">START A CONVERSATION</Link>
        </div>
      </section>
    </main>
  )
}
