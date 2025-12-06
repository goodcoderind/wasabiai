'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Career Buddy Viksit Bharat',
    student: 'By Aarav (Class 11)',
    description: 'A platform for exam prep with an AI assistant.',
    image: '/projects/career-buddy.png',
  },
  {
    title: 'Vision of a Progressive India',
    student: 'By Arth (Class 10)',
    description: 'A digital project showcasing ideas for India\'s development.',
    image: '/projects/viksit-bharat.png',
  },
  {
    title: 'AI Margdarshak',
    student: 'By Sarthak (Class 12)',
    description: 'A travel assistant built with zero tech background',
    link: 'aimargdarshak.in',
    image: '/projects/ai-margdarshak.jpeg',
  },
]

export default function StudentSpotlights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-6"
        >
          <span className="text-electric-green uppercase tracking-wider">WHAT OUR STUDENTS BUILT</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-strong rounded-2xl overflow-hidden group"
            >
              <div className="aspect-video bg-charcoal relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-electric-green text-sm mb-3">{project.student}</p>
                <p className="text-slate mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-green hover:underline inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Now live at {project.link}
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
