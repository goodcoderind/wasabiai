'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const values = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We stay at the cutting edge of AI technology, ensuring students learn the most relevant and powerful tools.',
  },
  {
    icon: '🚀',
    title: 'Empowerment',
    description: 'We believe every student has the potential to create. Our mission is to unlock it.',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'We set high standards and provide the support needed to meet them. Excellence is not optional.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Learning happens together. We build networks of creators, mentors, and innovators.',
  },
]

export default function Values() {
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
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-strong p-6 rounded-2xl text-center"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
