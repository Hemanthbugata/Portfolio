'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [text, setText] = useState('')
  const [currentRole, setCurrentRole] = useState(0)
  const fullText = "Hi, I'm Hemanth  "
  const roles = [
    "Software Development Engineer",
    "DevOps Engineer", 
    "Blockchain Developer",
    "Backend Engineer"
  ]
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(roleTimer)
  }, [])

  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full opacity-40"
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        opacity: [0, 0.4, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 6 + 4,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeInOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ))

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-gradient-to-br from-primary-50 via-primary-50/50 to-primary-100/80">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-primary-400/15 via-primary-300/15 to-primary-200/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, -25, 0],
            y: [0, -50, 25, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-gradient-to-r from-primary-500/10 via-primary-400/10 to-primary-300/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 25, 0],
            y: [0, 50, -25, 0],
            scale: [0.9, 1.1, 1, 0.9],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '15%', right: '5%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-black space-y-8 lg:pr-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-black via-primary-600 to-primary-700 bg-clip-text text-transparent leading-tight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-primary-600"
              >
                |
              </motion.span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="h-16 overflow-hidden"
          >
            <motion.h2 
              key={currentRole}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-2xl lg:text-3xl bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent font-bold"
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Experienced Backend Developer and DevOps Engineer with expertise in Node.js, scalable APIs, and microservices. 
            Skilled in cloud infrastructure management and passionate about building intelligent systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-wrap gap-6 pt-6"
          >
            { [
              { href: "#about", icon: "fa-user", text: "About Me", gradient: "from-primary-500 to-primary-600" },
              { href: "#projects", icon: "fa-rocket", text: "Projects", gradient: "from-primary-600 to-primary-700" },
              { href: "#contact", icon: "fa-envelope", text: "Contact", gradient: "from-primary-400 to-primary-500" }
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300 blur-sm`} />
                <div className="relative flex items-center gap-3 px-6 py-3 bg-black/5 backdrop-blur-sm rounded-xl border-2 border-primary-200 group-hover:border-primary-500 group-hover:bg-primary-50 transition-all duration-300">
                  <i className={`fa-solid ${link.icon} text-primary-600 group-hover:text-primary-700 transition-colors`} />
                  <span className="text-black group-hover:text-primary-700 transition-colors font-bold">{link.text}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotateZ: [-2, 2, -2],
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative group"
        >
          {/* Outer glowing border animation */}
          <motion.div
            className="absolute -inset-3 rounded-2xl"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(22, 163, 154, 0.3)",
                "0 0 40px rgba(22, 163, 154, 0.6)",
                "0 0 20px rgba(22, 163, 154, 0.3)"
              ],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Animated gradient border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full rounded-2xl border-2 border-primary-400" />
          </motion.div>
          
          {/* Shine/shimmer effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
            animate={{ 
              opacity: [0, 0.2, 0],
              x: [-100, 100, -100]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-primary-300/10 to-primary-200/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Image container */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-primary-200 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500 shadow-2xl shadow-primary-300/30">
            <Image
              src="/images/Profile-H.jpeg"
              alt="Hemanth Naidu Bugatha"
              fill
              className="object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-700"
              priority
              sizes="(max-width: 400px) 256px, 320px"
            />
          </div>
        </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-600 text-sm font-medium">Scroll Down</span>
          <motion.i 
            className="fa-solid fa-chevron-down text-xl text-primary-500"
            animate={{ 
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

