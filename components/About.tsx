'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-24 px-4 bg-slate-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-xl leading-relaxed"
            >
              I'm an experienced <span className="text-blue-400 font-semibold">Backend Developer and DevOps Engineer</span> with
              expertise in Node.js, scalable APIs, and microservices using PostgreSQL, MySQL, and MongoDB.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-xl leading-relaxed"
            >
              I'm skilled in cloud infrastructure management across <span className="text-purple-400 font-semibold">GCP, AWS, and Azure</span>,
              along with CI/CD automation using GitHub, Jenkins, and Argo CD. Proficient in container orchestration
              with Docker and Kubernetes, ensuring efficient deployments and security.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-xl leading-relaxed"
            >
              Experienced in <span className="text-green-400 font-semibold">blockchain, Web3, NFTs, and smart contracts</span>,
              working with Ethereum and Solidity. Passionate about AI, deep learning, and building high-performance,
              intelligent systems.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed border-l-4 border-blue-400 pl-6 italic"
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
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technical Expertise</h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg font-medium">Backend Development</span>
                <span className="text-blue-400 font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : {}}
                  transition={{ duration: 1.5, delay: 1.2 }}
                ></motion.div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg font-medium">DevOps</span>
                <span className="text-blue-400 font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80%" } : {}}
                  transition={{ duration: 1.5, delay: 1.4 }}
                ></motion.div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-lg font-medium">Blockchain</span>
                <span className="text-blue-400 font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
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
