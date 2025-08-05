'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skills = [
    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-400' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-400' },
    { name: 'React.js', icon: '⚛️', color: 'from-cyan-400 to-blue-400' },
    { name: 'Java', icon: '☕', color: 'from-red-400 to-orange-400' },
    { name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'Express.js', icon: '🚀', color: 'from-gray-400 to-gray-600' },
    { name: 'Next.js', icon: '▲', color: 'from-black to-gray-600' },
    { name: 'Blockchain', icon: '🔗', color: 'from-purple-400 to-pink-400' },
    { name: 'Solidity', icon: '💎', color: 'from-indigo-400 to-purple-400' },
    { name: 'Ether.js', icon: '💰', color: 'from-blue-400 to-purple-400' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-600' },
    { name: 'SQL', icon: '🗄️', color: 'from-blue-500 to-indigo-500' },
    { name: 'Linux', icon: '🐧', color: 'from-yellow-400 to-orange-400' },
    { name: 'GIT', icon: '📝', color: 'from-orange-400 to-red-400' },
    { name: 'Terraform', icon: '🏗️', color: 'from-purple-400 to-blue-400' },
    { name: 'Ansible', icon: '🔧', color: 'from-red-400 to-pink-400' },
    { name: 'Jenkins', icon: '⚙️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-400' },
    { name: 'Kubernetes', icon: '☸️', color: 'from-blue-500 to-indigo-500' },
    { name: 'Prometheus & Grafana', icon: '📊', color: 'from-orange-400 to-red-400' },
    { name: 'Spring Boot', icon: '🍃', color: 'from-green-400 to-emerald-400' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-400' },
    { name: 'Azure', icon: '🌤️', color: 'from-blue-400 to-cyan-400' },
    { name: 'GCP', icon: '🌩️', color: 'from-red-400 to-yellow-400' },
  ]

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      gradient: 'from-cyan-400 to-blue-400',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      skills: ['Node.js', 'Express.js', 'Spring Boot', 'Django', 'Flask'],
    },
    {
      title: 'Database',
      icon: '🗄️',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-500/10 to-indigo-500/10',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
    },
    {
      title: 'DevOps',
      icon: '🛠️',
      gradient: 'from-orange-400 to-yellow-400',
      bgGradient: 'from-orange-500/10 to-yellow-500/10',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      title: 'Blockchain',
      icon: '🔗',
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      skills: ['Solidity', 'Ether.js', 'Web3.js', 'Truffle', 'Ganache'],
    },
    {
      title: 'Others',
      icon: '📚',
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-500/10 to-gray-600/10',
      skills: ['Git', 'Linux', 'Ansible', 'Jenkins', 'Prometheus & Grafana'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Expertise & Tools
        </motion.h2>

        {/* Skills Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                <div className={`text-3xl mb-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.icon}
                </div>
                <h3 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories with Animated Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110`} />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-500/25">
                <div className="flex items-center justify-between mb-6">
                  <motion.h3
                    className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.span
                    className="text-3xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    {category.icon}
                  </motion.span>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="relative group/skill"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-20 rounded-lg blur-sm transition-all duration-300`} />
                      <div className="relative bg-slate-800/50 hover:bg-slate-700/50 px-4 py-3 rounded-lg text-gray-300 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{skill}</span>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + skillIndex * 0.1 + 0.8 }}
                            className={`w-2 h-2 bg-gradient-to-r ${category.gradient} rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
