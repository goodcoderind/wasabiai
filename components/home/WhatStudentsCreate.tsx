'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Gamepad2, Palette, Music, Zap, Mic } from 'lucide-react'

const projects = [
  {
    icon: Bot,
    title: 'Your Own AI Study Buddy',
    description: 'Train a mini AI bot that quizzes you, explains tough concepts, and actually helps with homework. Personalize it with your voice. Make it roast you when you procrastinate.',
  },
  {
    icon: Gamepad2,
    title: 'Websites & Games (No Code, All Flex)',
    description: 'Build interactive websites and mini-games using drag-and-drop tools. Show your friends. Impress your teachers. Or just flex on Instagram.',
  },
  {
    icon: Palette,
    title: 'Art That Looks Professional',
    description: 'Turn "a dragon in cyberpunk Tokyo" into actual poster-worthy art. Just by typing what you imagine. Artists charge ₹5,000 for this. You\'ll do it in 5 minutes.',
  },
  {
    icon: Music,
    title: 'Videos, Music & More',
    description: 'Generate background music for your school project. Make short videos. Design visuals. Use the same tools actual YouTubers and game designers use.',
  },
  {
    icon: Zap,
    title: 'Exam Prep That Doesn\'t Suck',
    description: 'AI-generated flashcards. Chapter summaries. Viva practice. Study tools that actually make sense.',
  },
  {
    icon: Mic,
    title: 'Public Speaking That Doesn\'t Terrify You',
    description: 'Practice speeches with an AI coach that gives instant feedback. Learn voice modulation and confidence tricks from actual professionals.',
  },
]

export default function WhatStudentsCreate() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12"
        >
          What Students Create
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-8 rounded-2xl group cursor-pointer transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-electric-green/10 border border-electric-green/30 flex items-center justify-center mb-6 group-hover:bg-electric-green/20 group-hover:border-electric-green/50 transition-all duration-300">
                  <Icon className="text-electric-green" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate leading-relaxed">{project.description}</p>
                <div className="mt-4 h-0.5 w-0 bg-electric-green group-hover:w-full transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
