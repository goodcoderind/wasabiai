'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateTimer = () => {
      // January 1, 2025 at 11:59 PM - construct date explicitly in local timezone
      const deadline = new Date(2025, 0, 1, 23, 59, 59, 0) // Year, Month (0=Jan), Day, Hour, Min, Sec, Ms
      const now = new Date()
      const diff = deadline.getTime() - now.getTime()

      if (diff > 0) {
        const totalSeconds = Math.floor(diff / 1000)
        const days = Math.floor(totalSeconds / 86400)
        const hours = Math.floor((totalSeconds % 86400) / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        setTimeLeft({ 
          days: days || 0, 
          hours: hours || 0, 
          minutes: minutes || 0, 
          seconds: seconds || 0 
        })
      } else {
        // If deadline passed, show zeros
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Update immediately
    updateTimer()

    // Update every second
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-strong border border-electric-green/30 rounded-2xl px-6 md:px-8 py-5 md:py-6 inline-flex items-center gap-3 md:gap-5 shadow-[0_0_30px_rgba(15,255,103,0.1)]"
    >
      <div className="text-center min-w-[60px] md:min-w-[70px]">
        <motion.div
          key={`d${timeLeft.days}`}
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-electric-green mb-1 font-mono"
        >
          {String(timeLeft.days).padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-slate uppercase tracking-wider font-medium">Days</div>
      </div>
      <motion.div 
        className="text-electric-green text-xl md:text-2xl font-bold"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        :
      </motion.div>
      <div className="text-center min-w-[60px] md:min-w-[70px]">
        <motion.div
          key={`h${timeLeft.hours}`}
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-electric-green mb-1 font-mono"
        >
          {String(timeLeft.hours).padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-slate uppercase tracking-wider font-medium">Hours</div>
      </div>
      <motion.div 
        className="text-electric-green text-xl md:text-2xl font-bold"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        :
      </motion.div>
      <div className="text-center min-w-[60px] md:min-w-[70px]">
        <motion.div
          key={`m${timeLeft.minutes}`}
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-electric-green mb-1 font-mono"
        >
          {String(timeLeft.minutes).padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-slate uppercase tracking-wider font-medium">Mins</div>
      </div>
      <motion.div 
        className="text-electric-green text-xl md:text-2xl font-bold"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        :
      </motion.div>
      <div className="text-center min-w-[60px] md:min-w-[70px]">
        <motion.div
          key={`s${timeLeft.seconds}`}
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-electric-green mb-1 font-mono"
        >
          {String(timeLeft.seconds).padStart(2, '0')}
        </motion.div>
        <div className="text-xs md:text-sm text-slate uppercase tracking-wider font-medium">Secs</div>
      </div>
    </motion.div>
  )
}
