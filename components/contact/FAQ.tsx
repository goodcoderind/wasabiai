'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the duration of the Winter Camp?',
    answer: 'The Winter Camp runs for 4 days, starting from January 2nd. Sessions are held from 7 to 8 PM, and recordings are available for all participants.',
  },
  {
    question: 'Who can participate?',
    answer: 'The camp is designed for students in Grades 6 to 12. No prior coding or AI experience is required.',
  },
  {
    question: 'What will I learn?',
    answer: 'You\'ll learn AI fundamentals, prompt engineering, and build real projects including websites, AI tools, creative content, and more using cutting-edge AI platforms.',
  },
  {
    question: 'Are there any prerequisites?',
    answer: 'No prerequisites needed! We start from the basics and guide you through everything. All you need is curiosity and enthusiasm.',
  },
  {
    question: 'What happens after the camp?',
    answer: 'You\'ll have built real projects, gained recognition, and joined a community of AI creators. Top performers get additional opportunities and rewards.',
  },
]

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full glass-strong p-6 rounded-2xl text-left flex items-center justify-between group hover:bg-electric-green/10 transition-all"
              >
                <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`text-electric-green transition-transform flex-shrink-0 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glass p-6 rounded-2xl mt-2">
                      <p className="text-slate leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
