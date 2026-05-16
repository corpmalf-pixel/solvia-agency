import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const visionSection = {
  id: 'vision',
  title: 'Vision',
  description: [
    "La plupart des entreprises perdent des clients avant même d'avoir parlé.",
    "Solvia construit l'expérience que vos clients vivent avant de vous rencontrer celle qui justifie vos tarifs, légitime votre expertise et conclut les deals avant même que vous n'ayez à parler.",
  ],
}

export function VisionSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [44, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [0.22, 1])

  return (
    <section id="vision" ref={sectionRef} className="panel vision reveal reveal-visible">
      <div className="vision-overlay" aria-hidden="true"></div>
      <div className="vision-shell">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="vision-centered-block">
          <h2 className="vision-title">{visionSection.title}</h2>
          <div className="vision-description">
            {visionSection.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
