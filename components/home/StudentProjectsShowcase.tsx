'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Image as ImageIcon, Workflow, MessageSquare } from 'lucide-react'

const capabilities = [
  {
    icon: Code,
    title: 'Build AI Applications',
    description: 'Create custom GPTs and AI tools.',
    gradient: 'from-electric-green/20 via-electric-green/10 to-transparent',
  },
  {
    icon: ImageIcon,
    title: 'Generate Professional Visuals',
    description: 'Images, videos and animations using Midjourney, DALL-E, Runway and Luma.',
    gradient: 'from-blue-500/20 via-purple-500/10 to-transparent',
  },
  {
    icon: Workflow,
    title: 'Automate Workflows',
    description: 'Connect apps with Make and n8n to automate everyday tasks.',
    gradient: 'from-pink-500/20 via-rose-500/10 to-transparent',
  },
  {
    icon: MessageSquare,
    title: 'Master Prompt Engineering',
    description: 'Get 10x better results from any AI tool.',
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
  },
]

export default function StudentProjectsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-electric-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-xs md:text-sm text-electric-green tracking-[0.2em] uppercase">
              PROJECT SHOWCASE
            </span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
            What Students Build in the Camp
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-electric-green to-transparent mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto auto-rows-fr">
          {capabilities.map((capability, i) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="relative group"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className="relative glass-strong border border-electric-green/20 rounded-3xl p-6 md:p-8 overflow-hidden h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex items-start gap-5 mb-5 flex-1">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-electric-green/10 border-2 border-electric-green/40 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-green/20 group-hover:border-electric-green/60 transition-all duration-300">
                      <Icon size={28} className="text-electric-green" strokeWidth={2} />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                        {capability.title}
                      </h3>
                      <p className="text-slate text-sm md:text-base leading-relaxed flex-1">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-electric-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
