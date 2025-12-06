'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="text-center">
            {/* Logo with multiple animation effects */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ 
                scale: [0.5, 1.1, 1],
                opacity: [0, 1, 1],
                rotate: [180, 0, 0]
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
                times: [0, 0.6, 1]
              }}
              className="mb-8 relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  filter: [
                    'brightness(1) drop-shadow(0 0 0px rgba(15, 255, 103, 0))',
                    'brightness(1.2) drop-shadow(0 0 20px rgba(15, 255, 103, 0.5))',
                    'brightness(1) drop-shadow(0 0 10px rgba(15, 255, 103, 0.3))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="inline-block"
              >
                <Image
                  src="/Wasabi_Logo (1).png"
                  alt="WasabiAI Logo"
                  width={200}
                  height={200}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  unoptimized
                  priority
                />
              </motion.div>
              
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(15, 255, 103, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 md:w-80 h-1 bg-charcoal rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
                className="h-full bg-gradient-to-r from-electric-green via-[#0FFF67] to-electric-green relative"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/3"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
