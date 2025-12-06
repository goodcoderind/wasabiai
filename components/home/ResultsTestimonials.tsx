'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: '92%', label: 'rated it extremely valuable' },
  { value: '4.6/5', label: 'from 5,000+ students' },
  { value: '2,000+', label: 'websites, videos, games built' },
  { value: '1,800+', label: 'AI projects completed' },
  { value: '50+', label: 'industry mentors globally' },
]

export default function ResultsTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal relative overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-green rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12 uppercase tracking-wider"
        >
          THE STATS THAT MATTER
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-strong p-6 rounded-2xl text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-electric-green mb-2">
                {stat.value}
              </div>
              <p className="text-slate text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
