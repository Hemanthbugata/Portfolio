'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: "DevOps Engineer (Intern)",
      company: "Agilityx.ai",
      period: "July 2024 – December 2024",
      location: "Bellevue, Washington, USA (Remote)",
      points: [
        "Designed, deployed, and managed scalable cloud infrastructure using Microsoft Azure",
        "Automated deployments and managed Azure Repositories to create resilient cloud-based solutions",
        "Pursuing Microsoft Azure certifications to enhance expertise in cloud infrastructure and DevOps practices"
      ]
    },
    {
      title: "DevOps Engineer (Intern)",
      company: "MegaBliss Worldwide",
      period: "April 2024 – June 2024",
      location: "Auckland, New Zealand",
      points: [
        "Managed and automated the infrastructure for the MegaRide cab booking application on AWS",
        "Streamlined CI/CD workflows by implementing AWS CodePipeline",
        "Monitored application performance with AWS CloudWatch while optimizing reliability through Auto Scaling and multi-region setups"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden" ref={ref}>
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-black via-primary-700 to-primary-600 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-primary-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full border-4 border-white z-10 shadow-lg"
              ></motion.div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border-2 border-primary-200 hover:border-primary-500 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-primary-300/20"
                >
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-primary-700 transition-colors">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-primary-600 font-semibold mb-2">{exp.company}</h4>
                  <p className="text-primary-600 text-sm mb-2 font-medium">{exp.period}</p>
                  <p className="text-gray-700 text-sm mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.3 + pointIndex * 0.1 + 0.8 }}
                        className="text-gray-700 flex items-start"
                      >
                        <span className="text-primary-600 mr-2 mt-1 font-bold">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
