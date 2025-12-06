'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ReferralRewards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-12"
        >
          How Rewards Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong p-8 rounded-2xl"
        >
          <ul className="space-y-4 text-slate">
            <li className="flex items-start gap-3">
              <span className="text-electric-green font-bold">•</span>
              <span>Share your unique referral link with friends</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-electric-green font-bold">•</span>
              <span>When they enroll using your link, you both get rewards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-electric-green font-bold">•</span>
              <span>Earn exclusive perks, discounts, and recognition</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-electric-green font-bold">•</span>
              <span>Top referrers get featured on our platform</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
