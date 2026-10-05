'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Debugger-AI',
    subtitle: 'AI agent for developer error resolution',
    description:
      'An intelligent debugging assistant using RAG pipelines to pull accurate, contextual solutions from StackOverflow and Reddit for any error a developer pastes in.',
    features: ['RAG pipeline for retrieval', 'StackOverflow & Reddit API integration', 'Pinecone vector similarity search'],
    link: 'https://github.com/Hemanthbugata/Debugger_AI',
    linkText: 'View on GitHub',
    icon: 'fa-solid fa-robot',
    tags: ['AI', 'RAG', 'Python', 'Pinecone', 'NLP'],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Product Inventory Management',
    subtitle: 'Full-stack e-commerce platform with payments',
    description:
      'Inventory platform with SMS OTP auth, real-time location mapping, Cashfree payments, and delivery tracking, deployed to GCP Cloud Run on a custom domain.',
    features: ['SMS OTP via SMSHub API', 'Cashfree payment gateway', 'Deployed on GCP Cloud Run'],
    link: 'https://myf.co.in',
    linkText: 'Visit Live Site',
    icon: 'fa-solid fa-store',
    tags: ['React', 'Express', 'Node.js', 'MongoDB', 'GCP'],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'BitLogix',
    subtitle: 'Supply chain DApp on BitTorrent Chain',
    description:
      'A decentralized supply chain application giving businesses real-time transparency, secure on-chain transactions, and streamlined logistics.',
    features: ['Real-time supply chain visibility', 'Secure on-chain transactions', 'Deployed on BitTorrent Chain'],
    link: 'https://bitlogix.vercel.app/',
    linkText: 'View BitLogix',
    icon: 'fa-solid fa-link',
    tags: ['Blockchain', 'DApp', 'Web3', 'Solidity'],
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Swiggy Clone Deployment Pipeline',
    subtitle: 'AWS EKS with end-to-end DevOps',
    description:
      'A secure, scalable deployment pipeline on Amazon EKS with automated infrastructure provisioning, GitOps delivery, and integrated security scanning.',
    features: ['Terraform-provisioned EKS', 'Jenkins + Argo CD pipeline', 'SonarQube & Trivy scanning'],
    link: 'https://github.com/Hemanthbugata/Swiggy_deployment',
    linkText: 'View on GitHub',
    icon: 'fa-solid fa-diagram-project',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    accent: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Water Body Extraction from SAR',
    subtitle: 'Deep learning on GCP Vertex AI',
    description:
      'CNN-based segmentation model for detecting water bodies in SAR imagery under challenging conditions, enabling real-time flood detection.',
    features: ['CNN segmentation model', 'Trained on Vertex AI', 'IoU above 85%'],
    link: null,
    linkText: 'Research Project',
    icon: 'fa-solid fa-satellite',
    tags: ['Deep Learning', 'CNN', 'GCP', 'Computer Vision'],
    accent: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Spring Boot Microservices on Istio',
    subtitle: 'Kubernetes service mesh architecture',
    description:
      'Kubernetes-based microservices with Istio service mesh for traffic control, mTLS security, and full observability through Kiali.',
    features: ['Istio traffic management', 'mTLS between services', 'Kiali observability'],
    link: null,
    linkText: 'Architecture Project',
    icon: 'fa-solid fa-network-wired',
    tags: ['Kubernetes', 'Istio', 'Spring Boot', 'Microservices'],
    accent: 'from-rose-500 to-red-500',
  },
  {
    title: 'Foundry',
    subtitle: 'Registry of production-ready components',
    description:
      'A central registry of copy-paste, production-ready snippets across frontend, backend, database, and DevOps — with secure admin governance and public read access.',
    features: ['React + FastAPI full-stack', 'JWT-secured admin', 'Language-aware one-click copy'],
    link: 'https://foundry-0v8v.onrender.com/',
    linkText: 'Visit Foundry',
    icon: 'fa-solid fa-boxes-stacked',
    tags: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy'],
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'ShowTimeX',
    subtitle: 'Movie ticket booking platform',
    description:
      'End-to-end booking app with authentication, advanced search, interactive seat booking, and an admin dashboard for movies and bookings.',
    features: ['Auth & signup flows', 'Interactive booking system', 'Admin dashboard'],
    link: 'https://github.com/gh-ust-bugatahemanth-naidu/ShowTimeX.git',
    linkText: 'View on GitHub',
    icon: 'fa-solid fa-ticket',
    tags: ['React', 'TypeScript', 'FastAPI', 'SQLite', 'Vite'],
    accent: 'from-pink-500 to-rose-500',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-28 px-4 overflow-hidden" ref={ref}>
      <div className="absolute -left-40 top-1/2 w-[30rem] h-[30rem] rounded-full bg-primary-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected work"
          description="Full-stack products, cloud pipelines, and experiments across AI and Web3."
          inView={isInView}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass glass-hover rounded-2xl p-6 flex flex-col h-full overflow-hidden"
            >
              <div
                className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-25 blur-3xl transition-opacity duration-500`}
              />

              <div className="relative flex items-start justify-between mb-5">
                <span className={`h-12 w-12 rounded-xl bg-gradient-to-br ${p.accent} text-white flex items-center justify-center text-xl shadow-card`}>
                  <i className={p.icon} />
                </span>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.linkText}
                    className="h-10 w-10 rounded-lg flex items-center justify-center text-muted hover:text-heading hover:bg-line/10 transition-colors"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                )}
              </div>

              <h3 className="relative font-display text-xl font-bold text-heading mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                {p.title}
              </h3>
              <p className="relative text-sm text-primary-600 dark:text-primary-400 font-medium mb-4">{p.subtitle}</p>
              <p className="relative text-muted text-[15px] leading-relaxed mb-5 flex-grow">{p.description}</p>

              <ul className="relative space-y-1.5 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted">
                    <i className="fa-solid fa-circle-check text-primary-500 mt-1 text-xs" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="relative flex flex-wrap gap-2 pt-4 border-t border-line/5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-line/5 text-body">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
