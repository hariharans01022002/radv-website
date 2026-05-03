'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Course', href: '#course' },
    { label: 'Why Us', href: '#why-us' },
  ]

  const courseLinks = [
    { label: 'CPC Certification', href: '#course' },
    { label: 'Course Curriculum', href: '#course' },
    { label: 'Pricing', href: '#course' },
    { label: 'Enrollment', href: '#contact' },
  ]

  const resources = [
    { label: 'Career Opportunities', href: '#careers' },
    { label: 'Job Placement', href: '#careers' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQ', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-[#0f172a] to-slate-900 text-white border-t border-white/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-2xl shadow-xl shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/Radiv logo.png" 
                    alt="Radiv Academy Logo" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-black text-3xl tracking-tight text-white">
                  RADIV<span className="text-indigo-400 block sm:inline">Academy</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Empowering medical coding professionals with industry-leading education, AAPC certification training, and dedicated career support.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group">
                  Start your journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-indigo-500/0 rounded-full group-hover:bg-indigo-500 transition-colors"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course */}
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wide">Programs</h4>
              <ul className="space-y-3">
                {courseLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-indigo-500/0 rounded-full group-hover:bg-indigo-500 transition-colors"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Call us</p>
                    <p className="text-slate-300 font-medium text-sm">+91 9597418303</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Email us</p>
                    <p className="text-slate-300 font-medium text-sm">radivcodingacademy@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/5 rounded-lg text-indigo-400 group-hover:bg-indigo-500/20 transition-colors mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed">First Floor Abhinaya Complex, Ganapathy Main Road, Coimbatore</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500 font-medium">
              © {currentYear} Radiv Academy. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
