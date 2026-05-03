'use client'

import { Briefcase, TrendingUp, DollarSign, MapPin, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function CareerPathsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const careers = [
    {
      title: 'Medical Coding Specialist',
      companies: 'Hospitals, Clinics, Diagnostic Centers',
      salary: '₹3-5 LPA',
      description: 'Work directly with healthcare providers, ensuring accurate coding for billing and insurance claims.',
      icon: Briefcase,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      title: 'Medical Bill Audit',
      companies: 'Billing Companies, Insurance Companies',
      salary: '₹3.5-6 LPA',
      description: 'Verify and audit medical bills for accuracy and compliance with coding standards.',
      icon: TrendingUp,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      title: 'Coding Auditor',
      companies: 'Healthcare Organizations, Compliance Firms',
      salary: '₹4-7 LPA',
      description: 'Conduct internal audits to ensure proper coding practices and regulatory compliance.',
      icon: DollarSign,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Remote Medical Coder',
      companies: 'US/Global Healthcare BPOs',
      salary: '₹4-8 LPA + Benefits',
      description: 'Code medical records remotely for international healthcare organizations from Chennai.',
      icon: MapPin,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Medical Coding Trainer',
      companies: 'Educational Institutes, Coding Companies',
      salary: '₹5-10 LPA',
      description: 'Train and mentor new medical coders, sharing your expertise and growing your career.',
      icon: Briefcase,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Freelance Medical Coder',
      companies: 'Independent/Multiple Clients',
      salary: '₹5-12 LPA+',
      description: 'Build your own practice and work with multiple healthcare providers as an independent contractor.',
      icon: TrendingUp,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10'
    },
  ]

  const opportunities = [
    'Work with leading hospitals and healthcare networks',
    'Remote opportunities with global healthcare organizations',
    'Career growth to supervisory and management roles',
    'Continuous upskilling and specialization options',
    'Work-life balance with flexible schedules',
    'High demand and job security in healthcare sector',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="careers" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Career <span className="gradient-text">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Medical coding professionals are in high demand with excellent career growth and earning potential.
          </p>
        </motion.div>

        {/* Career Paths Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {careers.map((career, index) => {
            const Icon = career.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-8 glass-card rounded-2xl hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 ${career.bg} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className={career.color} size={26} />
                  </div>
                  <div className="bg-primary/10 text-primary font-bold text-sm px-3 py-1.5 rounded-full border border-primary/20">
                    {career.salary}
                  </div>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-xl">{career.title}</h3>
                <p className="text-xs text-muted-foreground font-medium mb-4 uppercase tracking-wider">{career.companies}</p>
                <p className="text-muted-foreground leading-relaxed">{career.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Why Medical Coding is a Great Career */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-card to-background border border-border/60 shadow-sm rounded-3xl p-10 h-full"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center sm:text-left">Why It's a Growing Career?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-2 bg-primary/10 h-fit rounded-lg shrink-0">
                  <TrendingUp className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">Growing Industry & High Demand</h4>
                  <p className="text-muted-foreground leading-relaxed">Healthcare industry is growing rapidly with increased digitalization. A shortage of qualified medical coders creates excellent job prospects.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-indigo-500/10 h-fit rounded-lg shrink-0">
                  <MapPin className="text-indigo-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">Global & Remote Opportunities</h4>
                  <p className="text-muted-foreground leading-relaxed">CPC certification opens doors to international jobs. Many positions offer work-from-home options, providing flexibility and work-life balance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-emerald-500/10 h-fit rounded-lg shrink-0">
                  <DollarSign className="text-emerald-500" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">Competitive Salary & Growth</h4>
                  <p className="text-muted-foreground leading-relaxed">Medical coders earn competitive salaries with excellent growth potential as they gain experience, ranging from employment to freelancing.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Opportunities List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-10 shadow-xl relative overflow-hidden h-full flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-8">What Awaits You</h3>
              <div className="space-y-4 mb-8">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="text-indigo-200 shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-[15px]">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 mt-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <p className="text-white font-bold mb-2">Ready to Start?</p>
              <p className="text-indigo-100 text-sm mb-4">Join our next batch and take the first step towards a rewarding career.</p>
              <a href="#contact" className="inline-block px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-gray-50 transition-colors w-full text-center shadow-lg">
                Explore Course Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
