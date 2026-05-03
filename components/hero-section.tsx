'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Award, Users, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background dark:from-indigo-900/20 dark:via-background dark:to-background"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Welcome Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Accepting Enrollments for 2026 Batches
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
                Master Medical <br />
                <span className="gradient-text">Coding Career</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
                Get certified with Radv Coding Academy. Learn from industry experts and become a Certified Professional Coder (CPC) or Certified Risk Adjustment Coder (CRC) in just 3 months.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-indigo-500 shrink-0" size={20} />
                <span className="text-foreground font-medium">AAPC Recognized Training</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-indigo-500 shrink-0" size={20} />
                <span className="text-foreground font-medium">Expert Instructors with 10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-indigo-500 shrink-0" size={20} />
                <span className="text-foreground font-medium">100% Job Placement Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-indigo-500 shrink-0" size={20} />
                <span className="text-foreground font-medium">Lifetime Access to Course Materials</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 group">
                Start Your Journey
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#course" className="btn-secondary flex items-center justify-center gap-2 group">
                View Curriculum
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center relative mt-12 lg:mt-0 px-4 sm:px-0"
          >
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 left-2 sm:-top-6 sm:-left-6 bg-white dark:bg-card p-3 sm:p-4 rounded-2xl shadow-xl border border-border/50 z-10 scale-90 sm:scale-100"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">95% Success</p>
                  <p className="text-xs text-muted-foreground">in AAPC Exams</p>
                </div>
              </div>
            </motion.div>

            <div className="w-full max-w-sm sm:max-w-lg aspect-[4/5] sm:aspect-square bg-gradient-to-br from-primary via-indigo-600 to-secondary rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer hover:shadow-indigo-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="text-center relative z-10 p-6 sm:p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">CPC & CRC</div>
                <p className="text-indigo-100 font-semibold text-lg sm:text-xl mb-1">Certified Professional Coder</p>
                <p className="text-indigo-100 font-semibold text-base sm:text-lg mb-6 opacity-80">Certified Risk Adjustment Coder</p>
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white text-xs sm:text-sm font-medium group-hover:bg-white/30 transition-colors">
                  Next Batch Starts Soon
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border/50">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 bg-primary/10 rounded-2xl mb-2 text-primary">
              <Users size={28} />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground">
              {inView ? <CountUp end={500} duration={2.5} /> : "0"}+
            </div>
            <p className="text-muted-foreground font-medium">Students Trained</p>
          </div>
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 bg-indigo-500/10 rounded-2xl mb-2 text-indigo-500">
              <Award size={28} />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground">
              {inView ? <CountUp end={95} duration={2.5} /> : "0"}%
            </div>
            <p className="text-muted-foreground font-medium">Exam Success Rate</p>
          </div>
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 bg-secondary/10 rounded-2xl mb-2 text-secondary">
              <GraduationCap size={28} />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground">
              {inView ? <CountUp end={10} duration={2.5} /> : "0"}+
            </div>
            <p className="text-muted-foreground font-medium">Years Experience</p>
          </div>
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 bg-green-500/10 rounded-2xl mb-2 text-green-500">
              <CheckCircle size={28} />
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-foreground">
              {inView ? <CountUp end={100} duration={2.5} /> : "0"}%
            </div>
            <p className="text-muted-foreground font-medium">Job Assistance</p>
          </div>
        </div>
      </div>
    </section>
  )
}
