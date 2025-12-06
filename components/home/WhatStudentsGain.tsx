'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Lightbulb, Rocket, Gift } from 'lucide-react'

const gains = [
  {
    icon: Trophy,
    title: 'Recognition and Rewards',
    description: [
      'Every spark of innovation is celebrated.',
      'Cash prizes. Goodies. Trophies. Certificates that matter.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'A Transformed Learning Mindset',
    description: [
      'Students begin to see the world as something they can shape.',
      'They become sharper, faster, and more creative in studies and in projects.',
    ],
  },
  {
    icon: Rocket,
    title: 'Early Access to the AI Future',
    description: [
      'Top performers get spotlight features across WasabiAI platforms and partner schools.',
      'Exposure to tools and experts from IIT Bombay, Boston University and MBZUAI UAE.',
    ],
  },
  {
    icon: Gift,
    title: 'Exciting Rewards for Winners',
    description: [
      'Smartwatches. Headphones. Speakers.',
      'Certificates for all participants.',
    ],
  },
]

export default function WhatStudentsGain() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-black via-charcoal to-black">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12"
        >
          What Students Gain
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {gains.map((gain, i) => {
            const Icon = gain.icon
            return (
              <motion.div
                key={gain.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-strong p-6 md:p-8 rounded-2xl group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-electric-green/10 border-2 border-electric-green/40 flex items-center justify-center mb-5 group-hover:bg-electric-green/20 group-hover:border-electric-green/60 transition-all duration-300">
                  <Icon size={28} className="text-electric-green" strokeWidth={2} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{gain.title}</h3>
                <ul className="space-y-2">
                  {gain.description.map((item, idx) => (
                    <li key={idx} className="text-slate leading-relaxed">{item}</li>
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
