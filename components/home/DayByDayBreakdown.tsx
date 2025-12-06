'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

const days = [
  {
    day: 1,
    title: 'Day 1',
    content: [
      'Basics of AI, machine learning and generative AI',
      'LLMs like GPT-4o',
      'Safe and powerful prompting',
      'Creative writing and AI storytelling',
      'Comic creation through image prompts',
    ],
    takeaway: 'Students learn how AI works and how to communicate with it.',
  },
  {
    day: 2,
    title: 'Day 2',
    content: [
      'Presentations and documents powered by AI',
      'Public speaking and confidence building',
      'Poster design, character illustration and visual effects',
      'Voice generation and avatar creation',
    ],
    takeaway: 'Students learn to present ideas clearly and design compelling visuals.',
  },
  {
    day: 3,
    title: 'Day 3',
    content: [
      'No-code website building',
      'Simple game creation through AI tools',
      'Project planning for school websites or personal portfolios',
    ],
    takeaway: 'Students create and publish their own website.',
  },
  {
    day: 4,
    title: 'Day 4',
    content: [
      'Meet your own personal AI agent',
      'Create a smart assistant for study tasks',
      'Final project and student presentations',
      'Award announcements',
    ],
    takeaway: 'Students graduate with a complete AI project.',
  },
]

export default function DayByDayBreakdown() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openDay, setOpenDay] = useState<number | null>(1)

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden">
      <div className="container-custom px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-xs md:text-sm text-electric-green tracking-[0.2em] uppercase">
              CURRICULUM BREAKDOWN
            </span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
            What Students Learn Each Day
          </h2>
        </motion.div>

        {/* Days Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-electric-green/20" />

            {/* Days */}
            <div className="space-y-6 md:space-y-8">
              {days.map((day, i) => {
                const isOpen = openDay === day.day
                const isLast = i === days.length - 1

                return (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Dot (Desktop) */}
                    <div className="hidden md:block absolute left-8 top-6 -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                        className={`w-4 h-4 rounded-full border-2 ${
                          isOpen
                            ? 'bg-electric-green border-electric-green'
                            : 'bg-black border-electric-green/50'
                        } transition-all duration-300`}
                      />
                    </div>

                    {/* Card */}
                    <div className={`md:ml-20 transition-all duration-300 ${isOpen ? 'md:ml-24' : ''}`}>
                      {/* Header Button */}
                      <button
                        onClick={() => setOpenDay(isOpen ? null : day.day)}
                        className="w-full group"
                      >
                        <div className="glass border border-electric-green/20 rounded-2xl p-6 md:p-7 hover:border-electric-green/40 transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 md:gap-6">
                              {/* Day Number - Mobile */}
                              <div className="md:hidden w-14 h-14 rounded-full bg-electric-green text-black font-bold text-xl flex items-center justify-center flex-shrink-0">
                                {day.day}
                              </div>
                              
                              {/* Day Number - Desktop */}
                              <div className="hidden md:flex w-16 h-16 rounded-full bg-electric-green/20 border-2 border-electric-green text-electric-green font-bold text-2xl items-center justify-center flex-shrink-0">
                                {day.day}
                              </div>

                              <div>
                                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                                  {day.title}
                                </h3>
                                {!isOpen && (
                                  <p className="text-slate text-sm md:text-base font-medium">
                                    {day.content.length} topics
                                  </p>
                                )}
                              </div>
                            </div>

                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <ChevronDown className="text-electric-green" size={26} />
                            </motion.div>
                          </div>
                        </div>
                      </button>

                      {/* Content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 glass-strong border border-electric-green/20 rounded-2xl p-6 md:p-8 lg:p-10">
                              {/* Content List */}
                              <ul className="space-y-4 md:space-y-5 mb-8">
                                {day.content.map((item, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="flex items-start gap-4"
                                  >
                                    <CheckCircle2 
                                      className="text-electric-green flex-shrink-0 mt-1" 
                                      size={22} 
                                    />
                                    <span className="font-sans text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium">
                                      {item}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>

                              {/* Takeaway */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="pt-6 md:pt-8 border-t border-electric-green/20"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="w-1.5 h-1.5 rounded-full bg-electric-green mt-2.5 flex-shrink-0" />
                                  <div className="flex-1">
                                    <p className="font-mono text-xs md:text-sm text-electric-green font-semibold uppercase tracking-wider mb-2 md:mb-3">
                                      Key Takeaway
                                    </p>
                                    <p className="font-sans text-lg md:text-xl lg:text-2xl text-white font-semibold leading-relaxed">
                                      {day.takeaway}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
