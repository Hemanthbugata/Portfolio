'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message. Please try again or contact me directly.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong! Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'hemanthnaidubugatha@gmail.com',
      href: 'mailto:hemanthnaidubugatha@gmail.com',
      color: 'from-red-400 to-pink-400',
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+91 9398865658',
      href: 'tel:+919398865658',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: 'fa-location-dot',
      title: 'Location',
      value: 'Hyderabad, India',
      href: '#',
      color: 'from-blue-400 to-cyan-400',
    },
  ]

  const socialLinks = [
    {
      label: 'GitHub',
      icon: 'fab fa-github',
      href: 'https://github.com/Hemanthbugata',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      label: 'LinkedIn',
      icon: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/hemanth-naidu-bugatha-2787b3279',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      label: 'Resume',
      icon: 'fas fa-file-alt',
      href: 'https://drive.google.com/file/d/1GQyKcs1A9LQ_kKElocmJ35Kg6zFIkhk5/view',
      gradient: 'from-red-500 to-red-700',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-primary-100 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-primary-200/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-10 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 0.9, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-primary-700 to-primary-600 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 text-lg mb-16 font-medium max-w-2xl mx-auto"
        >
          I'm always open to discussing new opportunities and innovative projects.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-16 place-items-center">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group block w-full max-w-xs"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border-2 border-primary-200 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-300/20">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} mb-4`}>
                  <i className={`fas ${contact.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-black font-bold mb-2 group-hover:text-primary-700 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-700 group-hover:text-primary-600 transition-colors font-medium">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center space-x-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="group relative"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/30`}>
                <i className={`${social.icon} text-white text-xl`}></i>
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 text-sm opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl border-2 border-primary-200 shadow-xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-black mb-3 font-bold">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 bg-primary-50 text-black rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300/50 transition-all duration-300 placeholder-gray-500"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-black mb-3 font-bold">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 bg-primary-50 text-black rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300/50 transition-all duration-300 placeholder-gray-500"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-black mb-3 font-bold">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-4 py-4 bg-primary-50 text-black rounded-xl border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300/50 transition-all duration-300 resize-none placeholder-gray-500"
                placeholder="Your message here..."
                required
              ></motion.textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-600 text-white rounded-xl font-bold text-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-primary-500/30"
            >
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
