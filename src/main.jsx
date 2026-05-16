import React from 'react'
import { createRoot } from 'react-dom/client'
import { GrainGradient } from '@paper-design/shaders-react'
import { VisionSection } from './components/VisionSection'
import { siteConfig } from './config/site'
import './styles/base.css'
import './styles/sections.css'

function GradientBackground() {
  return (
    <div className="hero-media" aria-hidden="true">
      <div className="hero-paper-bg">
        <GrainGradient
          style={{ height: '100%', width: '100%' }}
          colorBack="hsl(228, 26%, 6%)"
          softness={0.92}
          intensity={0.32}
          noise={0}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1.08}
          rotation={-8}
          speed={0.35}
          colors={['hsl(18, 92%, 56%)', 'hsl(42, 96%, 54%)', 'hsl(332, 78%, 50%)']}
        />
      </div>
      <div className="hero-media-overlay"></div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="background-stage" aria-hidden="true">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-grid"></div>
      </div>

      <header className="site-header" data-nav>
        <a className="brand" href="#hero" aria-label="Solvia home">
          {siteConfig.brand}
        </a>
        <div className="header-nav-group">
          <a className="nav-link" href="#vision">
            Vision
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="panel hero reveal reveal-visible">
          <GradientBackground />
          <div className="hero-inner">
            <p className="hero-center-label">{siteConfig.heroLabel}</p>
            <h1 className="hero-title" aria-label={siteConfig.heroTitle.join(' ')}>
              {siteConfig.heroTitle.map((line) => (
                <span key={line} className="title-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="eyebrow">
              {siteConfig.heroEyebrow}
              <span className="cursor" aria-hidden="true">_</span>
            </p>
          </div>
        </section>

        <VisionSection />

        <section id="statement" className="panel statement reveal">
          <div className="statement-inner">
            <p className="statement-quote">{siteConfig.statementQuote}</p>
            <p className="statement-note">{siteConfig.statementNote}</p>
          </div>
        </section>

        <section id="services" className="panel services reveal">
          <div className="services-list" aria-label="Services Solvia">
            {siteConfig.services.map((service, index) => (
              <a key={service} className="service-row" href="#contact">
                <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-name">{service}</span>
                <span className="service-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <section id="why" className="panel why reveal">
          <div className="why-inner">
            <h2 className="section-title">
              {siteConfig.whyTitle.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="why-copy">{siteConfig.whyCopy}</p>
          </div>
        </section>

        <section id="contact" className="panel contact reveal">
          <div className="contact-inner">
            <h2 className="section-title section-title-contact">Travaillons ensemble.</h2>
            <div className="contact-links">
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
              <a href={siteConfig.contact.linkedinHref} target="_blank" rel="noreferrer">
                {siteConfig.contact.linkedinLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 Solvia — Tous droits réservés</p>
      </footer>
    </>
  )
}

createRoot(document.querySelector('#app')).render(<App />)

const nav = document.querySelector('[data-nav]')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.16,
  },
)

document.querySelectorAll('.reveal').forEach((element) => {
  if (!element.classList.contains('reveal-visible')) observer.observe(element)
})

const syncHeader = () => {
  if (window.scrollY > 24) nav.classList.add('is-scrolled')
  else nav.classList.remove('is-scrolled')
}

syncHeader()
window.addEventListener('scroll', syncHeader, { passive: true })
