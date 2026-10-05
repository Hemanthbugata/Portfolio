'use client'
import { motion } from 'framer-motion'

type Props = {
  index: string
  eyebrow: string
  title: string
  description?: string
  inView: boolean
  align?: 'center' | 'left'
}

export default function SectionHeading({ index, eyebrow, title, description, inView, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`flex flex-col gap-4 mb-16 ${alignment}`}
    >
      <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-primary-600 dark:text-primary-400">
        <span className="font-display text-primary-500/70">{index}</span>
        <span className="h-px w-8 bg-primary-500/50" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-heading tracking-tight">{title}</h2>
      {description && <p className="text-muted text-lg max-w-2xl leading-relaxed">{description}</p>}
    </motion.div>
  )
}
