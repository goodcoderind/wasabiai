'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const pillars = [
  {
    title: 'Mindset First',
    description: 'AI lowers the technical barrier. We raise ambition.',
  },
  {
    title: 'Build Now',
    description: 'Students build real projects instead of reading theory.',
  },
  {
    title: 'Community and Opportunities',
    description: 'Recognition, mentors and a platform that makes their work seen.',
  },
]

export default function WhyWasabiAI() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 md:mb-12"
        >
          Why WasabiAI Stands Out
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="h-1 w-16 bg-electric-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-slate">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
