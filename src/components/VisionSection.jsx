import React, { useRef } from 'react'
import { GrainGradient } from '@paper-design/shaders-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const visionSection = {
  id: 'vision',
  title: 'Vision',
  description: [
    "La plupart des entreprises perdent des clients avant même d'avoir parlé.",
    "Solvia construit l'expérience que vos clients vivent avant de vous rencontrer celle qui justifie vos tarifs, légitime votre expertise et conclut les deals avant même que vous n'ayez à parler.",
  ],
}

function VisionBackground() {
  return (
    <div className="vision-media" aria-hidden="true">
      <div className="vision-paper-bg">
        <GrainGradient
          style={{ height: '100%', width: '100%', transform: 'scaleX(-1)' }}
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
      <div className="vision-media-overlay"></div>
    </div>
  )
}

export function VisionSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center start'],
  })

  const textY = useTransform(scrollYProgress, [0, 0.55], [70, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.42], [0, 1])

  return (
    <section id="vision" ref={sectionRef} className="panel vision reveal reveal-visible">
      <VisionBackground />
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
