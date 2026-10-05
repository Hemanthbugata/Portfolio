'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'

const coreStack = [
  { name: 'Angular', icon: 'fab fa-angular', color: 'text-red-500' },
  { name: 'Java', icon: 'fab fa-java', color: 'text-orange-500' },
  { name: 'Spring Boot', icon: 'fas fa-leaf', color: 'text-green-500' },
  { name: 'React', icon: 'fab fa-react', color: 'text-cyan-500' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-lime-500' },
  { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-500' },
  { name: 'MongoDB', icon: 'fas fa-database', color: 'text-emerald-500' },
  { name: 'SQL', icon: 'fas fa-table', color: 'text-sky-500' },
  { name: 'AWS', icon: 'fab fa-aws', color: 'text-amber-500' },
  { name: 'Azure', icon: 'fab fa-microsoft', color: 'text-blue-500' },
  { name: 'GCP', icon: 'fab fa-google', color: 'text-rose-500' },
  { name: 'Docker', icon: 'fab fa-docker', color: 'text-sky-500' },
  { name: 'Kubernetes', icon: 'fas fa-dharmachakra', color: 'text-indigo-500' },
  { name: 'Jenkins', icon: 'fab fa-jenkins', color: 'text-muted' },
  { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
  { name: 'Linux', icon: 'fab fa-linux', color: 'text-yellow-600 dark:text-yellow-200' },
]

const categories = [
  {
    title: 'Frontend',
    icon: 'fa-solid fa-window-maximize',
    skills: ['Angular', 'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'fa-solid fa-server',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Node.js', 'Express.js', 'FastAPI'],
  },
  {
    title: 'Databases',
    icon: 'fa-solid fa-database',
    skills: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fa-solid fa-cloud-arrow-up',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Argo CD', 'CI/CD'],
  },
  {
    title: 'Integrations & Tooling',
    icon: 'fa-solid fa-plug',
    skills: ['Workday APIs', 'Git', 'Linux', 'Ansible', 'Prometheus', 'Grafana', 'SonarQube'],
  },
  {
    title: 'Blockchain & AI',
    icon: 'fa-solid fa-microchip',
    skills: ['Solidity', 'Ether.js', 'Web3.js', 'RAG Pipelines', 'Pinecone', 'Vertex AI'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-28 px-4 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -right-40 bottom-0 w-[30rem] h-[30rem] rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="Tools I work with"
          description="The stack I use in production today, plus the cloud and DevOps tooling I bring to every project."
          inView={isInView}
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-20">
          {coreStack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="glass glass-hover rounded-2xl p-4 flex flex-col items-center gap-2 text-center"
            >
              <i className={`${s.icon} ${s.color} text-3xl`} />
              <span className="text-xs font-semibold text-body">{s.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-line/10 text-primary-600 dark:text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className={c.icon} />
                </span>
                <h3 className="font-display text-xl font-semibold text-heading">{c.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-elevated text-body border border-line/5 hover:border-primary-500/40 hover:text-primary-700 dark:hover:text-primary-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
