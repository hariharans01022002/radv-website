'use client'

import { Star, Users } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Kumar',
      role: 'CPC Professional',
      company: 'Apollo Healthcare Services',
      content: 'Radv Academy helped me secure my CPC certification in just 5 months. The course material was comprehensive and Kalaiyarasi\'s guidance was invaluable. I passed the exam on the first attempt!',
      rating: 5,
    },
    {
      name: 'Rajesh Mehta',
      role: 'Medical Coding Specialist',
      company: 'MedBilling Solutions',
      content: 'The batch size was small, which meant I got personalized attention. Every concept was explained clearly with real-world examples. Highly recommended for anyone serious about medical coding.',
      rating: 5,
    },
    {
      name: 'Anjali Sharma',
      role: 'Healthcare Administrator',
      company: 'Chennai Medical Center',
      content: 'Not only did I learn medical coding, but I also got excellent job placement support. Within 2 weeks of completing the course, I landed a job. Great investment for my career!',
      rating: 5,
    },
    {
      name: 'Sanjay Patel',
      role: 'Freelance Medical Coder',
      company: 'Independent',
      content: 'The lifetime access to course materials has been super helpful. I refer back to the materials regularly in my work. The exam preparation was thorough and realistic.',
      rating: 5,
    },
    {
      name: 'Deepika Singh',
      role: 'Coding Auditor',
      company: 'HealthCare Audit India',
      content: 'What impressed me most was the regular mock exams and one-on-one doubt sessions. Kalaiyarasi ensured every student understood the concepts deeply, not just memorized them.',
      rating: 5,
    },
    {
      name: 'Vikram Reddy',
      role: 'Clinical Coder',
      company: 'Max Healthcare',
      content: 'The course covers everything you need to ace the CPC exam. The instructors are professional, the material is updated regularly, and the support system is excellent. 100% worth it!',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who've successfully launched their medical coding careers.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Users size={16} />
            <span>500+ students trained | 95% exam success rate</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-xl hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <p className="text-sm text-muted-foreground">Students Graduated</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <p className="text-sm text-muted-foreground">First Attempt Success</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">4.9/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
