'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'What you\'ve built is more than a competition. It\'s a beacon of possibility.',
    author: 'Rajiv Sikka',
    title: 'Ex-CEO Indian Oil',
    image: '/people/rajiv-sikka.jpeg',
  },
  {
    quote: 'It was energising to see students turn simple tools into working projects.',
    author: 'Vijaylaxmi Lendale',
    title: 'Senior AI Scientist at Microsoft',
    image: '/people/vijaylaxmi.jpeg',
  },
]

export default function IndustryTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-strong p-8 rounded-2xl relative"
            >
              <div className="text-6xl text-electric-green opacity-50 absolute top-4 left-4">&quot;</div>
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6 relative z-10 pl-8">
                {testimonial.quote}
              </p>
              <div className="border-t border-electric-green/20 pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-electric-green/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
