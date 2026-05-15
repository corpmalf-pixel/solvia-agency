import React from 'react'
import { createRoot } from 'react-dom/client'
import { GrainGradient } from '@paper-design/shaders-react'
import './style.css'

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
          SOLVIA
        </a>
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </header>

      <main>
        <section id="hero" className="panel hero reveal reveal-visible">
          <GradientBackground />
          <div className="hero-inner">
            <h1 className="hero-title" aria-label="La première impression, ça se construit.">
              <span className="title-line">La première impression,</span>
              <span className="title-line">ça se construit.</span>
            </h1>
            <p className="eyebrow">
              based in Paris made for the world<span className="cursor" aria-hidden="true">_</span>
            </p>
          </div>
          <a className="scroll-indicator" href="#statement" aria-label="Descendre vers la suite">
            ↓
          </a>
        </section>

        <section id="statement" className="panel statement reveal">
          <div className="statement-inner">
            <p className="statement-quote">Vos clients vous cherchent en ligne avant de vous appeler.</p>
            <p className="statement-note">Votre site est votre premier commercial. On s'assure qu'il travaille bien.</p>
          </div>
        </section>

        <section id="services" className="panel services reveal">
          <div className="services-list" aria-label="Services Solvia">
            <a className="service-row" href="#contact">
              <span className="service-index">01</span>
              <span className="service-name">Création de site vitrine</span>
              <span className="service-arrow" aria-hidden="true">→</span>
            </a>
            <a className="service-row" href="#contact">
              <span className="service-index">02</span>
              <span className="service-name">Refonte & optimisation</span>
              <span className="service-arrow" aria-hidden="true">→</span>
            </a>
            <a className="service-row" href="#contact">
              <span className="service-index">03</span>
              <span className="service-name">Sites e-commerce</span>
              <span className="service-arrow" aria-hidden="true">→</span>
            </a>
            <a className="service-row" href="#contact">
              <span className="service-index">04</span>
              <span className="service-name">Stratégie de présence en ligne</span>
              <span className="service-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section id="why" className="panel why reveal">
          <div className="why-inner">
            <h2 className="section-title">
              <span>À la hauteur</span>
              <span>de ce que vous valez.</span>
            </h2>
            <p className="why-copy">On ne crée pas des sites. On crée des premières impressions qui convertissent.</p>
          </div>
        </section>

        <section id="contact" className="panel contact reveal">
          <div className="contact-inner">
            <h2 className="section-title section-title-contact">Travaillons ensemble.</h2>
            <div className="contact-links">
              <a href="tel:+33656874221">06 56 87 42 21</a>
              <a href="mailto:solviaservice@gmail.com">solviaservice@gmail.com</a>
              <a href="https://www.linkedin.com/search/results/all/?keywords=Solvia%20Agency" target="_blank" rel="noreferrer">
                LinkedIn — Solvia Agency
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
