'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

const contactInfo = [
  { icon: 'fa-solid fa-envelope', title: 'Email', value: 'hemanthnaidubugatha@gmail.com', href: 'mailto:hemanthnaidubugatha@gmail.com' },
  { icon: 'fa-solid fa-phone', title: 'Phone', value: '+91 93988 65658', href: 'tel:+919398865658' },
  { icon: 'fa-solid fa-location-dot', title: 'Location', value: 'Hyderabad, India', href: undefined },
]

const socialLinks = [
  { label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/Hemanthbugata' },
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/hemanth-naidu-bugatha-2787b3279' },
  { label: 'Resume', icon: 'fa-solid fa-file-lines', href: 'https://drive.google.com/file/d/1GQyKcs1A9LQ_kKElocmJ35Kg6zFIkhk5/view' },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl bg-elevated text-heading border border-line/10 placeholder-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all'

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[40rem] h-[20rem] rounded-full bg-primary-500/15 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something"
          description="Open to new opportunities and interesting problems. Drop a message and I'll get back to you soon."
          inView={isInView}
        />

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {contactInfo.map((c) => {
              const Tag = c.href ? 'a' : 'div'
              return (
                <Tag key={c.title} href={c.href} className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group">
                  <span className="h-12 w-12 shrink-0 rounded-xl bg-primary-500/15 border border-primary-500/30 text-primary-600 dark:text-primary-300 flex items-center justify-center text-lg">
                    <i className={c.icon} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted">{c.title}</p>
                    <p className="text-heading font-medium truncate group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                      {c.value}
                    </p>
                  </div>
                </Tag>
              )
            })}

            <div className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-wider text-muted mb-4">Find me online</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    aria-label={s.label}
                    className="h-12 w-12 rounded-xl bg-elevated border border-line/10 flex items-center justify-center text-body hover:text-on-primary hover:bg-primary-500 hover:border-primary-500 transition-colors text-lg"
                  >
                    <i className={s.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-2xl p-7 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-body mb-2">
                  Name
                </label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-body mb-2">
                  Email
                </label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-body mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-on-primary font-bold text-base shadow-glow hover:shadow-glow-lg transition-shadow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <span className="h-5 w-5 rounded-full border-2 border-on-primary/40 border-t-on-primary animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" />
                  Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <p className="text-sm text-primary-600 dark:text-primary-300 flex items-center gap-2">
                <i className="fa-solid fa-circle-check" />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-rose-500 flex items-center gap-2">
                <i className="fa-solid fa-circle-exclamation" />
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>

        <footer className="mt-24 pt-8 border-t border-line/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} Hemanth Naidu Bugatha. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built with Next.js, Tailwind & Framer Motion
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          </p>
        </footer>
      </div>
    </section>
  )
}
