'use client'
import { useEffect, useRef, useState } from 'react'
import {
  animate,
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  type PanInfo,
} from 'framer-motion'
import Image from 'next/image'

const roles = ['Software Engineer @ UST', 'Full-Stack Developer', 'Backend Engineer', 'Cloud & DevOps Engineer']

const badges = [
  { label: 'Angular', icon: 'fab fa-angular', color: 'text-red-500', left: '-18%', top: '12%', z: 110, delay: 0 },
  { label: 'Spring Boot', icon: 'fas fa-leaf', color: 'text-green-500', left: '70%', top: '2%', z: 90, delay: 0.6 },
  { label: 'Java', icon: 'fab fa-java', color: 'text-orange-500', left: '86%', top: '46%', z: 130, delay: 1.2 },
  { label: 'AWS', icon: 'fab fa-aws', color: 'text-amber-500', left: '-22%', top: '60%', z: 100, delay: 1.8 },
  { label: 'Docker', icon: 'fab fa-docker', color: 'text-sky-500', left: '38%', top: '96%', z: 140, delay: 2.4 },
]

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  z: -80 + ((i * 41) % 240),
  size: 2 + (i % 3),
  duration: 5 + (i % 4),
  delay: (i % 5) * 0.7,
  accent: i % 3 === 0,
}))

const THICKNESS = 56
const depthLayers = Array.from({ length: 8 }, (_, i) => i + 1)
const AUTO_SPIN_DEG_PER_MS = 0.02

const stats = [
  { value: 'UST', label: 'Software Engineer' },
  { value: '8+', label: 'Projects shipped' },
  { value: '2x', label: 'Google Cloud certified' },
]

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))

function ProfileObject() {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [dragging, setDragging] = useState(false)

  const spin = useMotionValue(0)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 110, damping: 16 })
  const sy = useSpring(my, { stiffness: 110, damping: 16 })

  const tiltX = useTransform(sy, [-0.5, 0.5], [16, -16])
  const tiltY = useTransform(sx, [-0.5, 0.5], [-18, 18])
  const rotateY = useTransform<number, number>([spin, tiltY], ([s, t]) => s + t)
  const glareX = useTransform(sx, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(sy, [-0.5, 0.5], [0, 100])
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.32), transparent 55%)`

  useAnimationFrame((_, delta) => {
    if (hovering || dragging) return
    spin.set((spin.get() + delta * AUTO_SPIN_DEG_PER_MS) % 360)
  })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
    setHovering(false)
  }

  const onPanStart = () => {
    spin.stop()
    setDragging(true)
    mx.set(0)
    my.set(0)
  }

  const onPan = (_: unknown, info: PanInfo) => {
    spin.set(spin.get() + info.delta.x * 0.7)
  }

  const onPanEnd = (_: unknown, info: PanInfo) => {
    setDragging(false)
    animate(spin, spin.get() + clamp(info.velocity.x, -2500, 2500) * 0.3, {
      type: 'spring',
      stiffness: 40,
      damping: 16,
      mass: 1.2,
    })
  }

  const idle = !hovering && !dragging

  return (
    <div className="relative flex flex-col items-center gap-8" style={{ perspective: 1500 }}>
      <motion.div
        animate={idle ? { y: [0, -14, 0], rotateX: [4, -4, 4] } : { y: 0, rotateX: 0 }}
        transition={
          idle
            ? {
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                rotateX: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
              }
            : { duration: 0.5 }
        }
        className="preserve-3d"
      >
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={onLeave}
          onPanStart={onPanStart}
          onPan={onPan}
          onPanEnd={onPanEnd}
          style={{ rotateX: tiltX, rotateY }}
          className={`relative preserve-3d select-none touch-pan-y w-72 h-[24rem] sm:w-80 sm:h-[26rem] lg:w-[22rem] lg:h-[29rem] ${
            dragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {/* Pedestal */}
          <div
            className="absolute left-1/2 -bottom-20 w-[140%] h-44 rounded-full border border-primary-500/40"
            style={{ transform: 'translateX(-50%) rotateX(80deg) translateZ(-140px)' }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-4 rounded-full border border-accent-500/25" />
            <div className="absolute inset-10 rounded-full bg-primary-500/25 blur-2xl" />
          </div>

          {/* Orbit rings */}
          <div
            className="absolute -inset-12 rounded-full border border-dashed border-primary-500/30 animate-spin-slow"
            style={{ transform: 'translateZ(-50px) rotateX(20deg)' }}
          >
            <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-primary-500 shadow-glow" />
            <span className="absolute -bottom-1 left-1/3 h-2 w-2 rounded-full bg-primary-400" />
          </div>
          <div
            className="absolute -inset-20 rounded-full border border-accent-500/25 animate-spin-slower"
            style={{ transform: 'translateZ(-100px) rotateX(-15deg)' }}
          >
            <span className="absolute top-1/2 -right-1.5 h-3 w-3 rounded-full bg-accent-500 shadow-[0_0_20px_rgb(var(--a-500)/0.8)]" />
          </div>

          {/* Particles */}
          {particles.map((p, i) => (
            <motion.span
              key={i}
              className={`absolute rounded-full ${p.accent ? 'bg-accent-500' : 'bg-primary-500'}`}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                transform: `translateZ(${p.z}px)`,
                boxShadow: p.accent ? '0 0 10px rgb(var(--a-500) / 0.9)' : '0 0 10px rgb(var(--p-500) / 0.9)',
              }}
              animate={{ y: [0, -18, 0], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            />
          ))}

          {/* Back glow */}
          <div
            className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-primary-500/45 via-accent-500/30 to-primary-400/40 blur-3xl"
            style={{ transform: 'translateZ(-90px)' }}
          />

          {/* Depth extrusion: stacked copies form the solid body between the front and back faces */}
          {depthLayers.map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-[2rem] bg-cover bg-top"
              style={{
                backgroundImage: 'url(/images/image.png)',
                transform: `translateZ(${-(i * THICKNESS) / depthLayers.length}px)`,
                filter: `brightness(${0.5 - Math.abs(i - depthLayers.length / 2) * 0.03}) saturate(1.2)`,
              }}
            />
          ))}

          {/* Back face — same photo, un-mirrored, so the object looks solid from every angle */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-card [backface-visibility:hidden]"
            style={{ transform: `rotateY(180deg) translateZ(${THICKNESS + 1}px)` }}
          >
            <motion.div
              className="absolute -inset-[120%] bg-[conic-gradient(from_0deg,rgb(var(--p-500))_0deg,rgb(var(--a-500))_110deg,rgb(var(--p-400))_220deg,rgb(var(--p-500))_360deg)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[3px] rounded-[calc(2rem-3px)] overflow-hidden bg-surface-800">
              <Image
                src="/images/image.png"
                alt=""
                fill
                draggable={false}
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 352px"
                className="object-cover object-top pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="font-display text-white text-xl font-semibold drop-shadow-lg">Hemanth Naidu Bugatha</p>
                <p className="text-slate-300 text-sm">Java · Spring Boot · Angular · Cloud</p>
              </div>
            </div>
          </div>

          {/* Animated gradient rim */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-card [backface-visibility:hidden]"
            style={{ transform: 'translateZ(1px)' }}
          >
            <motion.div
              className="absolute -inset-[120%] bg-[conic-gradient(from_0deg,rgb(var(--p-500))_0deg,rgb(var(--a-500))_110deg,rgb(var(--p-400))_220deg,rgb(var(--p-500))_360deg)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* Photo face */}
          <div
            className="absolute inset-[3px] rounded-[calc(2rem-3px)] overflow-hidden bg-surface-800 [backface-visibility:hidden]"
            style={{ transform: 'translateZ(2px)' }}
          >
            <Image
              src="/images/image.png"
              alt="Hemanth Naidu Bugatha"
              fill
              priority
              draggable={false}
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 352px"
              className="object-cover object-top pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/10 to-transparent" />
            <motion.div
              className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
              animate={{ top: ['-20%', '120%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
            />
            <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay" style={{ background: glare }} />
          </div>

          {/* Raised info plate (sits in front of the photo) */}
          <div className="absolute bottom-0 inset-x-0 p-5 [backface-visibility:hidden]" style={{ transform: 'translateZ(40px)' }}>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary-300 tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
              </span>
              Open to opportunities
            </div>
            <p className="font-display text-white text-xl font-semibold mt-1 drop-shadow-lg">Hemanth Naidu Bugatha</p>
            <p className="text-slate-300 text-sm">Software Engineer · UST</p>
          </div>

          <div
            className="absolute top-4 right-4 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-white border border-white/20 [backface-visibility:hidden]"
            style={{ transform: 'translateZ(30px)' }}
          >
            UST
          </div>

          {/* Floating tech badges */}
          {badges.map((b) => (
            <motion.div
              key={b.label}
              className="absolute"
              style={{ left: b.left, top: b.top, transform: `translateZ(${b.z}px)` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + b.delay, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
            >
              <div className="glass flex items-center gap-2 px-3 py-2 rounded-xl shadow-card whitespace-nowrap">
                <i className={`${b.icon} ${b.color} text-base`} />
                <span className="text-xs font-semibold text-heading">{b.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex items-center gap-2 text-xs text-muted tracking-wider uppercase"
      >
        <i className="fa-solid fa-rotate text-primary-500 animate-spin-slow" />
        Rotates 360° · drag to spin · hover to tilt
      </motion.p>
    </div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary-500/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 right-0 w-[32rem] h-[32rem] rounded-full bg-accent-500/15 blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-body"
          >
            <span className="h-2 w-2 rounded-full bg-primary-500 shadow-glow" />
            Software Engineer at UST
          </motion.div>

          <div className="space-y-4">
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-heading">
              Hi, I&apos;m <span className="text-gradient">Hemanth</span>
            </h1>
            <div className="h-12 md:h-14 overflow-hidden">
              <motion.h2
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="font-display text-2xl md:text-3xl xl:text-4xl font-semibold text-primary-600 dark:text-primary-300"
              >
                {roles[roleIndex]}
              </motion.h2>
            </div>
          </div>

          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            Software Engineer building scalable, enterprise-grade applications with{' '}
            <span className="text-heading font-medium">Java, Spring Boot, and Angular</span>. I design REST APIs and
            microservices, integrate third-party systems, and deliver production features through modern CI/CD
            pipelines on cloud infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3.5 font-semibold text-on-primary shadow-glow hover:shadow-glow-lg transition-shadow"
            >
              <i className="fa-solid fa-rocket" />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3.5 font-semibold text-heading"
            >
              <i className="fa-solid fa-envelope text-primary-500" />
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/Hemanthbugata"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-xl glass glass-hover h-[52px] w-[52px] text-heading text-xl"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-line/10 max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl font-bold text-heading">{s.value}</p>
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end lg:pr-12 py-10"
        >
          <ProfileObject />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted hover:text-primary-500 transition-colors"
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-10 w-6 rounded-full border border-current flex items-start justify-center p-1"
        >
          <span className="h-2 w-1 rounded-full bg-current" />
        </motion.span>
      </motion.a>
    </section>
  )
}
