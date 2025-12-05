import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import FeaturedProjects from '@/components/portfolio/FeaturedProjects'
import ProjectCategories from '@/components/portfolio/ProjectCategories'
import ClientTestimonials from '@/components/portfolio/ClientTestimonials'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'Portfolio - Glonova Pte Ltd | Our Project Showcase',
  description: 'Explore our portfolio of successful interior projects across Singapore. From luxury residences to commercial spaces.',
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <PortfolioHero />
      <FeaturedProjects />
      <ProjectCategories />
      <ClientTestimonials />
      <Footer />
      <StickyCTA />
    </main>
  )
}
