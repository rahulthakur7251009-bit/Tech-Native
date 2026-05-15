import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Crafting high-performance, responsive websites that serve as your 24/7 digital storefront.' },
  { icon: '🔍', title: 'Search Engine Optimization', desc: 'Strategic SEO to ensure your brand stands out where it matters most: the first page.' },
  { icon: '📱', title: 'Social Media Management', desc: 'Building communities and driving engagement through data-backed social strategies.' },
  { icon: '🎯', title: 'PPC & Lead Generation', desc: 'ROI-focused campaigns designed to convert interest into measurable business growth.' },
  { icon: '🎨', title: 'Branding & Design', desc: 'Visual identities that tell your story and resonate with your target audience.' },
  { icon: '📊', title: 'Digital Consulting', desc: 'Expert guidance to navigate the complex digital landscape and achieve your goals.' },
]

const stats = [
  { num: '1.2k+', label: 'Successful Projects' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '4+', label: 'Years of Excellence' },
  { num: '24/7', label: 'Dedicated Support' },
]

const brands = ['Google Partner', 'Meta Business', 'Shopify', 'WordPress', 'HubSpot', 'Mailchimp', 'AWS', 'Cloudflare']

const testimonials = [
  { name: 'Arun Kumar', text: 'TechNative transformed our digital presence. Their attention to detail and strategic approach is unparalleled.', loc: 'Founder, Techflow' },
  { name: 'Jessica Smith', text: 'The most professional agency we\'ve worked with. They delivered results beyond our expectations.', loc: 'Marketing Director, Globalize' },
  { name: 'Virendra Singh', text: 'Data-driven and results-oriented. They truly understand how to grow a brand online.', loc: 'CEO, V-Soft' },
]

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="home">
      
      {/* ─── Hero Section ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-reveal">
            <div className="badge hero-badge">Trusted by 1000+ Brands</div>
            <h1 className="hero-title">
              Crafting <span className="font-serif">digital</span> experiences that <span className="text-gradient">matter.</span>
            </h1>
            <p className="hero-description">
              We combine strategy, design, and technology to help ambitious brands grow in the digital age. Based in Delhi-NCR, serving the world.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn btn-primary">Start a Project</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </div>

          <div className="hero-visual animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="visual-card">
              <div className="card-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="card-body">
                <div className="skeleton title"></div>
                <div className="skeleton line"></div>
                <div className="skeleton line short"></div>
                <div className="visual-stats">
                  <div className="v-stat">
                    <span className="v-num">85%</span>
                    <span className="v-lbl">Growth</span>
                  </div>
                  <div className="v-stat">
                    <span className="v-num">12k</span>
                    <span className="v-lbl">Leads</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-floating-badge">
              <span className="badge-icon">🚀</span>
              <div className="badge-text">
                <strong>Fastest</strong> Growth Agency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Brands Marquee ───────────────────────────────────────────── */}
      <section className="brands-marquee">
        <div className="container">
          <p className="marquee-label">Powering innovative companies worldwide</p>
          <div className="marquee-content">
            <div className="marquee-track">
              {[...brands, ...brands].map((brand, i) => (
                <span key={i} className="brand-item">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Grid ──────────────────────────────────────────────── */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="stat-number">{stat.num}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Section ────────────────────────────────────────── */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Expertise</span>
            <h2 className="section-title">Solutions designed for <span className="font-serif">growth</span></h2>
            <p className="section-desc">We offer a comprehensive suite of digital services tailored to your specific business needs.</p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="card service-card">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <Link to="/services" className="service-link">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Teaser ────────────────────────────────────────────── */}
      <section className="section about-section">
        <div className="container about-container">
          <div className="about-image animate-reveal">
            <div className="image-stack">
              <div className="img-main">
                <div className="placeholder-img">
                   <span className="font-serif" style={{ fontSize: '3rem', opacity: 0.1 }}>TechNative</span>
                </div>
              </div>
              <div className="img-accent"></div>
            </div>
          </div>
          <div className="about-content animate-reveal" style={{ animationDelay: '0.2s' }}>
            <span className="badge">Our Story</span>
            <h2 className="section-title">A partner, not just an <span className="font-serif">agency.</span></h2>
            <p className="section-desc">
              At TechNative, we believe in building long-term relationships. We don't just execute tasks; we integrate with your team to understand your vision and drive real business outcomes.
            </p>
            <ul className="about-list">
              <li>Strategic approach to every project</li>
              <li>Data-driven decision making</li>
              <li>Expert team with 4+ years of experience</li>
              <li>Focus on ROI and measurable growth</li>
            </ul>
            <Link to="/about" className="btn btn-outline">Our Philosophy</Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────────── */}
      <section className="section testimonial-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Reviews</span>
            <h2 className="section-title">What our <span className="font-serif">clients</span> say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="card testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-footer">
                  <div className="t-info">
                    <span className="t-name">{t.name}</span>
                    <span className="t-loc">{t.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Strip ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to elevate your <span className="font-serif">digital</span> presence?</h2>
            <p className="cta-desc">Let's build something extraordinary together. Your growth journey starts with a simple conversation.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
              <a href={`tel:${import.meta.env.VITE_BUSINESS_PHONE || '+917880275152'}`} className="btn btn-outline">Call Us Directly</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

