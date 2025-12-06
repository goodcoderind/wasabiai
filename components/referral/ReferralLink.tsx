'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Copy, Check, Share2 } from 'lucide-react'

export default function ReferralLink() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://wasabiai.com/ref/your-unique-code'

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = async (platform: string) => {
    const text = `Join WasabiAI Winter Camp! Use my referral link: ${referralLink}`
    const url = encodeURIComponent(referralLink)

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
    } else if (platform === 'email') {
      window.location.href = `mailto:?subject=Join WasabiAI Winter Camp&body=${encodeURIComponent(text)}`
    }
  }

  return (
    <section ref={ref} className="section-padding bg-charcoal">
      <div className="container-custom max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-strong p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Your Referral Link</h2>
          
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-electric-green/20 text-white focus:outline-none"
            />
            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-electric-green text-black font-semibold rounded-lg hover:bg-electric-green/90 transition-colors flex items-center gap-2"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleShare('whatsapp')}
              className="glass px-6 py-3 rounded-lg text-white hover:glass-strong transition-all flex items-center gap-2"
            >
              <Share2 size={20} />
              Share on WhatsApp
            </button>
            <button
              onClick={() => handleShare('email')}
              className="glass px-6 py-3 rounded-lg text-white hover:glass-strong transition-all flex items-center gap-2"
            >
              <Share2 size={20} />
              Share via Email
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
