import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const visionImage = '/images/services/ChatGPT%20Image%2016%20mai%202026,%2017_19_06.png'

const visionSection = {
  id: 'vision',
  title: 'Vision',
  description: [
    "La plupart des entreprises perdent des clients avant même d'avoir parlé.",
    "Solvia construit l'expérience que vos clients vivent avant de vous rencontrer celle qui justifie vos tarifs, légitime votre expertise et conclut les deals avant même que vous n'ayez à parler.",
  ],
  imageUrl: visionImage,
}

export function VisionSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center start'],
  })

  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [0.28, 1])
  const imageClip = useTransform(scrollYProgress, [0, 0.75], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'])
  const textY = useTransform(scrollYProgress, [0, 1], [44, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [70, 0])

  return (
    <section id="vision" ref={sectionRef} className="panel vision reveal reveal-visible">
      <div className="vision-shell">
        <div className="vision-intro">
          <p className="vision-kicker">Vision</p>
        </div>

        <div className="vision-feature-row">
          <motion.div style={{ y: textY }} className="vision-copy-block">
            <h2 className="vision-title">{visionSection.title}</h2>
            <motion.div style={{ y: textY }} className="vision-description">
              {visionSection.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              opacity: imageOpacity,
              clipPath: imageClip,
              y: imageY,
            }}
            className="vision-image-wrap"
          >
            <img src={visionSection.imageUrl} className="vision-image" alt="Vision Solvia" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
