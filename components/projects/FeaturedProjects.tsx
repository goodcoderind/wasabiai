'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

const featured = [
  {
    title: 'AI Margdarshak',
    student: 'Sarthak (Class 12)',
    description: 'A comprehensive travel assistant built with zero tech background. This project demonstrates how AI can be used to solve real-world problems.',
    link: 'aimargdarshak.in',
    image: '/projects/ai-margdarshak.jpeg',
  },
]

export default function FeaturedProjects() {
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
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-strong rounded-2xl overflow-hidden"
            >
              <div className="aspect-video bg-charcoal relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-electric-green mb-4">By {project.student}</p>
                <p className="text-slate leading-relaxed mb-6">{project.description}</p>
                {project.link && (
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-green hover:underline inline-flex items-center gap-2 font-semibold"
                  >
                    Visit Live Project
                    <ExternalLink size={20} />
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
