'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "Debugger-AI",
      subtitle: "AI Agent for Developer Error Resolution",
      description: "An intelligent debugging assistant that leverages RAG pipelines to fetch accurate solutions from StackOverflow and Reddit APIs. When developers input errors, it provides precise, contextual answers directly framed from community solutions.",
      features: [
        "RAG pipeline for intelligent data retrieval",
        "StackOverflow and Reddit API integration",
        "Pinecone vector database for similarity search",
        "Context-aware error resolution",
        "Real-time solution recommendation engine"
      ],
      link: "https://github.com/Hemanthbugata/Debugger_AI",
      linkText: "View on GitHub",
      tags: ["AI", "RAG", "Python", "Pinecone", "StackOverflow API", "NLP"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Product Inventory Management System",
      subtitle: "Full-Stack E-commerce Platform with Payment Integration",
      description: "A comprehensive inventory management system featuring SMS-based OTP authentication, real-time location mapping, integrated payment gateway, and delivery tracking with seamless deployment on Google Cloud Platform.",
      features: [
        "SMS OTP authentication via SMSHub API",
        "One-click location mapping and geolocation",
        "Cashfree payment gateway integration",
        "Real-time delivery tracking with API integration",
        "Deployed on GCP Cloud Run with custom domain"
      ],
      link: "https://myf.co.in",
      linkText: "Visit Live Site",
      tags: ["React.js", "Express.js", "Node.js", "MongoDB", "GCP", "Payment Gateway"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "BitLogix - DApp Based on Supply Chain Management",
      subtitle: "Deployed on BitTorrent Blockchain",
      description: "A pioneering DApp solution built on the BitTorrent-chain that empowers businesses with real-time transparency, secure transactions, and streamlined operations in supply chain management.",
      features: [
        "Real-time transparency across supply chain",
        "Secure blockchain transactions",
        "Streamlined logistics operations",
        "Deployed on BitTorrent-chain"
      ],
      link: "https://bitlogix.vercel.app/",
      linkText: "View BitLogix",
      tags: ["Blockchain", "DApp", "Supply Chain", "BitTorrent", "Web3"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Scalable Deployment Pipeline for Swiggy Clone",
      subtitle: "AWS EKS with Complete DevOps Pipeline",
      description: "Built a secure and scalable deployment pipeline leveraging Amazon EKS for container orchestration with automated infrastructure provisioning and CI/CD integration.",
      features: [
        "Amazon EKS container orchestration",
        "Terraform infrastructure automation",
        "Jenkins and ArgoCD CI/CD pipeline",
        "SonarQube and Trivy security scanning"
      ],
      link: "https://github.com/Hemanthbugata/Swiggy_deployment",
      linkText: "View on GitHub",
      tags: ["AWS", "Kubernetes", "DevOps", "CI/CD", "Terraform"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Extraction of Water Bodies from SAR Images",
      subtitle: "Deep Learning with GCP Vertex AI",
      description: "Designed a CNN-based deep learning model for accurate segmentation of water bodies from SAR images, handling challenging conditions and achieving high accuracy.",
      features: [
        "CNN-based water body segmentation",
        "GCP Vertex AI for model training",
        "High segmentation accuracy (IoU > 85%)",
        "Real-time flood detection capabilities"
      ],
      link: "#",
      linkText: "Research Project",
      tags: ["Deep Learning", "CNN", "GCP", "Computer Vision", "AI"],
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "Springboot Microservices Deployment",
      subtitle: "Kubernetes with Istio Service Mesh",
      description: "Deployed a Kubernetes-based microservices architecture with Istio service mesh capabilities, enabling traffic control, enhanced security, and comprehensive observability.",
      features: [
        "Kubernetes microservices architecture",
        "Istio service mesh integration",
        "Traffic control and security",
        "Kiali monitoring and observability"
      ],
      link: "#",
      linkText: "Architecture Project",
      tags: ["Kubernetes", "Microservices", "Istio", "Spring Boot", "DevOps"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Foundry",
      subtitle: "Central Registry of Reusable Production-Ready Components",
      description: "A comprehensive component registry featuring copy-paste production-ready code snippets across frontend, backend, database, and DevOps domains. Enterprise-ready patterns with secure admin governance and public read-only access for team collaboration.",
      features: [
        "Copy-paste production-ready code snippets",
        "Full-stack React + FastAPI solution",
        "Language-aware formatting with one-click copy",
        "Enterprise-grade component management",
        "Secure JWT authentication",
        "Public read-only sharing capabilities"
      ],
      link: "https://foundry-0v8v.onrender.com/",
      linkText: "Visit Foundry",
      tags: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "Full-Stack"],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "ShowTimeX",
      subtitle: "Full-Stack Movie Ticket Booking Platform",
      description: "A complete movie ticket booking application with user authentication, advanced search, interactive booking system, and admin dashboard for content management. Built with modern React frontend and Python FastAPI backend.",
      features: [
        "User authentication and signup system",
        "Movie browsing with advanced search",
        "Interactive ticket booking and management",
        "Admin dashboard for movies and bookings",
        "Responsive design with modern UI",
        "RESTful API architecture"
      ],
      link: "https://github.com/gh-ust-bugatahemanth-naidu/ShowTimeX.git",
      linkText: "View on GitHub",
      tags: ["React", "TypeScript", "FastAPI", "SQLite", "Vite", "Full-Stack"],
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-primary-100/50 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 left-10 w-80 h-80 bg-primary-300/15 rounded-full blur-3xl"
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
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary-200/10 rounded-full blur-3xl"
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-black via-primary-700 to-primary-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-15 rounded-xl blur-xl transition-all duration-300`}></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-8 border-2 border-primary-200 group-hover:border-primary-500 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl hover:shadow-primary-300/20">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-primary-700 transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-lg text-primary-600 font-semibold mb-4 opacity-90">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-black font-bold mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                          className="text-gray-700 flex items-start"
                        >
                          <span className="text-primary-600 mr-2 mt-1 font-bold">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full border-2 border-primary-300 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 self-start`}
                >
                  <i className="fa-solid fa-external-link-alt"></i>
                  {project.linkText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
