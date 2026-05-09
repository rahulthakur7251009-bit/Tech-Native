import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// ─── Data ─────────────────────────────────────────────────────────────────────
const heroSlides = [
  {
    tag: 'Digital Marketing Experts',
    title: 'We Power Your',
    accent: 'Digital Growth',
    sub: 'Award-winning strategies that transform businesses across Delhi-NCR. From SEO to branding — we deliver results.',
    cta: 'Start Your Journey',
    cta2: 'View Services',
    bg: 'slide-bg-1',
  },
  {
    tag: 'Top SEO Agency in Delhi-NCR',
    title: 'Rank Higher,',
    accent: 'Convert Better',
    sub: 'Dominate Google search results with data-driven SEO strategies crafted by our expert team for maximum visibility.',
    cta: 'Get Free SEO Audit',
    cta2: 'Our Process',
    bg: 'slide-bg-2',
  },
  {
    tag: 'Web Design & Development',
    title: 'Websites That',
    accent: 'Actually Convert',
    sub: 'We build high-performance websites designed to turn visitors into loyal customers for your business.',
    cta: 'See Our Work',
    cta2: 'Contact Us',
    bg: 'slide-bg-3',
  },
]

const services = [
  { icon: '🌐', title: 'Web Design & Development', desc: 'High-converting websites built to turn visitors into customers. Mobile-first, blazing fast.', color: 'var(--primary)' },
  { icon: '🔍', title: 'Search Engine Optimization', desc: 'Data-driven SEO to rank your website on the first page of Google and drive organic traffic.', color: 'var(--success)' },
  { icon: '⭐', title: 'Online Reputation Management', desc: 'Protect and elevate your brand\'s image across the internet with proactive ORM strategies.', color: 'var(--accent2)' },
  { icon: '📱', title: 'Social Media Marketing', desc: 'Engage, grow and convert your audience across Instagram, Facebook, LinkedIn and more.', color: 'var(--accent3)' },
  { icon: '📊', title: 'Digital Strategy', desc: 'End-to-end digital marketing strategies crafted to achieve your unique business goals.', color: 'var(--warning)' },
  { icon: '🎨', title: 'Branding & Designing', desc: 'Memorable brand identities and stunning visuals that make you stand out from competitors.', color: 'var(--accent)' },
  { icon: '✍️', title: 'Content Writing', desc: 'Compelling content that informs, engages and converts across all digital channels.', color: '#f97316' },
  { icon: '🎯', title: 'PPC / Google Ads', desc: 'ROI-focused paid campaigns that drive targeted traffic and maximize every rupee spent.', color: '#eab308' },
]

const stats = [
  { num: '1200+', label: 'Projects Completed', icon: '🚀' },
  { num: '1000+', label: 'Happy Clients', icon: '😊' },
  { num: '4+', label: 'Years of Excellence', icon: '🏆' },
  { num: '45+', label: 'Digital Experts', icon: '👥' },
]

const testimonials = [
  { name: 'Arun Kumar', loc: 'India 🇮🇳', text: 'Working with Native Soft Services has been a game-changer. Their innovative strategies significantly boosted our online presence, leading to a noticeable increase in leads and sales.', rating: 5 },
  { name: 'Virendra Singh', loc: 'Noida 🇮🇳', text: 'We\'ve been working with them for over a year and couldn\'t be happier. From PPC campaigns to SEO optimization, they\'ve helped us achieve our digital marketing goals.', rating: 5 },
  { name: 'Ashwin Kumar', loc: 'Delhi 🇮🇳', text: 'As a small business owner, partnering with Native Soft has been a game-changer. Their tailored approach helped us expand our reach and connect with our target audience effectively.', rating: 5 },
  { name: 'John Doe', loc: 'USA 🇺🇸', text: 'Their commitment to work stands out. I\'ve never had to worry about discrepancies, which has given me peace of mind knowing my digital presence is in capable hands.', rating: 5 },
  { name: 'Jessica Smith', loc: 'USA 🇺🇸', text: 'Highly recommend! If you\'re looking for a reliable, trustworthy digital firm that truly cares about your success, look no further. Outstanding results!', rating: 5 },
]

const brands = ['Google Partner', 'Meta Business', 'Shopify', 'WordPress', 'HubSpot', 'Mailchimp', 'Semrush', 'Ahrefs', 'Canva Pro', 'Figma', 'AWS', 'Cloudflare']

const process = [
  { num: '01', title: 'Consultation', desc: 'We start with a detailed consultation to understand your business goals, target audience and challenges.', icon: '💬' },
  { num: '02', title: 'Strategy', desc: 'Our team crafts a tailored digital roadmap with measurable milestones and clear deliverables.', icon: '📋' },
  { num: '03', title: 'Execute', desc: 'We implement strategies with precision, using the latest tools and techniques for maximum impact.', icon: '⚡' },
  { num: '04', title: 'Grow', desc: 'Continuous monitoring, optimization and reporting to ensure sustained growth and ROI.', icon: '📈' },
]

// ─── Sub-Components ────────────────────────────────────────────────────────────
function StarRating({ count = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Home() {
  const [slide, setSlide] = useState(0)
  const [tSlide, setTSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef(null)

  // Hero auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setSlide(s => (s + 1) % heroSlides.length)
        setIsAnimating(false)
      }, 400)
    }, 5500)
    return () => clearInterval(intervalRef.current)
  }, [])

  const goSlide = (i) => {
    if (i === slide) return
    setIsAnimating(true)
    clearInterval(intervalRef.current)
    setTimeout(() => { setSlide(i); setIsAnimating(false) }, 400)
  }

  const prev = () => goSlide((slide - 1 + heroSlides.length) % heroSlides.length)
  const next = () => goSlide((slide + 1) % heroSlides.length)

  const tPerView = 3
  const maxT = testimonials.length - tPerView
  const prevT = () => setTSlide(s => Math.max(0, s - 1))
  const nextT = () => setTSlide(s => Math.min(maxT, s + 1))

  const s = heroSlides[slide]

  return (
    <main className="home">

      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className={`hero ${s.bg}`}>
        <div className="hero-grid-overlay" />
        <div className="orb orb-blue"   style={{ width: 500, height: 500, top: -100, left: -150, zIndex: 0 }} />
        <div className="orb orb-violet" style={{ width: 400, height: 400, bottom: -100, right: -100, zIndex: 0 }} />

        <div className="container hero-inner">
          <div className={`hero-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <div className="tag animate-fade-up">{s.tag}</div>
            <h1 className="hero-title animate-fade-up-d1">
              {s.title}<br/>
              <span className="gradient-text">{s.accent}</span>
            </h1>
            <p className="hero-sub animate-fade-up-d2">{s.sub}</p>
            <div className="hero-actions animate-fade-up-d3">
              <Link to="/contact" className="btn-primary">
                <span>{s.cta}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/services" className="btn-outline">{s.cta2}</Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`hero-visual animate-fade-up-d2 ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <div className="hero-card-cluster">
              <div className="hcard hcard-1 animate-float">
                <div className="hcard-icon">🚀</div>
                <div><div className="hcard-val">1200+</div><div className="hcard-lbl">Projects Done</div></div>
              </div>
              <div className="hcard hcard-2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="hcard-icon">📈</div>
                <div><div className="hcard-val">300%</div><div className="hcard-lbl">Avg ROI</div></div>
              </div>
              <div className="hcard hcard-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="hcard-icon">⭐</div>
                <div><div className="hcard-val">5.0</div><div className="hcard-lbl">Client Rating</div></div>
              </div>
              <div className="hero-globe">
                <div className="globe-ring r1" />
                <div className="globe-ring r2" />
                <div className="globe-ring r3" />
                <div className="globe-center"><span style={{ fontSize: 46 }}>🌐</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="carousel-dots">
            {heroSlides.map((_, i) => (
              <button key={i} className={`dot ${i === slide ? 'active' : ''}`} onClick={() => goSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <button className="carousel-btn" onClick={next} aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse"><div className="scroll-dot" /></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── Marquee ─────────────────────────────────────────────────── */}
      <div className="marquee-section">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="marquee-item">
                <span className="marquee-dot" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Stats ───────────────────────────────────────────────────── */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-card card">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Teaser ────────────────────────────────────────────── */}
      <section className="section about-teaser">
        <div className="container about-teaser-inner">
          <div className="about-teaser-left">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">Delhi-NCR's Most <span className="gradient-text">Trusted Digital Agency</span></h2>
            <p className="section-subtitle">For 4+ years, TechNative has been empowering national and international clients with world-class digital marketing services. We don't just deliver campaigns — we deliver results.</p>
            <div className="about-points">
              {[
                'Award-winning digital agency based in Delhi-NCR',
                'Serving 1000+ clients across India and globally',
                'Expert team of 45+ digital marketing professionals',
                'Proven ROI-driven approach for every campaign',
              ].map((p, i) => (
                <div key={i} className="about-point">
                  <div className="point-check">✓</div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
              <span>Learn More About Us</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          <div className="about-teaser-right">
            <div className="about-visual">
              <div className="av-badge av-badge-1">
                <div style={{ fontSize: 26 }}>🏆</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>Award Winning</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Agency of the Year</div>
                </div>
              </div>
              <div className="av-badge av-badge-2">
                <div style={{ fontSize: 26 }}>🌍</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>Global Reach</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>India & International</div>
                </div>
              </div>
              <div className="av-ring av-ring-1" />
              <div className="av-ring av-ring-2" />
              <div className="av-ring av-ring-3" />
              <div className="av-core">
                <span style={{ fontSize: 42 }}>💡</span>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text)', fontSize: 13, marginTop: 6 }}>TechNative</div>
              </div>
              <div className="av-badge av-badge-3">
                <div style={{ fontSize: 26 }}>📊</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--text)' }}>Data Driven</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Proven Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ────────────────────────────────────────────────── */}
      <section className="section services-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>What We Do</div>
            <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>End-to-end digital solutions designed to grow your business and outshine your competition.</p>
          </div>
          <div className="services-grid">
            {services.map((sv, i) => (
              <Link key={i} to="/services" className="service-card card" style={{ '--accent': sv.color }}>
                <div className="service-icon">{sv.icon}</div>
                <h3 className="service-title">{sv.title}</h3>
                <p className="service-desc">{sv.desc}</p>
                <div className="service-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn-primary">
              <span>Explore All Services</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Process ─────────────────────────────────────────────────── */}
      <section className="section process-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>How We Work</div>
            <h2 className="section-title">Our <span className="gradient-text">4-Step Process</span></h2>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <div className="process-num">{p.num}</div>
                <div className="process-icon">{p.icon}</div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
                {i < process.length - 1 && <div className="process-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────────── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div>
              <div className="section-label">Testimonials</div>
              <h2 className="section-title">What Our <span className="gradient-text">Clients Say</span></h2>
            </div>
            <div className="t-nav">
              <button className="t-nav-btn" onClick={prevT} disabled={tSlide === 0} aria-label="Previous testimonials">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="t-nav-btn" onClick={nextT} disabled={tSlide >= maxT} aria-label="Next testimonials">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
          <div className="testimonials-viewport">
            <div className="testimonials-track" style={{ transform: `translateX(calc(-${tSlide * (100 / tPerView)}% - ${tSlide * 20}px))` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-card card">
                  <div className="quote-icon">"</div>
                  <StarRating count={t.rating} />
                  <p className="t-text">{t.text}</p>
                  <div className="t-author">
                    <div className="t-avatar">{t.name[0]}</div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-loc">{t.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Strip ───────────────────────────────────────────────── */}
      <section className="section contact-strip">
        <div className="container">
          <div className="contact-strip-inner">
            <div className="cs-left">
              <h2 className="section-title">Ready to <span className="gradient-text">Grow Your Business?</span></h2>
              <p style={{ color: 'var(--text-muted)', marginTop: 12, fontSize: 16 }}>Get a free consultation and custom strategy from our experts today.</p>
            </div>
            <div className="cs-actions">
              <Link to="/contact" className="btn-primary">
                <span>Book Free Consultation</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href={`tel:${import.meta.env.VITE_BUSINESS_PHONE || '+917880275152'}`} className="btn-outline">
                📞 {import.meta.env.VITE_BUSINESS_PHONE || '+91 78802 75152'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
