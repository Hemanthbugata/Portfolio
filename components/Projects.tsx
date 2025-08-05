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
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-300`}></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-lg text-blue-400 mb-4 opacity-80">
                    {project.subtitle}
                  </h4>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-blue-400/30"
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
