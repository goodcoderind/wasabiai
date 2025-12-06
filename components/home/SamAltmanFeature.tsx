'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function SamAltmanFeature() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 border-2 border-electric-green/30 rounded-3xl m-4" />
      
      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-black text-center mb-8 uppercase tracking-wider"
        >
          A MESSAGE THAT MATTERS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <p className="text-slate text-lg mb-6">
            When Wasabi co-founder Abhra K Dubey met Sam Altman, CEO of OpenAI, Sam appreciated Wasabi&apos;s vision and said:
          </p>
          <div className="glass-strong p-8 rounded-2xl">
            <p className="text-3xl md:text-4xl font-black text-electric-green">
              &quot;What Wasabi is doing is truly needed.&quot;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden glass border border-electric-green/20">
            <Image
              src="/people/abhra-with-sam.jpeg"
              alt="Abhra with Sam Altman"
              width={600}
              height={450}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
