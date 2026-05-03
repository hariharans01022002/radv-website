'use client'

import { Clock, Users, FileText, Award, BookOpen, Zap, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function CourseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const courseDetails = [
    {
      title: 'Duration',
      description: '3 Months',
      icon: Clock,
      stat: 'Self-paced & Live Classes',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      title: 'Batches',
      description: 'Flexible Schedule',
      icon: Users,
      stat: 'Weekend & Weekday options available',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
    },
    {
      title: 'Course Materials',
      description: 'Comprehensive',
      icon: BookOpen,
      stat: 'Lifetime access to all content',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
    },
    {
      title: 'Certification',
      description: 'CPC & CRC',
      icon: Award,
      stat: 'AAPC Recognized Industry-standard certifications',
      color: 'text-pink-500',
      bg: 'bg-pink-500/10',
    },
    {
      title: 'Modules',
      description: 'Structured Learning',
      icon: FileText,
      stat: '15+ modules with practicals',
      color: 'text-rose-500',
      bg: 'bg-rose-500/10',
    },
    {
      title: 'Support',
      description: '24/7 Help',
      icon: Zap,
      stat: 'Dedicated mentor support',
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
    },
  ]

  const modules = [
    'Medical Terminology & Anatomy',
    'ICD-10-CM Coding',
    'CPT Coding Fundamentals',
    'HCPCS Level II Coding',
    'Medical Ethics & Compliance',
    'Insurance & Billing Concepts',
    'Practice Management Systems',
    'Real-world Case Studies',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="course" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Comprehensive <span className="gradient-text">CPC Certification</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete curriculum designed to prepare you for the AAPC CPC exam and launch your career in medical coding with confidence.
          </p>
        </motion.div>

        {/* Course Highlights Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {courseDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 glass-card rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 ${detail.bg} rounded-xl transition-colors group-hover:scale-110 duration-300`}>
                    <Icon className={detail.color} size={28} />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{detail.title}</h3>
                </div>
                <p className="text-foreground font-bold text-2xl mb-2">{detail.description}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.stat}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Course Structure */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-left">What You'll Learn</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {modules.map((module, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4 + (index * 0.05) }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-foreground font-medium">{module}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-primary to-indigo-700 rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative patterns */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-primary-foreground/80 text-lg mb-8">Join hundreds of successful medical coders. Contact us today to enroll in the next batch and transform your career.</p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
