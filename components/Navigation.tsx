'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled || isOpen ? 'glass shadow-card' : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 gap-4">
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center font-display font-bold text-on-primary shadow-glow">
              H
            </span>
            <span className="font-display font-semibold text-heading hidden sm:block group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
              Hemanth Naidu Bugatha
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-heading rounded-lg hover:bg-line/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://github.com/Hemanthbugata"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:text-heading hover:bg-line/5 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-naidu-bugatha-2787b3279"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:text-heading hover:bg-line/5 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-lg" />
            </a>
            <motion.a
              href="https://drive.google.com/file/d/1--BMBNXhuVC5WpQr2JEhUP5TW-CwxGsT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-sm font-semibold text-on-primary shadow-glow"
            >
              <i className="fa-solid fa-file-arrow-down" />
              Resume
            </motion.a>

            <button
              className="lg:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 rounded-lg text-heading hover:bg-line/5"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.span className="block h-0.5 w-5 bg-current" animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }} />
              <motion.span className="block h-0.5 w-5 bg-current" animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-line/10"
            >
              <div className="p-3 grid gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-lg text-body hover:text-heading hover:bg-line/5 font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <a
                  href="https://drive.google.com/file/d/1--BMBNXhuVC5WpQr2JEhUP5TW-CwxGsT/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-3 text-sm font-semibold text-on-primary"
                >
                  <i className="fa-solid fa-file-arrow-down" />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
