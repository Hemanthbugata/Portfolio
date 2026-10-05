'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative h-10 w-[68px] rounded-full glass flex items-center px-1"
    >
      <span className="absolute inset-y-0 left-2.5 flex items-center text-amber-500 text-sm">
        <i className="fa-solid fa-sun" />
      </span>
      <span className="absolute inset-y-0 right-2.5 flex items-center text-accent-400 text-sm">
        <i className="fa-solid fa-moon" />
      </span>
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`relative z-10 h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-glow ${
          dark ? 'ml-auto' : ''
        }`}
      />
    </motion.button>
  )
}
