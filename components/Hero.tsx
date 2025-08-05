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

  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        opacity: [0, 0.6, 0],
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
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900">
      {/* Simplified animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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
          style={{ top: '20%', left: '20%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-cyan-500/10 rounded-full blur-3xl"
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
          style={{ bottom: '20%', right: '20%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8 lg:pr-8"
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
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
                className="text-cyan-400"
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
              className="text-lg md:text-2xl lg:text-3xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent font-semibold"
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl"
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
              { href: "#about", icon: "fa-user", text: "About Me", gradient: "from-cyan-500 to-blue-500" },
              { href: "#projects", icon: "fa-rocket", text: "Projects", gradient: "from-purple-500 to-pink-500" },
              { href: "#contact", icon: "fa-envelope", text: "Contact", gradient: "from-orange-500 to-red-500" }
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
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300 blur-sm`} />
                <div className="relative flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  <i className={`fa-solid ${link.icon} text-cyan-400 group-hover:text-white transition-colors`} />
                  <span className="text-white group-hover:text-gray-100 transition-colors font-medium">{link.text}</span>
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
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative group"
          >
            {/* Simplified animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border border-dashed border-cyan-400/20" />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/Profile-H.jpeg"
                alt="Hemanth Naidu Bugatha"
                fill
                className="object-cover object-top scale-[1.25] group-hover:scale-[1.35] transition-transform duration-700"
                priority
                sizes="(max-width: 400px) 300px, 304px"
              />

            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Simplified scroll indicator */}
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
          <span className="text-gray-400 text-sm">Scroll Down</span>
          <motion.i 
            className="fa-solid fa-chevron-down text-xl text-cyan-400/70"
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

