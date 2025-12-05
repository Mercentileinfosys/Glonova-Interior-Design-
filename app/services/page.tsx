import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesList from '@/components/services/ServicesList'
import ProcessFlow from '@/components/services/ProcessFlow'
import PricingSection from '@/components/services/PricingSection'
import ServiceGallery from '@/components/services/ServiceGallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'Our Services - Glonova Pte Ltd | Interior Manufacturing & Renovation',
  description: 'Explore our comprehensive interior solutions: custom doors, windows, joinery, full renovations, and professional installation services in Singapore.',
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ProcessFlow />
      <ServiceGallery />
      <PricingSection />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  )
}
