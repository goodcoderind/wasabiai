'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function MovementSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6"
        >
          A MOVEMENT FOR STUDENTS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          WasabiAI is becoming synonymous with AI for Students across India and soon the developing world.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto aspect-video bg-black rounded-2xl glass flex items-center justify-center"
        >
          <span className="text-slate text-sm">Animated World Map Visual</span>
        </motion.div>
      </div>
    </section>
  )
}
