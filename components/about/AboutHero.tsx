'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="min-h-[60vh] flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="aspect-video w-full bg-charcoal glass flex items-center justify-center">
          <span className="text-slate text-sm">Hero Image: Team or Students Working</span>
        </div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Building India&apos;s AI-First Generation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate text-lg md:text-xl max-w-3xl mx-auto"
        >
          Empowering students with the skills, mindset, and opportunities to shape the future with AI
        </motion.p>
      </div>
    </section>
  )
}
