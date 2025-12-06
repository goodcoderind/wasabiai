'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function OurStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Story</h2>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                WasabiAI was born from a simple belief: every student deserves access to the tools that will define their future. 
                In a world where AI is reshaping industries, we saw a gap—students were being left behind.
              </p>
              <p>
                Founded by a team of AI champions, educators, and innovators, WasabiAI set out to democratize AI education. 
                We don&apos;t just teach tools; we build creators, thinkers, and leaders.
              </p>
              <p>
                Today, we&apos;ve empowered thousands of students across India, helping them build real projects, gain recognition, 
                and step confidently into an AI-first world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square bg-black rounded-2xl glass flex items-center justify-center"
          >
            <span className="text-slate text-sm">Visual/Image Placeholder</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
