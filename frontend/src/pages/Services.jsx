import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    icon: '🌐',
    title: 'Web Design & Development',
    short: 'High-converting websites that turn visitors into customers.',
    desc: 'We build fast, mobile-first websites with stunning UI/UX that are engineered to convert. From landing pages to full e-commerce platforms — we craft every pixel with purpose.',
    features: ['Responsive Mobile-First Design','Custom UI/UX Design','E-Commerce Development','CMS Integration (WordPress/Shopify)','Performance Optimization','SEO-Ready Architecture'],
    color: '#00d4ff',
    tag: 'Web',
  },
  {
    icon: '🔍',
    title: 'Search Engine Optimization',
    short: 'Rank #1 on Google and drive sustainable organic traffic.',
    desc: 'Our data-driven SEO strategies combine technical excellence, quality content and authoritative link building to dominate search rankings for your target keywords.',
    features: ['Technical SEO Audit','Keyword Research & Strategy','On-Page Optimization','Link Building Campaigns','Local SEO (Google Business)','Monthly Analytics Reports'],
    color: '#00ff88',
    tag: 'SEO',
  },
  {
    icon: '⭐',
    title: 'Online Reputation Management',
    short: 'Protect and elevate your brand image across the internet.',
    desc: 'Your online reputation is your most valuable asset. We monitor, manage and improve how your business appears across review platforms, social media and search results.',
    features: ['Brand Monitoring 24/7','Negative Review Suppression','Positive Review Generation','Crisis Management','Social Listening','Sentiment Analysis'],
    color: '#7b2ff7',
    tag: 'ORM',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    short: 'Grow your audience and drive engagement across all platforms.',
    desc: 'Strategic social media management that builds communities, drives engagement and converts followers into loyal customers — across Instagram, Facebook, LinkedIn and more.',
    features: ['Platform Strategy & Setup','Content Calendar Creation','Creative Post Design','Community Management','Influencer Partnerships','Performance Analytics'],
    color: '#ff2d78',
    tag: 'SMO',
  },
  {
    icon: '📊',
    title: 'Digital Marketing & Strategy',
    short: 'End-to-end digital strategy tailored to your business goals.',
    desc: 'Comprehensive digital marketing roadmaps that integrate SEO, social media, content and paid ads into one cohesive strategy engineered for maximum growth.',
    features: ['Digital Audit & Analysis','Competitor Research','Multi-Channel Strategy','Campaign Management','A/B Testing','ROI Optimization'],
    color: '#ff9500',
    tag: 'Strategy',
  },
  {
    icon: '🎨',
    title: 'Branding & Designing',
    short: 'Create a brand identity that leaves a lasting impression.',
    desc: 'From logo design to complete brand guidelines, our creative team crafts visual identities that communicate your values, build trust and set you apart from competitors.',
    features: ['Logo & Identity Design','Brand Guidelines','Marketing Materials','Packaging Design','Social Media Branding','UI/UX Prototyping'],
    color: '#00d4ff',
    tag: 'Brand',
  },
  {
    icon: '✍️',
    title: 'Content Writing',
    short: 'Compelling content that informs, engages and converts.',
    desc: 'High-quality, SEO-optimized content that resonates with your audience — from blog posts and website copy to email campaigns and social media captions.',
    features: ['Blog Posts & Articles','Website Copywriting','Email Marketing Content','Product Descriptions','Social Media Captions','Press Releases'],
    color: '#ff6b6b',
    tag: 'Content',
  },
  {
    icon: '🎯',
    title: 'PPC / Google Ads',
    short: 'Maximize ROI with targeted paid advertising campaigns.',
    desc: 'ROI-focused Google Ads and Meta Ads campaigns that put your business in front of the right audience at the right moment — driving quality leads and measurable revenue.',
    features: ['Google Search Ads','Display & Banner Ads','Shopping Ads','Meta (Facebook/Instagram) Ads','Retargeting Campaigns','Conversion Tracking'],
    color: '#ffd700',
    tag: 'PPC',
  },
]

const faqs = [
  { q: 'What makes TechNative different from other agencies?', a: 'We combine deep expertise with a client-first approach. Every strategy is custom-built for your specific goals, and we measure success by your results — not just vanity metrics.' },
  { q: 'How long does it take to see SEO results?', a: 'SEO is a long-term investment. You can start seeing initial improvements within 3-4 months, with significant results typically appearing in 6-12 months depending on competition.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely! We work with businesses of all sizes — from startups and SMEs to large enterprises. Our packages are flexible and scalable to match your budget.' },
  { q: 'How do I get started?', a: 'Simply reach out via our contact page or call us directly. We\'ll schedule a free consultation to understand your business and recommend the best approach.' },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main>
      {/* ─── Hero ────────────────────────────── */}
      <section className="page-hero services-hero">
        <div className="orb orb-cyan"   style={{ width: 350, height: 350, top: -80, right: '10%', zIndex: 0 }} />
        <div className="orb orb-violet" style={{ width: 300, height: 300, bottom: -60, left: '5%', zIndex: 0 }} />
        <div className="hero-grid-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="tag animate-fade-up" style={{ margin: '0 auto 20px' }}>What We Offer</div>
          <h1 className="section-title animate-fade-up-d1" style={{ fontSize: 'clamp(38px, 6vw, 68px)' }}>
            Digital Services That<br/><span className="gradient-text">Drive Real Results</span>
          </h1>
          <p className="section-subtitle animate-fade-up-d2" style={{ margin: '24px auto 0', textAlign: 'center', fontSize: 17 }}>
            From SEO to social media, web design to PPC — we cover every angle of your digital presence.
          </p>
        </div>
      </section>

      {/* ─── Interactive Service Explorer ─────── */}
      <section className="section">
        <div className="container">
          <div className="service-explorer">
            {/* Tabs */}
            <div className="service-tabs">
              {services.map((s, i) => (
                <button
                  key={i}
                  className={`service-tab ${i === activeService ? 'active' : ''}`}
                  onClick={() => setActiveService(i)}
                  style={{'--color': s.color}}
                >
                  <span className="st-icon">{s.icon}</span>
                  <span className="st-label">{s.tag}</span>
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="service-panel">
              {services.map((s, i) => (
                <div key={i} className={`sp-content ${i === activeService ? 'active' : ''}`} style={{ '--color': s.color }}>
                  <div className="sp-header">
                    <div className="sp-icon">{s.icon}</div>
                    <div>
                      <div className="tag">{s.tag}</div>
                      <h2 className="sp-title">{s.title}</h2>
                    </div>
                  </div>
                  <p className="sp-desc">{s.desc}</p>
                  <div className="sp-features">
                    <h4>What's Included:</h4>
                    <div className="sp-feature-grid">
                      {s.features.map((f, j) => (
                        <div key={j} className="sp-feature">
                          <div className="sp-check">✓</div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary" style={{ marginTop: 32, display: 'inline-flex' }}>
                    <span>Get Started with {s.tag}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── All Services Grid ────────────────── */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>All Services</div>
            <h2 className="section-title">Everything You <span className="gradient-text">Need to Grow</span></h2>
          </div>
          <div className="all-services-grid">
            {services.map((s, i) => (
              <div key={i} className="card asg-card" style={{ '--color': s.color }} onClick={() => { setActiveService(i); window.scrollTo({ top: 400, behavior: 'smooth' }) }}>
                <div className="asg-top">
                  <div className="asg-icon">{s.icon}</div>
                  <div className="tag" style={{ borderColor: `${s.color}40`, color: s.color, background: `${s.color}12` }}>{s.tag}</div>
                </div>
                <h3 className="asg-title">{s.title}</h3>
                <p className="asg-short">{s.short}</p>
                <div className="asg-arrow">Explore →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="section-label" style={{ margin: '0 auto 16px' }}>How We Work</div>
            <h2 className="section-title">Simple, <span className="gradient-text">Transparent Process</span></h2>
          </div>
          <div className="svc-process">
            {[
              { n: '01', icon: '💬', t: 'Consultation', d: 'Free discovery call to understand your goals, challenges and current digital presence.' },
              { n: '02', icon: '📋', t: 'Strategy', d: 'Custom roadmap with clear milestones, timelines and expected outcomes for your business.' },
              { n: '03', icon: '⚡', t: 'Execution', d: 'Our expert team implements your strategy with precision using the latest tools and techniques.' },
              { n: '04', icon: '📈', t: 'Optimize & Report', d: 'Continuous monitoring, A/B testing and detailed monthly reports to maximize your ROI.' },
            ].map((p, i) => (
              <div key={i} className="svc-step">
                <div className="svc-step-num">{p.n}</div>
                <div className="svc-step-icon">{p.icon}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────── */}
      <section className="section" style={{background:'var(--bg2)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:56}}>
            <div className="section-label" style={{justifyContent:'center'}}>FAQs</div>
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <div className="faq-chevron">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </div>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ──────────────────────── */}
      <section className="section" style={{textAlign:'center'}}>
        <div className="container">
          <h2 className="section-title">Not Sure Which Service <span className="gradient-text">You Need?</span></h2>
          <p className="section-subtitle" style={{margin:'20px auto 36px'}}>Book a free consultation and our experts will recommend the perfect strategy for your business.</p>
          <div style={{display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-primary">
              <span>Book Free Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href={`tel:${import.meta.env.VITE_BUSINESS_PHONE || '+917880275152'}`} className="btn-outline">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
