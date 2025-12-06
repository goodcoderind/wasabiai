'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const categories = ['All', 'Websites', 'AI Tools', 'Creative', 'Apps']

const projects = [
  {
    title: 'Career Buddy Viksit Bharat',
    student: 'Aarav (Class 11)',
    category: 'AI Tools',
    description: 'A platform for exam prep with an AI assistant.',
    tags: ['AI', 'Web', 'Education'],
    image: '/projects/career-buddy.png',
  },
  {
    title: 'Vision of a Progressive India',
    student: 'Arth (Class 10)',
    category: 'Creative',
    description: 'A digital project showcasing ideas for India\'s development.',
    tags: ['Design', 'Creative'],
    image: '/projects/viksit-bharat.png',
  },
  {
    title: 'AI Margdarshak',
    student: 'Sarthak (Class 12)',
    category: 'Apps',
    description: 'A travel assistant built with zero tech background',
    tags: ['AI', 'App', 'Travel'],
    image: '/projects/ai-margdarshak.jpeg',
    link: 'aimargdarshak.in',
  },
  {
    title: 'Pastel Planner',
    student: 'Priya (Class 9)',
    category: 'AI Tools',
    description: 'Personalized study assistant with flashcard generation.',
    tags: ['AI', 'Education'],
    image: '/projects/pastel-planner.png',
  },
  {
    title: 'Silent Science Awakening',
    student: 'Rohan (Class 8)',
    category: 'Websites',
    description: 'Interactive website about environmental conservation.',
    tags: ['Web', 'Design'],
    image: '/projects/silent-science.png',
  },
  {
    title: 'Music Generator Pro',
    student: 'Ananya (Class 11)',
    category: 'Creative',
    description: 'AI-powered music generation tool for school projects.',
    tags: ['AI', 'Music', 'Creative'],
    image: '/projects/career-buddy.png', // Placeholder - can be updated when more images available
  },
]

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-electric-green text-black font-semibold'
                  : 'glass text-white hover:glass-strong'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-strong rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video bg-black relative overflow-hidden">
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
                <p className="text-electric-green text-sm mb-3">By {project.student}</p>
                <p className="text-slate text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-electric-green/20 text-electric-green text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-electric-green hover:underline text-sm font-semibold">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
