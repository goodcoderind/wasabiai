'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Zap } from 'lucide-react'

const journey = [
  {
    icon: Building2,
    title: 'The Foundation',
    description: [
      'Interactive online sessions that build a strong base in AI thinking.',
      'Right after the sessions, students start creating their own websites and exploring the possibilities of AI.',
    ],
  },
  {
    icon: Zap,
    title: 'The Execution',
    description: [
      'Students participate in an internal competition where they bring ideas to life.',
      'Every student builds, creates, and presents.',
      'Projects are judged by industry experts.',
      'This turns learning into real achievement.',
    ],
  },
]

export default function LearningJourney() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12"
        >
          How We Shape Super Students
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {journey.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-strong p-6 md:p-8 rounded-2xl group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-electric-green/10 border-2 border-electric-green/40 flex items-center justify-center mb-5 group-hover:bg-electric-green/20 group-hover:border-electric-green/60 transition-all duration-300">
                  <Icon size={28} className="text-electric-green" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="text-slate leading-relaxed">{desc}</li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
