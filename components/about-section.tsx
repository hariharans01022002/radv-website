'use client'

import { Stethoscope, Users, BookOpen, Trophy, Target, Eye, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Stethoscope,
      title: 'Expert Instruction',
      description: 'Learn from industry experts with 10+ years of medical coding experience.',
    },
    {
      icon: Users,
      title: 'Personalized Guidance',
      description: 'Small batch sizes ensure personalized attention and mentorship for every student.',
    },
    {
      icon: BookOpen,
      title: 'Up-to-Date Content',
      description: 'Regular updates to curriculum based on latest ICD-10-CM and CPT coding standards.',
    },
    {
      icon: Trophy,
      title: 'High Success Rate',
      description: '95% of our students pass the AAPC CPC and CRC exams on their first attempt.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            About <span className="gradient-text">Radv Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded with a mission to create skilled medical coding professionals, Radv Coding Academy has trained 500+ students across India.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="p-3 bg-indigo-500/10 h-fit rounded-xl shrink-0">
                <Target className="text-indigo-500" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide industry-leading medical coding education that empowers professionals to build successful careers in healthcare administration and coding.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="p-3 bg-purple-500/10 h-fit rounded-xl shrink-0">
                <Eye className="text-purple-500" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted medical coding academy in India, known for excellence in education, mentorship, and career outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" />
                Why Choose Us?
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  AAPC-recognized CPC & CRC training
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Expert instructors with industry experience
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Comprehensive course materials
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  Lifetime access to resources
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-gradient-to-br from-primary via-indigo-600 to-secondary rounded-3xl py-16 px-4 lg:aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <div className="text-center p-8 relative z-10">
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/20 mb-6"
              >
                <div className="text-6xl font-black text-white drop-shadow-lg">10+</div>
              </motion.div>
              <p className="text-white font-bold text-2xl mb-2">Years of Experience</p>
              <p className="text-indigo-100/80 font-medium mb-8">Training medical coding professionals</p>
              <div className="space-y-4 text-sm font-medium">
                <p className="text-white bg-white/10 p-3 rounded-lg border border-white/10 backdrop-blur-sm">AAPC Certified Professional Coder (CPC)</p>
                <p className="text-white bg-white/10 p-3 rounded-lg border border-white/10 backdrop-blur-sm">AAPC Certified Risk Adjustment Coder (CRC)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-6 bg-background border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-primary/30 group cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-xl flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
