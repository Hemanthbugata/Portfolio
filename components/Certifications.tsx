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
      link: "https://google.accredible.com/266df86a-3cb4-42ed-aa55-6ec73e7709f1",
      description: "Advanced certification demonstrating expertise in DevOps practices on Google Cloud Platform"
    },
    {
      title: "Google Associate Cloud Engineer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      link: "https://google.accredible.com/3316ca3e-fcb0-4efd-90b0-d6cf2428ecd5",
      description: "Foundational certification for Google Cloud Platform engineering skills"
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative mr-4">
                    <Image
                      src={cert.logo}
                      alt="Google Cloud Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        ></motion.div>
      </div>
    </section>
  )
}
