'use client'

import { Zap, Target, Users, Briefcase, Award, TrendingUp, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function WhyUsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons = [
    {
      icon: Target,
      title: 'Focused Curriculum',
      description: 'Every lesson is designed specifically to prepare you for the AAPC CPC and CRC exams with real-world relevance.',
      highlight: 'Exam-Focused',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      icon: Zap,
      title: 'Quick Learning Path',
      description: 'Complete your certification in just 3 months with flexible self-paced and live class options.',
      highlight: 'Fast-Track',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      icon: Users,
      title: 'Small Batch Size',
      description: 'Limited to 25 students per batch to ensure personalized attention and quality mentorship.',
      highlight: 'Personal Touch',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Briefcase,
      title: 'Job Placement Support',
      description: 'Get connected with healthcare organizations and coding service providers looking for CPC and CRC professionals.',
      highlight: 'Career Ready',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Our certification is recognized by healthcare providers and is valued by employers nationwide.',
      highlight: 'Certified',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Medical coders are in high demand with excellent growth prospects and earning potential.',
      highlight: 'Growing Field',
      color: 'text-rose-500',
      bg: 'bg-rose-500/10'
    },
  ]

  const benefits = [
    'Flexible learning schedule',
    'Lifetime course access',
    'Regular mock exams',
    'One-on-one doubt sessions',
    'Internship opportunities',
    'Resume building assistance',
    'Interview preparation',
    'Placement assistance',
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
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-indigo-500/5 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Choose <span className="gradient-text">Radv?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to your success with comprehensive support at every step of your journey.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 glass-card rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 ${reason.bg} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon className={reason.color} size={26} />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                      {reason.highlight}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-xl">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-card to-background border border-border/60 shadow-sm rounded-3xl p-10 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center">Complete Support Package</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4 + (index * 0.05) }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <CheckCircle2 className="text-indigo-500 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-foreground font-medium text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-3xl p-12 text-center shadow-lg relative"
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ successful medical coding professionals who've transformed their careers with Radv Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Enroll Today
            </a>
            <a href="#contact" className="btn-secondary">
              Get Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
