'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      title: "Google Professional Cloud DevOps Engineer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      link: "https://www.credly.com/badges/f954dcfc-1f07-4d8e-939d-30dd9c7ef6b3",
      description: "Advanced certification demonstrating expertise in DevOps practices on Google Cloud Platform"
    },
    {
      title: "Google Associate Cloud Engineer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      link: "https://www.credly.com/badges/5c09011b-6f4a-4945-957f-981f5decff36",
      description: "Foundational certification for Google Cloud Platform engineering skills"
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-primary-50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary-200/15 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-10 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl"
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-black via-primary-700 to-primary-600 bg-clip-text text-transparent"
        >
          Professional Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/15 to-primary-300/15 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border-2 border-primary-200 group-hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-300/20">
                <div className="flex items-start gap-6 mb-6">
                  <motion.div 
                    className="w-24 h-24 flex-shrink-0 relative bg-primary-50 rounded-lg p-2 border-2 border-primary-200 hover:border-primary-400 transition-colors"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={cert.logo}
                      alt="Google Cloud Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-black group-hover:text-primary-700 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-600 hover:to-primary-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  <i className="fa-solid fa-external-link-alt"></i>
                  View Certification
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decoration */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-primary-300/20 to-primary-200/20 rounded-full blur-xl"
        ></motion.div>
      </div>
    </section>
  )
}
