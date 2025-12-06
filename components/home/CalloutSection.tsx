'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CalloutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-electric-green py-8 md:py-12">
      <div className="container-custom text-center px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black text-black"
        >
          Stop Watching Tutorials. Start Building Real Stuff.
        </motion.h2>
      </div>
    </section>
  )
}
