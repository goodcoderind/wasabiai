'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ReferralStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-strong p-8 md:p-12 rounded-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Your Referral Stats</h2>
          <div className="text-6xl font-black text-electric-green mb-4">0</div>
          <p className="text-slate text-lg">Friends joined</p>
        </motion.div>
      </div>
    </section>
  )
}
