import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { icon: '🎯', title: 'Results-Driven', desc: 'Every strategy we craft is laser-focused on delivering measurable ROI for your business.' },
  { icon: '💡', title: 'Innovation First', desc: 'We stay ahead of digital trends to ensure your brand is always one step ahead of competitors.' },
  { icon: '🤝', title: 'Client-Centric', desc: 'Your success is our success. We treat every client relationship as a true partnership.' },
  { icon: '📊', title: 'Data-Backed', desc: 'Every decision is grounded in analytics and real data — not guesswork.' },
  { icon: '⚡', title: 'Agile & Fast', desc: 'Quick turnarounds without compromising quality. We move at the speed of your ambition.' },
  { icon: '🏆', title: 'Excellence', desc: 'Award-winning work delivered consistently across every service we offer.' },
]

const team = [
  { name: 'Creative Director', icon: '🎨', dept: 'Design' },
  { name: 'SEO Lead', icon: '🔍', dept: 'Search' },
  { name: 'PPC Specialist', icon: '🎯', dept: 'Ads' },
  { name: 'Content Head', icon: '✍️', dept: 'Content' },
  { name: 'Dev Lead', icon: '💻', dept: 'Tech' },
  { name: 'Social Media Manager', icon: '📱', dept: 'Social' },
]

const testimonials = [
  { name: 'Arun Kumar', loc: 'India', text: 'Working with Native Soft Services has been a game-changer for our business. Their innovative strategies and attention to detail have significantly boosted our online presence.', rating: 5 },
  { name: 'Virendra Singh', loc: 'Noida', text: 'We\'ve been working with them for over a year now, and we couldn\'t be happier. From PPC campaigns to SEO optimization, they\'ve helped us achieve our digital marketing goals.', rating: 5 },
  { name: 'Ashwin Kumar', loc: 'Delhi', text: 'As a small business owner, partnering with Native Soft has been a game-changer. Their tailored approach and strategic guidance have helped us expand our online reach.', rating: 5 },
]

export default function About() {
  return (
    <main>
      {/* ─── Hero ─────────────────────────────── */}
      <section className="page-hero about-hero">
        <div className="orb orb-blue"   style={{ width: 400, height: 400, top: -100, left: '20%', zIndex: 0 }} />
        <div className="orb orb-violet" style={{ width: 300, height: 300, bottom: -80, right: '15%', zIndex: 0 }} />
        <div className="hero-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag animate-fade-up" style={{ margin: '0 auto 20px' }}>About TechNative</div>
          <h1 className="section-title animate-fade-up-d1" style={{ fontSize: 'clamp(38px, 6vw, 68px)' }}>
            Delhi-NCR's Most<br/><span className="gradient-text">Trusted Digital Agency</span>
          </h1>
          <p className="section-subtitle animate-fade-up-d2" style={{ margin: '24px auto 0', textAlign: 'center', maxWidth: 580, fontSize: 17 }}>
            Empowering businesses for 4+ years with world-class digital marketing strategies that deliver real, measurable results.
          </p>
        </div>
      </section>

      {/* ─── Mission / Vision / Promise ────────── */}
      <section className="section">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>To empower businesses to reach their full potential in the digital sphere by delivering innovative, tailor-made solutions aligned to their unique objectives.</p>
            </div>
            <div className="mvv-card mvv-featured">
              <div className="mvv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To redefine digital marketing by harnessing innovation, creativity and cutting-edge strategies to empower businesses of all sizes across India and the world.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">💎</div>
              <h3>Our Promise</h3>
              <p>We are dedicated to delivering nothing short of excellence in every aspect of our work — from strategy to execution to reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Story ────────────────────────────── */}
      <section className="section story-section">
        <div className="container story-inner">
          <div className="story-content">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">From Noida to the <span className="gradient-text">World Stage</span></h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 20 }}>
              TechNative (formerly Native Soft Services) was founded with a single purpose: to make world-class digital marketing accessible to every business. Starting in the heart of Delhi-NCR, we quickly grew from a small team into a full-service powerhouse serving clients across India and internationally.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 16 }}>
              Over 4+ years, we have helped startups, SMEs and enterprises alike — driving growth through smart SEO, high-converting web design, powerful PPC campaigns and data-driven social media strategies. Today we operate from two offices (Delhi and Ghaziabad) with a dedicated team of 45+ digital experts.
            </p>
            <div className="story-stats">
              {[['4+', 'Years Experience'], ['1200+', 'Projects Done'], ['2', 'Regional Offices'], ['1000+', 'Happy Clients']].map(([n, l]) => (
                <div key={l} className="story-stat">
                  <div className="stat-number">{n}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="story-visual">
            <div className="timeline">
              {[
                { year: '2020', label: 'Founded', desc: 'Started in Noida with a vision to redefine digital marketing.' },
                { year: '2021', label: 'First 100 Clients', desc: 'Rapidly grew our client base across Delhi-NCR.' },
                { year: '2022', label: 'Award Winning', desc: 'Recognized as one of the top digital agencies in the region.' },
                { year: '2023', label: 'Global Expansion', desc: 'Started serving international clients across USA, UAE and beyond.' },
                { year: '2024+', label: 'TechNative Era', desc: 'Rebranded and scaled with 45+ experts across 2 offices.' },
              ].map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <strong>{item.label}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ──────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>What We Stand For</div>
            <h2 className="section-title">Our Core <span className="gradient-text">Values</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="card value-card">
                <div style={{ fontSize: 32, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)', marginBottom: 10, fontSize: 17, letterSpacing: '-0.01em' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>Meet Our Experts</div>
            <h2 className="section-title">The Team Behind <span className="gradient-text">Your Success</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>45+ passionate digital experts working round the clock for your growth.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="card team-card">
                <div className="team-avatar">{m.icon}</div>
                <div className="tag" style={{ marginBottom: 8, fontSize: 10 }}>{m.dept}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)', fontSize: 14, letterSpacing: '-0.01em' }}>{m.name}</h3>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 32, fontSize: 14 }}>...and 39+ more specialists across SEO, development, ads and strategy.</p>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>Client Stories</div>
            <h2 className="section-title">Words That <span className="gradient-text">Matter</span></h2>
          </div>
          <div className="about-testimonials">
            {testimonials.map((t, i) => (
              <div key={i} className="card at-card">
                <div className="quote-mark">"</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 22, fontSize: 14 }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="t-avatar">{t.name[0]}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)', fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-label" style={{ margin: '0 auto 16px' }}>Work With Us</div>
          <h2 className="section-title">Ready to <span className="gradient-text">Get Started?</span></h2>
          <p className="section-subtitle" style={{ margin: '16px auto 36px' }}>Let's have a conversation about how we can grow your business together.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">
              <span>Book Free Consultation</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
