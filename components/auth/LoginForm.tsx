'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-strong p-8 md:p-12 rounded-3xl w-full max-w-md"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-electric-green mb-2">WASABIAI</h1>
        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-electric-green/20 text-white focus:outline-none focus:border-electric-green transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-white font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-electric-green/20 text-white focus:outline-none focus:border-electric-green transition-colors"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="w-4 h-4 rounded border-electric-green/20 bg-black/50 text-electric-green focus:ring-electric-green"
            />
            <span className="text-slate text-sm">Remember me</span>
          </label>
          <a href="#" className="text-electric-green hover:underline text-sm">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="btn-primary w-full text-lg py-4"
        >
          Login
        </button>
      </form>

      <p className="text-center text-slate mt-6 text-sm">
        New here?{' '}
        <Link href="/signup" className="text-electric-green hover:underline font-semibold">
          Sign up
        </Link>
      </p>
    </motion.div>
  )
}
