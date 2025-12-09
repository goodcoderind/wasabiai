'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Calendar, Coins, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal to-black">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-electric-green rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-3 md:mb-4 mt-2 md:mt-4"
        >
          <p className="text-sm md:text-lg lg:text-xl tracking-[0.1em] text-white font-bold">
            WasabiAI Winter Camp
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 md:mb-4 leading-tight px-4"
        >
          <div className="text-white block mb-1.5 md:mb-2">
            Your report card won&apos;t matter in ten&nbsp;years
          </div>
          <div className="text-electric-green block">
            But your AI Skill will.
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate text-sm md:text-base lg:text-lg mb-4 md:mb-6 max-w-3xl mx-auto font-semibold px-4"
        >
          <span className="inline-block">India&apos;s most exciting AI learning experience for students in Grades 6 to 12</span>
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-5 md:mb-6"
        >
          {[
            { 
              label: '4 Days', 
              sublabel: 'Intensive Program',
              icon: Calendar,
            },
            { 
              label: '₹499', 
              sublabel: 'Early Bird Price',
              icon: Coins,
            },
            { 
              label: 'Students & Young Professionals', 
              sublabel: 'All Welcome',
              icon: GraduationCap,
            },
          ].map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-strong border-2 border-electric-green/30 rounded-xl px-4 md:px-6 py-4 md:py-5 min-w-[120px] md:min-w-[140px] group hover:border-electric-green/60 hover:shadow-[0_0_30px_rgba(15,255,103,0.2)] transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-electric-green/10 border-2 border-electric-green/40 flex items-center justify-center mb-3 group-hover:bg-electric-green/20 group-hover:border-electric-green/60 transition-all duration-300">
                    <Icon size={20} className="text-electric-green" strokeWidth={2} />
                  </div>
                  {card.label === '₹499' ? (
                    <div className="mb-1">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="text-slate line-through text-xs md:text-sm font-semibold">₹999</span>
                        <span className="text-electric-green font-black text-base md:text-lg">₹499</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-white font-black text-base md:text-lg mb-1">{card.label}</p>
                  )}
                  <p className="text-slate text-xs font-semibold">{card.sublabel}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-4 md:mb-6"
        >
          <a 
            href="https://forms.gle/13uqvzphfnQWAa6h6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 inline-flex items-center gap-2"
          >
            Join the Movement (Enroll Now) →
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-electric-green" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
