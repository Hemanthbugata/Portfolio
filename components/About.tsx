'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-24 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-black via-primary-700 to-primary-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-800 text-xl leading-relaxed"
            >
              I'm an experienced <span className="text-primary-600 font-bold">Backend Developer and DevOps Engineer</span> with
              expertise in Node.js, scalable APIs, and microservices using PostgreSQL, MySQL, and MongoDB.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-800 text-xl leading-relaxed"
            >
              I'm skilled in cloud infrastructure management across <span className="text-primary-600 font-bold">GCP, AWS, and Azure</span>,
              along with CI/CD automation using GitHub, Jenkins, and Argo CD. Proficient in container orchestration
              with Docker and Kubernetes, ensuring efficient deployments and security.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-800 text-xl leading-relaxed"
            >
              Experienced in <span className="text-primary-600 font-bold">blockchain, Web3, NFTs, and smart contracts</span>,
              working with Ethereum and Solidity. Passionate about AI, deep learning, and building high-performance,
              intelligent systems.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-700 text-lg leading-relaxed border-l-4 border-primary-500 pl-6 italic bg-primary-50 py-4 rounded-r-lg"
            >
              I focus on optimizing deployments and delivering scalable, secure, and innovative solutions that drive
              business success and technological advancement.
            </motion.p>
          </div>
        </motion.div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Technical Expertise</h3>
          <div className="space-y-8 bg-white/70 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary-200">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 text-lg font-semibold">Backend Development</span>
                <span className="text-primary-600 font-bold">85%</span>
              </div>
              <div className="w-full bg-primary-100 rounded-full h-4 overflow-hidden border border-primary-200">
                <motion.div 
                  className="bg-gradient-to-r from-primary-600 to-primary-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : {}}
                  transition={{ duration: 1.5, delay: 1.2 }}
                ></motion.div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 text-lg font-semibold">DevOps</span>
                <span className="text-primary-600 font-bold">80%</span>
              </div>
              <div className="w-full bg-primary-100 rounded-full h-4 overflow-hidden border border-primary-200">
                <motion.div 
                  className="bg-gradient-to-r from-primary-600 to-primary-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80%" } : {}}
                  transition={{ duration: 1.5, delay: 1.4 }}
                ></motion.div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 text-lg font-semibold">Blockchain</span>
                <span className="text-primary-600 font-bold">75%</span>
              </div>
              <div className="w-full bg-primary-100 rounded-full h-4 overflow-hidden border border-primary-200">
                <motion.div 
                  className="bg-gradient-to-r from-primary-600 to-primary-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "75%" } : {}}
                  transition={{ duration: 1.5, delay: 1.6 }}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
