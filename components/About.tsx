'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    icon: 'fa-solid fa-building-columns',
    title: 'Enterprise Engineering',
    text: 'Building PayBridge at UST — payroll automation integrated with Workday, handling approvals, rejections, and scheduled notifications for production users.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full-Stack Delivery',
    text: 'Angular frontends backed by Spring Boot microservices and REST APIs, with SQL and MongoDB powering application data and workflow state.',
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud & DevOps',
    text: 'Hands-on with AWS, Azure, and GCP. CI/CD with Jenkins and Argo CD, containers with Docker and Kubernetes, infra with Terraform.',
  },
  {
    icon: 'fa-solid fa-cube',
    title: 'Beyond the Day Job',
    text: 'Explored blockchain and Web3 with Solidity and Ethereum, and built AI tooling with RAG pipelines and deep learning on GCP Vertex AI.',
  },
]

const facts = [
  { label: 'Role', value: 'Software Engineer, UST' },
  { label: 'Current project', value: 'PayBridge (Payroll automation)' },
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Focus', value: 'Java · Spring Boot · Angular · Cloud' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading index="01" eyebrow="About me" title="Engineer who ships production software" inView={isInView} />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-lg leading-relaxed text-muted"
          >
            <p>
              I&apos;m a <span className="text-heading font-semibold">Software Engineer at UST</span>, working on PayBridge —
              an enterprise payroll automation platform for UST India. It consumes employee and payroll data from
              Workday and automates the workflows around it: approvals, rejections, state transitions, and
              cut-off-driven notifications.
            </p>
            <p>
              Day to day I move across the stack:{' '}
              <span className="text-primary-600 dark:text-primary-300 font-medium">Angular</span> modules on the front,{' '}
              <span className="text-primary-600 dark:text-primary-300 font-medium">Spring Boot</span> services and REST
              APIs behind them, and{' '}
              <span className="text-primary-600 dark:text-primary-300 font-medium">SQL / MongoDB</span> underneath. I
              care about the parts that make software real — API integrations, debugging production issues, and getting
              changes through CI/CD safely.
            </p>
            <p>
              Before UST, I worked as a DevOps engineer across AWS and Azure, which shaped how I think about
              deployability, observability, and reliability from the first line of code.
            </p>

            <div className="glass rounded-2xl p-6 grid sm:grid-cols-2 gap-5 mt-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <p className="text-xs uppercase tracking-wider text-muted mb-1">{f.label}</p>
                  <p className="text-heading font-medium text-base">{f.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass glass-hover rounded-2xl p-5 flex gap-4"
              >
                <span className="h-11 w-11 shrink-0 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-600 dark:text-primary-300 flex items-center justify-center text-lg">
                  <i className={h.icon} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-heading mb-1">{h.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{h.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
