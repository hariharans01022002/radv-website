'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: 'What certifications do you offer?',
      answer: 'We offer CPC (Certified Professional Coder) and CRC (Certified Risk Adjustment Coder) certifications, both recognized by AAPC. CPC validates your knowledge of diagnostic and procedural coding standards, while CRC focuses on revenue cycle management and healthcare billing practices.'
    },
    {
      question: 'How long is the course?',
      answer: 'Our comprehensive CPC and CRC courses are 3 months long each with flexible weekday and weekend batches. The programs include theory, practical sessions, and exam preparation for both certifications.'
    },
    {
      question: 'Do you provide job placement?',
      answer: 'Yes, we provide 100% career guidance and job placement assistance to our graduates. Our industry connections help connect graduates with leading healthcare organizations.'
    },
    {
      question: 'What is the eligibility criteria?',
      answer: 'You should have a high school diploma or equivalent. Basic knowledge of healthcare terminology is helpful but not mandatory. We start from the basics to ensure a strong foundation.'
    },
    {
      question: 'What is the course fee?',
      answer: 'For detailed pricing information, please contact us directly. We offer flexible payment options and may provide discounts for early enrollment.'
    },
    {
      question: 'Is there lifetime access to course materials?',
      answer: 'Yes, once enrolled, you get lifetime access to all course materials, recorded sessions, and study guides. You can review and practice anytime.'
    }
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our CPC and CRC training programs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/50 shadow-md bg-card/80 backdrop-blur-sm' : 'border-border/60 bg-card hover:border-primary/30'}`}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <h3 suppressHydrationWarning className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                    {faq.question}
                  </h3>
                  <div suppressHydrationWarning className={`p-2 rounded-full transition-colors flex-shrink-0 ml-4 ${isOpen ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary'}`}>
                    <ChevronDown
                      suppressHydrationWarning
                      size={20}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-full h-[1px] bg-border/50 mb-4"></div>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
