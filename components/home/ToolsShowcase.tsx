'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const tools = [
  { name: 'ChatGPT', logo: '/tools/Chatgpt.png' },
  { name: 'Gemini', logo: '/tools/Gemini.png' },
  { name: 'Perplexity', logo: '/tools/Perplexity.png' },
  { name: 'Claude', logo: '/tools/claude.webp' },
  { name: 'ElevenLabs', logo: '/tools/ElevenLabs.svg' },
  { name: 'Gamma', logo: '/tools/Gamma.png' },
  { name: 'NotebookLM', logo: '/tools/notebooklm.webp' },
  { name: 'Midjourney', logo: '/tools/midjourney.webp' },
  { name: 'Runway', logo: '/tools/runway.png' },
  { name: 'HeyGen', logo: '/tools/heygen.webp' },
  { name: 'Loom', logo: '/tools/loom.png' },
  { name: 'n8n', logo: '/tools/n8n.webp' },
  { name: 'Make', logo: '/tools/make.png' },
  { name: 'Lovable', logo: '/tools/lovable.webp' },
]

export default function ToolsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-black overflow-hidden">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 md:mb-12"
        >
          Tools Covered
        </motion.h2>

        <div className="relative">
          <div className="flex gap-6 md:gap-8 animate-scroll">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <motion.div
                key={`${tool.name}-${i}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-strong px-8 md:px-12 py-6 md:py-8 rounded-3xl flex-shrink-0 hover:scale-105 transition-all min-w-[200px] md:min-w-[250px] flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mb-4 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm">
                  {tool.logo ? (
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  ) : (
                    <span className="text-slate text-xs">Logo</span>
                  )}
                </div>
                <span className="text-white font-semibold text-sm md:text-base text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            display: flex;
            width: fit-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
