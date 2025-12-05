import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import AboutHero from '@/components/about/AboutHero'
import CompanyStory from '@/components/about/CompanyStory'
import StatsCounter from '@/components/about/StatsCounter'
import Certifications from '@/components/about/Certifications'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export const metadata: Metadata = {
  title: 'About Us - Glonova Pte Ltd | Premium Interior Manufacturing',
  description: 'Learn about Glonova Pte Ltd - Singapore\'s leading interior manufacturing and renovation company. Our story, team, and commitment to excellence.',
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <StatsCounter />
      <WhyChooseUs />
      <Certifications />
      <Footer />
      <StickyCTA />
    </main>
  )
}
