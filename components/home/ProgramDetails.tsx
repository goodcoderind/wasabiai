'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const details = [
  { label: 'Duration', value: '4 Days, starting 2 January' },
  { label: 'Time', value: '7 to 8 PM', subtitle: 'Recordings available' },
  { label: 'For', value: 'Students from Grade 6 to 12' },
]

export default function ProgramDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-strong p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-8 md:mb-10 uppercase tracking-wider">
            PROGRAM DETAILS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {details.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-slate text-sm mb-2">{detail.label}</p>
                <p className="text-white font-semibold text-lg">{detail.value}</p>
                {detail.subtitle && (
                  <p className="text-electric-green text-sm mt-1">{detail.subtitle}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="text-slate line-through text-xl mr-2">₹999</span>
              <span className="text-5xl font-black text-electric-green">₹499</span>
            </div>
            <p className="text-electric-green text-sm">(Today&apos;s discount)</p>
          </div>

          <p className="text-slate text-center mb-8 text-lg">
            Limited seats. The driven ones take the leap.
          </p>

          <p className="text-white text-center mb-8 text-xl font-semibold">
            AI is the new literacy. Early exposure builds lifelong confidence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/contact" className="btn-primary text-lg px-12 py-4 inline-block">
              Secure Your Spot Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
