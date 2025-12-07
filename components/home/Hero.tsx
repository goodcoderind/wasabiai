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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-16">
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
          className="mb-6 md:mb-8 mt-4 md:mt-6"
        >
          <p className="text-lg md:text-2xl lg:text-3xl tracking-[0.1em] text-white font-bold">
            WasabiAI Winter Camp
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight px-4"
        >
          <span className="text-white block mb-2 md:mb-3">Your report card won&apos;t matter in ten years</span>
          <span className="text-electric-green block">But your AI Skill will.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-4xl mx-auto font-bold px-4"
        >
          <span className="inline-block">India&apos;s most exciting AI learning experience for students in Grades 6 to 12</span>
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10"
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
              label: 'Grades 6-12', 
              sublabel: 'All Students Welcome',
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
                className="glass-strong border-2 border-electric-green/30 rounded-2xl px-6 md:px-8 py-6 md:py-7 min-w-[140px] md:min-w-[170px] group hover:border-electric-green/60 hover:shadow-[0_0_30px_rgba(15,255,103,0.2)] transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-electric-green/10 border-2 border-electric-green/40 flex items-center justify-center mb-4 group-hover:bg-electric-green/20 group-hover:border-electric-green/60 transition-all duration-300">
                    <Icon size={24} className="text-electric-green" strokeWidth={2} />
                  </div>
                  {card.label === '₹499' ? (
                    <div className="mb-1.5">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-slate line-through text-sm md:text-base font-semibold">₹999</span>
                        <span className="text-electric-green font-black text-lg md:text-xl">₹499</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-white font-black text-lg md:text-xl mb-1.5">{card.label}</p>
                  )}
                  <p className="text-slate text-xs md:text-sm font-semibold">{card.sublabel}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8 md:mb-12"
        >
          <Link href="/contact" className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 inline-flex items-center gap-2">
            Join the Movement →
          </Link>
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
