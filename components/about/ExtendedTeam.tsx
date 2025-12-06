'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const team = [
  {
    name: 'Abhra Dubey',
    role: 'Tech & Product Development',
    bio: 'National and international champion in AI and coding. Passionate about making AI accessible to every student.',
    image: '/people/abhra-dubey.jpeg',
  },
  {
    name: 'Yashashvi Mukesh',
    role: 'Strategy & Pedagogy Leader',
    bio: '10 years in impact strategy, youth skilling and social entrepreneurship. Believes in learning by building.',
    image: '/people/yashashvi-mukesh.jpeg',
  },
  {
    name: 'Hritik Sharma',
    role: 'People & Partnerships Leader',
    bio: 'UNICEF youth partnerships, rising voice in AI empowerment. Connects students with global opportunities.',
    image: '/people/hritik-sharma.png',
  },
]

export default function ExtendedTeam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Meet the Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-strong p-8 rounded-2xl text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-2 border-electric-green/30 glass">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-electric-green text-sm mb-4">{member.role}</p>
              <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
