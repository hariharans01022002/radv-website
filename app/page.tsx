import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { CourseSection } from '@/components/course-section'
import { AboutSection } from '@/components/about-section'
import { WhyUsSection } from '@/components/why-us-section'
import { CareerPathsSection } from '@/components/career-paths-section'
import { FAQSection } from '@/components/faq-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CourseSection />
      <AboutSection />
      <WhyUsSection />
      <CareerPathsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
