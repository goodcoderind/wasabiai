'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function LeadersSay() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12 uppercase tracking-wider"
        >
          WHAT INDUSTRY LEADERS SAY
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl relative mb-8"
          >
            <div className="text-6xl text-electric-green opacity-50 absolute top-4 left-4">{`"`}</div>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-6 relative z-10 pl-8">
              Testimonial from industry leader goes here.
            </p>
            <div className="border-t border-electric-green/20 pt-4">
              <p className="text-white font-semibold">Industry Leader Name</p>
              <p className="text-slate text-sm">Title and Company</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
