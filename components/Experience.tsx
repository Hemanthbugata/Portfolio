'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'

type Experience = {
  title: string
  company: string
  period: string
  location: string
  current?: boolean
  summary: string
  points: string[]
  tech: string[]
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'UST',
    period: 'Dec 2025 – Present',
    location: 'Trivandrum, India',
    current: true,
    summary:
      'Working on PayBridge, an enterprise payroll automation platform for UST India. The platform integrates with Workday to consume employee and payroll data and automates key payroll workflows, approvals, rejections, and scheduled notifications.',
    points: [
      'Integrated Workday APIs to retrieve and process employee and payroll-related information',
      'Developed Spring Boot backend services and designed REST APIs for application workflows and integrations',
      'Built and enhanced Angular frontend modules and workflow-driven interfaces',
      'Implemented workflow automation for payroll approvals, rejections, and process state transitions',
      'Developed scheduled notification and email workflows with configurable triggers based on payroll cut-off dates',
      'Worked with SQL and MongoDB for data storage, querying, and application-level processing',
      'Contributed to the microservices architecture, debugging, production issue resolution, and CI/CD delivery',
    ],
    tech: ['Angular', 'Java', 'Spring Boot', 'REST APIs', 'Microservices', 'SQL', 'MongoDB', 'Workday APIs', 'CI/CD'],
  },
  {
    title: 'DevOps Engineer (Intern)',
    company: 'Agilityx.ai',
    period: 'Jul 2024 – Dec 2024',
    location: 'Bellevue, WA, USA (Remote)',
    summary: 'Designed and operated scalable cloud infrastructure on Microsoft Azure for AI product delivery.',
    points: [
      'Designed, deployed, and managed scalable cloud infrastructure using Microsoft Azure',
      'Automated deployments and managed Azure Repos to create resilient cloud-based solutions',
    ],
    tech: ['Azure', 'Azure DevOps', 'CI/CD', 'IaC'],
  },
  {
    title: 'DevOps Engineer (Intern)',
    company: 'MegaBliss Worldwide',
    period: 'Apr 2024 – Jun 2024',
    location: 'Auckland, New Zealand',
    summary: 'Owned infrastructure automation for the MegaRide cab-booking application on AWS.',
    points: [
      'Streamlined CI/CD workflows by implementing AWS CodePipeline',
      'Monitored performance with CloudWatch and improved reliability via Auto Scaling and multi-region setups',
    ],
    tech: ['AWS', 'CodePipeline', 'CloudWatch', 'Auto Scaling'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-28 px-4 overflow-hidden" ref={ref}>
      <div className="absolute -left-40 top-20 w-[28rem] h-[28rem] rounded-full bg-primary-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've worked"
          description="From cloud infrastructure internships to building enterprise payroll systems in production."
          inView={isInView}
        />

        <div className="relative">
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500 via-primary-500/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative pl-14 md:pl-20"
              >
                <span className="absolute left-5 md:left-6 top-7 -translate-x-1/2 flex h-4 w-4">
                  {exp.current && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary-500 animate-pulse-ring" />
                  )}
                  <span
                    className={`relative inline-flex h-4 w-4 rounded-full border-2 border-page ${
                      exp.current ? 'bg-primary-500 shadow-glow' : 'bg-muted/50'
                    }`}
                  />
                </span>

                <div className={`glass glass-hover rounded-2xl p-6 md:p-8 ${exp.current ? 'border-primary-500/40 shadow-glow' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-heading">{exp.title}</h3>
                      <p className="text-primary-600 dark:text-primary-300 font-semibold text-lg mt-1">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-medium ${
                          exp.current
                            ? 'bg-primary-500/15 text-primary-700 dark:text-primary-300 border border-primary-500/30'
                            : 'bg-line/5 text-body border border-line/10'
                        }`}
                      >
                        <i className="fa-regular fa-calendar" />
                        {exp.period}
                      </p>
                      <p className="text-muted mt-2">
                        <i className="fa-solid fa-location-dot mr-1.5" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-body leading-relaxed mb-5">{exp.summary}</p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 + i * 0.06 }}
                        className="flex gap-3 text-muted text-[15px] leading-relaxed"
                      >
                        <i className="fa-solid fa-check text-primary-500 mt-1.5 text-xs" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-semibold bg-elevated text-body border border-line/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
