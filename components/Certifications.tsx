'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'

const certifications = [
  {
    title: 'Google Professional Cloud DevOps Engineer',
    level: 'Professional',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    link: 'https://www.credly.com/badges/f954dcfc-1f07-4d8e-939d-30dd9c7ef6b3',
    description:
      'Validates expertise in SRE practices, CI/CD pipelines, service monitoring, and incident management on Google Cloud.',
  },
  {
    title: 'Google Associate Cloud Engineer',
    level: 'Associate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    link: 'https://www.credly.com/badges/5c09011b-6f4a-4945-957f-981f5decff36',
    description:
      'Demonstrates the ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud.',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="relative py-28 px-4 overflow-hidden" ref={ref}>
      <div className="absolute -right-40 top-0 w-[28rem] h-[28rem] rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading index="05" eyebrow="Certifications" title="Credentials" inView={isInView} />

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group glass glass-hover rounded-2xl p-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="h-16 w-16 rounded-xl bg-white border border-line/10 p-2.5 relative shrink-0">
                  <Image src={cert.logo} alt="Google Cloud" fill className="object-contain p-2" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-700 dark:text-primary-300 border border-primary-500/30">
                  {cert.level}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-heading mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted leading-relaxed flex-grow">{cert.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all">
                Verify on Credly
                <i className="fa-solid fa-arrow-right" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
