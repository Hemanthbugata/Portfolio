'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={scrolled ? 'text-black' : 'text-black'}
          >
            <motion.h1
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-bold bg-gradient-to-r from-primary-700 to-primary-800 bg-clip-text cursor-pointer hover:from-primary-600 hover:to-primary-700 transition-all duration-600"
            >
              Hemanth Naidu Bugatha
            </motion.h1>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-primary-600 to-primary-500 transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/Hemanthbugata"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hemanth-naidu-bugatha-2787b3279"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1--BMBNXhuVC5WpQr2JEhUP5TW-CwxGsT/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-primary-600/30 transition-all duration-200"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-400/20 rounded-lg blur-sm"
              animate={{ opacity: isOpen ? 1 : 0 }}
            />
            <div className="relative">
              <motion.div
                className="w-6 h-0.5 bg-black mb-1.5 transition-colors duration-300"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-black mb-1.5 transition-colors duration-300"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-black transition-colors duration-300"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 bg-white/50 backdrop-blur-lg rounded-lg mx-4 mb-4 border border-primary-200">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-100 transition-all duration-300 mx-2 rounded-lg"
                  >
                    <span className="text-lg">{item.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

