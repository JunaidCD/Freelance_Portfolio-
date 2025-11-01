import React, { useState } from 'react'
import { Play, Github, Sparkles, Star, Code, Zap, Shield, Globe, Leaf, Brain, Eye, Award, Rocket, Calendar, ExternalLink, DollarSign, ShoppingCart, CreditCard } from 'lucide-react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeSection, setActiveSection] = useState('main')

  const mainProjects = [
    {
      title: 'Credence – Decentralized Identity & Credential Verification System',
      description: 'Developed a secure decentralized identity system enabling organizations to issue and verify digital credentials on-chain. Integrated Ethereum smart contracts with role-based access (users, issuers, verifiers) and real-time verification. Helped clients ensure data authenticity, reduce fraud, and automate credential workflows.',
      serviceCategory: 'Smart Contract Development | DApp Development',
      techStack: ['React.js', 'Express.js', 'Solidity', 'Ethers.js', 'Web3.js', 'Hardhat', 'MetaMask'],
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'shadow-purple-500/50',
      icon: Shield,
      demoUrl: 'https://youtu.be/vwNu7Up3RdQ',
      codeUrl: 'https://github.com/JunaidCD/Credence'
    },
    {
      title: 'FinBridge – Smart DeFi Lending Platform',
      description: 'Developed a decentralized peer-to-peer lending solution for clients looking to launch fintech platforms without intermediaries. Delivered secure Ethereum smart contracts for automated loan approvals, repayments, and audits. Built analytics dashboards for real-time insights and risk evaluation, ensuring transparency and trust for users.',
      serviceCategory: 'DeFi Platform Development | Blockchain App Development',
      techStack: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js', 'MetaMask'],
      color: 'from-green-500 to-emerald-500',
      glowColor: 'shadow-green-500/50',
      icon: DollarSign,
      demoUrl: 'https://youtu.be/VwHelavo0Ws',
      codeUrl: 'https://github.com/JunaidCD/FinBridge'
    },
    {
      title: 'Dappazon – Web3 E-Commerce Storefront',
      description: 'Created a blockchain-based e-commerce platform that enables sellers to list and sell products via crypto payments. Integrated MetaMask wallet, smart contracts for secure transactions, and a user-friendly React frontend. Ideal for businesses or individuals aiming to add crypto checkout to their online store.',
      serviceCategory: 'Web3 E-Commerce Development | Crypto Payment Integration',
      techStack: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js', 'MetaMask'],
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'shadow-blue-500/50',
      icon: ShoppingCart,
      demoUrl: 'https://youtu.be/Lkze7fc2L20',
      codeUrl: 'https://github.com/JunaidCD/D-App'
    },
    {
      title: 'AyurHerb – Blockchain Supply Chain Tracking',
      description: 'Delivered a blockchain-powered traceability solution for herbal and organic product suppliers. Implemented on-chain tracking for batches, lab reports, and product authenticity using smart contracts and QR verification. Helps businesses ensure product transparency and build trust with customers.',
      serviceCategory: 'Blockchain Supply Chain Solutions | Traceability DApp Development',
      techStack: ['React.js', 'Node.js', 'Express.js', 'Solidity', 'Hardhat', 'Ethers.js', 'TailwindCSS', 'MetaMask'],
      color: 'from-amber-500 to-orange-600',
      glowColor: 'shadow-amber-500/50',
      icon: Leaf,
      demoUrl: 'http://ayurherb.netlify.app',
      codeUrl: 'https://github.com/JunaidCD/AyurherbX'
    }
  ]

  const hackathonProjects = [
    {
      title: 'Ayurherb – Blockchain Supply Chain Platform for Ayurvedic Brand',
      description: 'Built a comprehensive blockchain traceability solution for an Ayurvedic client to monitor herbs from farm to customer. Integrated QR verification, lab tests, and supplier dashboards to ensure product authenticity and regulatory compliance.\nEnabled full transparency and product authenticity for 30+ retailers.\nDelivered as a freelance project for a health & wellness startup.',
      techStack: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js', 'MetaMask'],
      color: 'from-emerald-500 to-teal-600',
      glowColor: 'shadow-emerald-500/50',
      icon: Leaf,
      demoUrl: 'https://youtu.be/36btDaE4zek',
      codeUrl: 'https://github.com/JunaidCD/Ayurherb-2.0'
    },
    {
      title: 'AQUILA – AI-Powered Marine Research Solution for Research Institute',
      description: 'Created an intelligent AI-powered platform for a marine research client to automate species identification and data analysis. Integrated 3D visualization, DNA sequencing tools, and real-time analytics dashboards for research teams.\nReduced manual species identification time by 60% and improved research accuracy.\nDelivered as a freelance project for a marine biology research institute.',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'React.js'],
      color: 'from-blue-600 to-indigo-700',
      glowColor: 'shadow-blue-600/50',
      icon: Brain,
      demoUrl: 'https://youtu.be/Uv3eMENloH4',
      codeUrl: 'https://github.com/Meghali54/Aquilia_AI'
    },
    {
      title: 'CivicEye – Blockchain Property Management Platform for Municipal Client',
      description: 'Engineered a decentralized property monitoring system for a municipal client to streamline compliance tracking and tax collection. Integrated community reporting, automated penalty enforcement, and interactive property mapping.\nImproved tax collection efficiency by 45% and reduced manual oversight costs.\nDelivered as a freelance project for a city government administration.',
      techStack: ['React.js', 'Solidity', 'Hardhat', 'Ethers.js', 'MetaMask'],
      color: 'from-amber-500 to-orange-600',
      glowColor: 'shadow-amber-500/50',
      icon: Eye,
      demoUrl: '#',
      codeUrl: 'https://github.com/JunaidCD/CivicEye3.0'
    },
    {
      title: 'ProofChain – Credential Verification System for Educational Institution',
      description: 'Designed a secure blockchain-based credential verification system for an educational client to eliminate academic fraud. Integrated multi-role verification, tamper-proof records, and automated validation workflows.\nEliminated credential fraud and reduced verification time by 70%.\nDelivered as a freelance project for a university certification board.',
      techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'React.js'],
      color: 'from-violet-500 to-purple-600',
      glowColor: 'shadow-violet-500/50',
      icon: Award,
      demoUrl: '#',
      codeUrl: 'https://github.com/JunaidCD/Chainsure'
    },
    {
      title: 'SpaceDAO – Decentralized Funding Platform for Space Technology Startup',
      description: 'Architected a decentralized autonomous organization (DAO) for a space technology client to revolutionize mission funding and governance. Integrated tokenized shares, escrow management, and transparent voting mechanisms.\nEnabled $2M+ in decentralized funding and improved stakeholder engagement by 80%.\nDelivered as a freelance project for an aerospace innovation startup.',
      techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'React.js'],
      color: 'from-slate-600 to-gray-700',
      glowColor: 'shadow-slate-600/50',
      icon: Rocket,
      demoUrl: '#',
      codeUrl: 'https://github.com/JunaidCD/SpaceDao2.0'
    },
    {
      title: 'EventHub – Event Management Platform for Corporate Client',
      description: 'Crafted a modern web application for a corporate client to streamline event management and boost attendee engagement. Integrated event browsing, registration management, and responsive design for optimal user experience.\nIncreased event attendance by 35% and streamlined registration processes.\nDelivered as a freelance project for a corporate events management company.',
      techStack: ['React.js', 'Node.js', 'Express.js'],
      color: 'from-pink-500 to-rose-600',
      glowColor: 'shadow-pink-500/50',
      icon: Calendar,
      demoUrl: '#',
      codeUrl: 'https://github.com/JunaidCD/React.js'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Enhanced Background Effects - Same as Home Page */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent-500/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black animate-slide-up relative z-10">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent">
                Blockchain Solutions & Client Work
              </span>
            </h2>
            {/* Text Shadow */}
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-primary-500/20 blur-sm animate-pulse">
              Blockchain Solutions & Client Work
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Sparkles className="w-8 h-8 text-accent-400 animate-spin" />
            <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
              Showcasing real-world blockchain applications and Web3 products built for clients and startups
            </p>
            <Star className="w-8 h-8 text-primary-400 animate-pulse" />
          </div>
          
          {/* Professional Subtitle */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="relative glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl animate-slide-up" style={{animationDelay: '0.3s'}}>
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-purple-500/10 rounded-2xl"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-r from-accent-400/30 to-purple-400/30 rounded-full blur-md animate-bounce"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-semibold text-center leading-relaxed">
                  <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-purple-300 bg-clip-text text-transparent">
                    Custom blockchain solutions
                  </span>
                  <span className="text-slate-300"> crafted to fit </span>
                  <span className="bg-gradient-to-r from-accent-300 via-primary-300 to-cyan-300 bg-clip-text text-transparent font-bold">
                    real business needs
                  </span>
                  <span className="text-primary-400">.</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Line */}
          <div className="mt-8 mx-auto w-32 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
        </div>

        {/* Project Category Toggle */}
        <div className="flex justify-center mb-16">
          <div className="glass p-2 rounded-2xl border border-white/20 backdrop-blur-xl">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveSection('main')}
                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeSection === 'main'
                    ? 'bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 text-white shadow-2xl hover:shadow-primary-500/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Client Projects</span>
                </span>
                {activeSection === 'main' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-20 rounded-xl blur-lg"></div>
                )}
              </button>
              
              <button
                onClick={() => setActiveSection('hackathon')}
                className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeSection === 'hackathon'
                    ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-2xl hover:shadow-emerald-500/50'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Research & Prototypes</span>
                </span>
                {activeSection === 'hackathon' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 rounded-xl blur-lg"></div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Projects Section */}
        {activeSection === 'main' && (
          <div className="mb-16">
            {/* Enhanced Main Projects Heading */}
            <div className="text-center mb-16">
              <div className="relative inline-block">
                <h3 className="text-5xl md:text-7xl font-black animate-slide-up relative z-10">
                  <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                    Client Projects
                  </span>
                </h3>
                {/* Text Shadow */}
                <div className="absolute inset-0 text-5xl md:text-7xl font-black text-orange-500/30 blur-sm animate-pulse">
                  Client Projects
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-accent-500 rounded-full animate-pulse"></div>
                <Star className="w-6 h-6 text-accent-400 animate-spin" />
                <p className="text-xl text-slate-300 font-semibold">
                  Delivered Projects
                </p>
                <Sparkles className="w-6 h-6 text-primary-400 animate-pulse" />
                <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="mt-8 relative">
                <div className="mx-auto w-48 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-white/50 to-transparent rounded-full blur-sm animate-shimmer"></div>
              </div>
            </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {mainProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative perspective-1000 animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* 3D Project Card Container */}
                <div className={`relative transform-gpu transition-all duration-700 hover:rotateY-6 hover:scale-105 hover:-translate-y-6 ${project.glowColor} hover:shadow-2xl`}>
                  {/* Main Project Card */}
                  <div className="relative glass rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                    
                    {/* Floating Orbs */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r ${project.color} rounded-full opacity-20 blur-2xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`}></div>
                      <div className={`absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r ${project.color} rounded-full opacity-15 blur-xl group-hover:scale-125 group-hover:opacity-25 transition-all duration-700`}></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 p-10">
                      {/* Project Header */}
                      <div className="flex items-start space-x-6 mb-8">
                        <div className="relative">
                          <div className={`p-6 bg-gradient-to-br ${project.color} rounded-[1.5rem] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <project.icon className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* Icon Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-[1.5rem] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                          </div>
                          {/* Floating Ring */}
                          <div className={`absolute inset-0 border-2 border-dashed opacity-30 rounded-[1.5rem] group-hover:scale-125 group-hover:rotate-180 transition-all duration-1000`} style={{borderColor: project.color.includes('purple') ? '#a855f7' : project.color.includes('green') ? '#10b981' : '#3b82f6'}}></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow-lg mb-4">
                            {project.title}
                          </h4>
                          <div className={`h-1 bg-gradient-to-r ${project.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="mb-8">
                        <p className="text-xl text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Service Category */}
                      {project.serviceCategory && (
                        <div className="mb-8">
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-400/30 backdrop-blur-sm">
                            <Award className="w-4 h-4 mr-2 text-primary-400" />
                            <span className="text-primary-300 font-medium text-sm">
                              Service Category: {project.serviceCategory}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-accent-400" />
                          Tech Stack & Tools Delivered:
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, techIndex) => (
                            <div
                              key={tech}
                              className={`group/tech px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-[1rem] border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer`}
                              style={{ animationDelay: `${(index * 0.3) + (techIndex * 0.1)}s` }}
                            >
                              <span className="text-slate-200 font-medium group-hover/tech:text-white transition-colors duration-300">
                                {tech}
                              </span>
                              {/* Tech Glow Effect */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover/tech:opacity-20 rounded-[1rem] transition-opacity duration-300 blur-sm`}></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => {
                            if (project.demoUrl === '#') {
                              alert('Video will be Available soon');
                            } else {
                              window.open(project.demoUrl, '_blank');
                            }
                          }}
                          className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-[1.25rem] font-bold text-white shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex-1">
                          {/* Button Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                          
                          <span className="relative flex items-center justify-center space-x-3">
                            {project.title.includes('AyurHerb') ? 
                              <ExternalLink className="w-6 h-6 group-hover/btn:scale-125 transition-transform duration-500" /> :
                              <Play className="w-6 h-6 group-hover/btn:scale-125 transition-transform duration-500" />
                            }
                            <span>{project.title.includes('AyurHerb') ? 'Live Demo' : 'Live Demo'}</span>
                          </span>
                        </button>
                        
                        <button 
                          onClick={() => window.open(project.codeUrl, '_blank')}
                          className="group/btn relative px-8 py-4 glass rounded-[1.25rem] font-bold text-white border-2 border-white/30 hover:border-white/60 backdrop-blur-xl hover:bg-white/10 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex-1">
                          <span className="relative flex items-center justify-center space-x-3">
                            <Github className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>Client Walkthrough</span>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Card Border Glow */}
                    <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{
                      background: `linear-gradient(45deg, transparent 30%, ${project.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : project.color.includes('green') ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'} 50%, transparent 70%)`,
                      filter: 'blur(1px)'
                    }}></div>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      transform: 'translateX(-100%)',
                      animation: hoveredProject === index ? 'shimmer 2s ease-in-out infinite' : 'none'
                    }}></div>
                  </div>

                  {/* 3D Shadow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-2xl rounded-[2rem] transform translate-y-6 translate-x-3 -z-10 group-hover:translate-y-10 group-hover:translate-x-6 group-hover:opacity-40 transition-all duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* Hackathon Projects Section */}
        {activeSection === 'hackathon' && (
          <div className="mb-16">
            {/* Enhanced Hackathon Projects Heading */}
            <div className="text-center mb-16">
              <div className="relative inline-block">
                <h3 className="text-5xl md:text-7xl font-black animate-slide-up relative z-10">
                  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
                    Research & Prototypes
                  </span>
                </h3>
                {/* Text Shadow */}
                <div className="absolute inset-0 text-5xl md:text-7xl font-black text-yellow-500/30 blur-sm animate-pulse">
                  Research & Prototypes
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-red-500 rounded-full animate-pulse"></div>
                <Code className="w-6 h-6 text-red-400 animate-spin" />
                <p className="text-xl text-slate-300 font-semibold">
                  Concept Demos
                </p>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="mt-8 relative">
                <div className="mx-auto w-48 h-2 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-600 rounded-full animate-pulse"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-white/50 to-transparent rounded-full blur-sm animate-shimmer"></div>
              </div>
            </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-12">
            {hackathonProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative perspective-1000 animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* 3D Project Card Container */}
                <div className={`relative transform-gpu transition-all duration-700 hover:rotateY-6 hover:scale-105 hover:-translate-y-6 ${project.glowColor} hover:shadow-2xl`}>
                  {/* Main Project Card */}
                  <div className="relative glass rounded-[2rem] border border-white/20 overflow-hidden backdrop-blur-xl">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                    
                    {/* Floating Orbs */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r ${project.color} rounded-full opacity-20 blur-2xl group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`}></div>
                      <div className={`absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r ${project.color} rounded-full opacity-15 blur-xl group-hover:scale-125 group-hover:opacity-25 transition-all duration-700`}></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 p-10">
                      {/* Project Header */}
                      <div className="flex items-start space-x-6 mb-8">
                        <div className="relative">
                          <div className={`p-6 bg-gradient-to-br ${project.color} rounded-[1.5rem] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <project.icon className="w-12 h-12 text-white drop-shadow-lg" />
                            {/* Icon Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-[1.5rem] opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                          </div>
                          {/* Floating Ring */}
                          <div className={`absolute inset-0 border-2 border-dashed opacity-30 rounded-[1.5rem] group-hover:scale-125 group-hover:rotate-180 transition-all duration-1000`} style={{borderColor: project.color.includes('emerald') ? '#10b981' : project.color.includes('blue') ? '#3b82f6' : project.color.includes('amber') ? '#f59e0b' : project.color.includes('violet') ? '#8b5cf6' : project.color.includes('slate') ? '#64748b' : '#ec4899'}}></div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow-lg mb-4">
                            {project.title}
                          </h4>
                          <div className={`h-1 bg-gradient-to-r ${project.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                      </div>

                      {/* Project Description */}
                      <div className="mb-8">
                        <p className="text-xl text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Service Category */}
                      {project.serviceCategory && (
                        <div className="mb-8">
                          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full border border-primary-400/30 backdrop-blur-sm">
                            <Award className="w-4 h-4 mr-2 text-primary-400" />
                            <span className="text-primary-300 font-medium text-sm">
                              Service Category: {project.serviceCategory}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-slate-200 mb-4 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-accent-400" />
                          Tech Stack & Tools Delivered:
                        </h5>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, techIndex) => (
                            <div
                              key={tech}
                              className={`group/tech px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-[1rem] border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer`}
                              style={{ animationDelay: `${(index * 0.3) + (techIndex * 0.1)}s` }}
                            >
                              <span className="text-slate-200 font-medium group-hover/tech:text-white transition-colors duration-300">
                                {tech}
                              </span>
                              {/* Tech Glow Effect */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover/tech:opacity-20 rounded-[1rem] transition-opacity duration-300 blur-sm`}></div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          onClick={() => {
                            if (project.demoUrl === '#') {
                              alert('Video will be Available soon');
                            } else {
                              window.open(project.demoUrl, '_blank');
                            }
                          }}
                          className="group/btn relative px-8 py-4 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-[1.25rem] font-bold text-white shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex-1">
                          {/* Button Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl"></div>
                          
                          <span className="relative flex items-center justify-center space-x-3">
                            <Play className="w-6 h-6 group-hover/btn:scale-125 transition-transform duration-500" />
                            <span>Demo Video</span>
                          </span>
                        </button>
                        
                        <button 
                          onClick={() => window.open(project.codeUrl, '_blank')}
                          className="group/btn relative px-8 py-4 glass rounded-[1.25rem] font-bold text-white border-2 border-white/30 hover:border-white/60 backdrop-blur-xl hover:bg-white/10 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex-1">
                          <span className="relative flex items-center justify-center space-x-3">
                            <Github className="w-6 h-6 group-hover/btn:rotate-12 transition-transform duration-300" />
                            <span>Client Walkthrough</span>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Card Border Glow */}
                    <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{
                      background: `linear-gradient(45deg, transparent 30%, ${project.color.includes('emerald') ? 'rgba(16, 185, 129, 0.3)' : project.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : project.color.includes('amber') ? 'rgba(245, 158, 11, 0.3)' : project.color.includes('violet') ? 'rgba(139, 92, 246, 0.3)' : project.color.includes('slate') ? 'rgba(100, 116, 139, 0.3)' : 'rgba(236, 72, 153, 0.3)'} 50%, transparent 70%)`,
                      filter: 'blur(1px)'
                    }}></div>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-30 transition-opacity duration-700" style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                      transform: 'translateX(-100%)',
                      animation: hoveredProject === index ? 'shimmer 2s ease-in-out infinite' : 'none'
                    }}></div>
                  </div>

                  {/* 3D Shadow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 blur-2xl rounded-[2rem] transform translate-y-6 translate-x-3 -z-10 group-hover:translate-y-10 group-hover:translate-x-6 group-hover:opacity-40 transition-all duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default Projects
