'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if desktop on mount
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    // Only set up cursor on desktop
    if (window.innerWidth < 768) {
      return () => window.removeEventListener('resize', checkDesktop)
    }

    const updateCursor = (e: MouseEvent) => {
      setDotPosition({ x: e.clientX, y: e.clientY })
      
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return
      
      // Check if target is an Element and has closest method
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        setIsHovering(true)
      } else if (target instanceof Element) {
        if (target.closest('button') || target.closest('a')) {
          setIsHovering(true)
        }
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('resize', checkDesktop)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  if (!isDesktop) {
    return null
  }

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
