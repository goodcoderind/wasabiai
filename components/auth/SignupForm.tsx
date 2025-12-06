'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.grade) newErrors.grade = 'Please select a grade'
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // Handle signup logic here
      console.log('Signup:', formData)
    }
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
        <h2 className="text-2xl font-bold text-white">Join WasabiAI</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.name ? 'border-red-500' : 'border-electric-green/20'
            } text-white focus:outline-none focus:border-electric-green transition-colors`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

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
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.email ? 'border-red-500' : 'border-electric-green/20'
            } text-white focus:outline-none focus:border-electric-green transition-colors`}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="grade" className="block text-white font-semibold mb-2">
            Grade
          </label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.grade ? 'border-red-500' : 'border-electric-green/20'
            } text-white focus:outline-none focus:border-electric-green transition-colors`}
          >
            <option value="">Select grade</option>
            {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
              <option key={grade} value={grade} className="bg-black">
                Grade {grade}
              </option>
            ))}
          </select>
          {errors.grade && <p className="text-red-500 text-sm mt-1">{errors.grade}</p>}
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
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.password ? 'border-red-500' : 'border-electric-green/20'
            } text-white focus:outline-none focus:border-electric-green transition-colors`}
            placeholder="••••••••"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-white font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.confirmPassword ? 'border-red-500' : 'border-electric-green/20'
            } text-white focus:outline-none focus:border-electric-green transition-colors`}
            placeholder="••••••••"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="btn-primary w-full text-lg py-4"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-slate mt-6 text-sm">
        Already have an account?{' '}
        <Link href="/login" className="text-electric-green hover:underline font-semibold">
          Login
        </Link>
      </p>
    </motion.div>
  )
}
