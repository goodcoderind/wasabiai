'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Zap, Rocket, Brain } from 'lucide-react'

const curriculum = [
  {
    number: '01',
    title: 'The Foundation',
    subtitle: 'Power of Prompts',
    description: 'Everything begins with thinking clearly.',
    points: [
      'Students learn how to communicate with AI, ask smarter questions, and turn ideas into real output.',
      'This turns AI from a tool into a superpower.',
    ],
    icon: Sparkles,
    gradient: 'from-electric-green/20 via-electric-green/10 to-transparent',
    delay: 0.1,
  },
  {
    number: '02',
    title: 'Creation',
    subtitle: 'through AI Tools',
    description: 'Once they understand prompting, they build real projects.',
    points: [
      'Websites, presentations, videos, avatars, comics, posters, voice overs, study tools.',
      'AI becomes their co-creator.',
    ],
    icon: Zap,
    gradient: 'from-blue-500/20 via-purple-500/10 to-transparent',
    delay: 0.2,
  },
  {
    number: '03',
    title: 'Excel in School',
    subtitle: 'with AI',
    description: 'We show students how to make school life easier and more creative.',
    points: [
      'Mathematics that becomes visual.',
      'High-performing presentations and projects.',
      'Graphics, research, music, videos, time-saving tools and more.',
    ],
    icon: Rocket,
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
    delay: 0.3,
  },
  {
    number: '04',
    title: 'Mindset',
    subtitle: 'of a Super Student',
    description: 'Students learn to use AI with judgement, ethics and creativity.',
    points: [
      'Real education is not about more homework. It is about more human work.',
    ],
    icon: Brain,
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    delay: 0.4,
  },
]

export default function CurriculumOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-xs md:text-sm text-electric-green tracking-[0.3em] uppercase">
              CURRICULUM
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight"
          >
            What We Teach
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-electric-green to-transparent mx-auto"
          />
        </motion.div>

        {/* Curriculum Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {curriculum.map((item, i) => {
            const Icon = item.icon
            
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: item.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative group"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className="relative glass-strong border border-electric-green/20 rounded-2xl p-5 md:p-6 lg:p-7 overflow-hidden h-full">
                  {/* Number Badge - Top Right */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.5, delay: item.delay + 0.2, type: "spring" }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-electric-green/20 border-2 border-electric-green flex items-center justify-center backdrop-blur-sm"
                    >
                      <span className="font-mono text-lg md:text-xl font-bold text-electric-green">
                        {item.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pr-16 md:pr-18">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: item.delay + 0.3, type: "spring" }}
                      className="mb-4"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-electric-green/30 to-electric-green/10 flex items-center justify-center border border-electric-green/30">
                        <Icon className="text-electric-green" size={24} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="font-display text-xl md:text-2xl lg:text-2xl font-bold text-white mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <h4 className="font-display text-base md:text-lg font-semibold text-electric-green mb-2">
                        {item.subtitle}
                      </h4>
                      <p className="text-slate text-sm md:text-base font-medium italic leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2.5 mt-4">
                      {item.points.map((point, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: item.delay + 0.4 + idx * 0.08 }}
                          className="flex items-start gap-2.5 group/item"
                        >
                          <div className="mt-1.5 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric-green group-hover/item:scale-150 transition-transform" />
                          </div>
                          <span className="text-white text-sm md:text-base leading-relaxed font-medium">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
