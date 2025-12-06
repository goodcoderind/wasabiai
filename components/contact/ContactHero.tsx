'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ContactHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="min-h-[40vh] flex items-center justify-center bg-black">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Let&apos;s Start Building Together
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate text-lg md:text-xl max-w-2xl mx-auto"
        >
          Have questions? Want to enroll? We&apos;re here to help.
        </motion.p>
      </div>
    </section>
  )
}
