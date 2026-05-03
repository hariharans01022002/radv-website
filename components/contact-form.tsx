'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    if (!/^[\d\s\-+()]+$/.test(formData.phone)) {
      toast.error('Please enter a valid phone number')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }
      
      toast.success('✓ Message sent successfully! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
      console.error('[v0] Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 9597418303',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'radivcodingacademy@gmail.com',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'First Floor Abhinaya Complex, Ganapathy Main Road, Ganapathy, Coimbatore',
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-indigo-500/5 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex p-3 bg-primary/10 rounded-2xl mb-2 text-primary">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team is here to help you get started on your medical coding journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-indigo-600 rounded-full"></div>
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      variants={itemVariants}
                      key={index}
                      className="flex gap-4 p-5 glass-card rounded-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className={`p-4 ${info.bg} rounded-xl flex-shrink-0 h-fit group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={info.color} size={24} />
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-bold text-foreground text-base mb-1">{info.label}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Batch Info */}
            <motion.div 
              variants={itemVariants}
              className="p-8 bg-gradient-to-br from-primary to-indigo-700 rounded-2xl text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm text-white">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-bold text-lg">Available Batches</h4>
                </div>
                <div className="space-y-4 text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    <p className="text-white/90">Weekday morning & evening</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    <p className="text-white/90">Weekend intensive batches</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    <p className="text-white">3-month comprehensive program</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border/60 shadow-xl rounded-3xl p-8 sm:p-10 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
              
              <h3 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      suppressHydrationWarning
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      suppressHydrationWarning
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Your Message
                  </label>
                  <textarea
                    suppressHydrationWarning
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in our course, your background, or any specific questions you have..."
                    rows={5}
                    className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none shadow-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  Your information is secure and will only be used to contact you regarding our courses.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
