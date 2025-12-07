'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Calendar, Clock, Users, Sparkles } from 'lucide-react'

const details = [
  { label: 'Duration', value: '4 Days', subvalue: 'Starting 2 January', icon: Calendar },
  { label: 'Time', value: '7 to 8 PM', subtitle: 'Recordings available', icon: Clock },
  { label: 'For', value: 'Grades 6-12', subvalue: 'All students welcome', icon: Users },
]

export default function ProgramDetails() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-electric-green rounded-full" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white uppercase tracking-wider">
                Program Details
              </h2>
              <div className="w-1 h-8 bg-electric-green rounded-full" />
            </div>
            <div className="w-24 h-0.5 bg-electric-green mx-auto" />
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-premium p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-electric-green/5 rounded-bl-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-green/5 rounded-tr-full blur-2xl" />

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12 relative z-10">
              {details.map((detail, i) => {
                const Icon = detail.icon
                return (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="group"
                  >
                    <div className="glass border border-electric-green/20 rounded-2xl p-6 md:p-7 text-center hover:border-electric-green/40 hover:bg-electric-green/5 transition-all duration-300 h-full">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-electric-green/10 border-2 border-electric-green/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-green/20 group-hover:border-electric-green/50 group-hover:scale-110 transition-all duration-300">
                        <Icon className="text-electric-green" size={28} strokeWidth={2} />
                      </div>
                      <p className="text-slate text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                        {detail.label}
                      </p>
                      <p className="text-white font-bold text-lg md:text-xl mb-1">{detail.value}</p>
                      {detail.subvalue && (
                        <p className="text-slate text-sm mt-1">{detail.subvalue}</p>
                      )}
                      {detail.subtitle && (
                        <div className="mt-3 pt-3 border-t border-electric-green/20">
                          <p className="text-electric-green text-xs md:text-sm font-semibold flex items-center justify-center gap-1.5">
                            <Sparkles size={12} />
                            {detail.subtitle}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Pricing Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-10 md:mb-12 relative z-10"
            >
              <div className="inline-block relative">
                <div className="absolute -top-2 -right-2 bg-electric-green text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                  Early Bird
                </div>
                <div className="glass border-2 border-electric-green/30 rounded-2xl p-6 md:p-8 inline-block">
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-slate line-through text-xl md:text-2xl font-semibold">₹999</span>
                    <span className="text-4xl md:text-6xl font-black text-electric-green">₹499</span>
                  </div>
                  <p className="text-electric-green text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Today&apos;s Special Price
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Motivational Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4 mb-10 md:mb-12 relative z-10"
            >
              <p className="text-slate text-center text-base md:text-lg leading-relaxed">
                Limited seats. The driven ones take the leap.
              </p>
              <div className="flex items-center justify-center gap-3 my-6">
                <div className="h-px w-12 bg-electric-green/30" />
                <div className="w-2 h-2 rounded-full bg-electric-green" />
                <div className="h-px w-12 bg-electric-green/30" />
              </div>
              <p className="text-white text-center text-xl md:text-2xl font-bold leading-tight">
                AI is the new literacy.<br />
                <span className="text-electric-green">Early exposure builds lifelong confidence.</span>
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center relative z-10"
            >
              <Link 
                href="/contact" 
                className="btn-primary text-base md:text-lg px-10 md:px-14 py-4 md:py-5 inline-flex items-center gap-2 font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(15,255,103,0.3)] hover:shadow-[0_0_40px_rgba(15,255,103,0.5)]"
              >
                Secure Your Spot Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
