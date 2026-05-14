import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="background-stage" aria-hidden="true">
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>
    <div class="bg-grid"></div>
  </div>

  <header class="site-header" data-nav>
    <a class="brand" href="#hero" aria-label="Solvia home">SOLVIA</a>
    <a class="nav-link" href="#contact">Nous contacter</a>
  </header>

  <main>
    <section id="hero" class="panel hero reveal reveal-visible">
      <div class="hero-inner">
        <h1 class="hero-title" aria-label="La première impression, ça se construit.">
          <span class="title-line">La première impression,</span>
          <span class="title-line">ça se construit.</span>
        </h1>
        <p class="eyebrow">Agence web — Paris & France entière<span class="cursor" aria-hidden="true">_</span></p>
      </div>
      <a class="scroll-indicator" href="#statement" aria-label="Descendre vers la suite">↓</a>
    </section>

    <section id="statement" class="panel statement reveal">
      <div class="statement-inner">
        <p class="statement-quote">Vos clients vous cherchent en ligne avant de vous appeler.</p>
        <p class="statement-note">Votre site est votre premier commercial. On s'assure qu'il travaille bien.</p>
      </div>
    </section>

    <section id="services" class="panel services reveal">
      <div class="services-list" aria-label="Services Solvia">
        <a class="service-row" href="#contact">
          <span class="service-index">01</span>
          <span class="service-name">Création de site vitrine</span>
          <span class="service-arrow" aria-hidden="true">→</span>
        </a>
        <a class="service-row" href="#contact">
          <span class="service-index">02</span>
          <span class="service-name">Refonte & optimisation</span>
          <span class="service-arrow" aria-hidden="true">→</span>
        </a>
        <a class="service-row" href="#contact">
          <span class="service-index">03</span>
          <span class="service-name">Sites e-commerce</span>
          <span class="service-arrow" aria-hidden="true">→</span>
        </a>
        <a class="service-row" href="#contact">
          <span class="service-index">04</span>
          <span class="service-name">Stratégie de présence en ligne</span>
          <span class="service-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section id="why" class="panel why reveal">
      <div class="why-inner">
        <h2 class="section-title">
          <span>À la hauteur</span>
          <span>de ce que vous valez.</span>
        </h2>
        <p class="why-copy">On ne crée pas des sites. On crée des premières impressions qui convertissent.</p>
      </div>
    </section>

    <section id="contact" class="panel contact reveal">
      <div class="contact-inner">
        <h2 class="section-title section-title-contact">Travaillons ensemble.</h2>
        <div class="contact-links">
          <a href="tel:+33656874221">06 56 87 42 21</a>
          <a href="mailto:solviaservice@gmail.com">solviaservice@gmail.com</a>
          <a href="https://www.linkedin.com/search/results/all/?keywords=Solvia%20Agency" target="_blank" rel="noreferrer">LinkedIn — Solvia Agency</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2025 Solvia — Tous droits réservés</p>
  </footer>
`

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
