'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin } from 'lucide-react'

export default function ContactInfo() {
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
          Other Ways to Reach Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl text-center"
          >
            <Mail className="text-electric-green mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a
              href="mailto:contact@wasabiai.com"
              className="text-electric-green hover:underline"
            >
              contact@wasabiai.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong p-8 rounded-2xl text-center"
          >
            <MapPin className="text-electric-green mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-slate">India</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
