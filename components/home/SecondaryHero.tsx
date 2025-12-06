'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SecondaryHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal relative overflow-hidden">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-electric-green/10" />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6"
        >
          Start Building Your AI Future in Just 4 Days
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
        >
          A camp that turns students into confident creators, future-ready leaders, and AI-first thinkers
        </motion.p>
      </div>
    </section>
  )
}
