'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, ChevronRight } from 'lucide-react'

const featuredProjects = [
  {
    id: 1,
    title: 'Marina Bay Penthouse',
    category: 'Luxury Residential',
    location: 'Marina Bay, Singapore',
    year: '2024',
    size: '4,500 sq ft',
    description: 'A stunning transformation of a waterfront penthouse featuring bespoke joinery, Italian marble, and smart home integration.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=85',
    ],
    tags: ['Full Renovation', 'Custom Joinery', 'Smart Home'],
  },
  {
    id: 2,
    title: 'Orchard Boutique Hotel',
    category: 'Hospitality',
    location: 'Orchard Road, Singapore',
    year: '2023',
    size: '12,000 sq ft',
    description: 'Complete interior fit-out for a 25-room boutique hotel with custom doors, windows, and luxury furnishings.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=85',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=85',
    ],
    tags: ['Hospitality', 'Custom Doors', 'Luxury Finishes'],
  },
  {
    id: 3,
    title: 'CBD Corporate Office',
    category: 'Commercial',
    location: 'Raffles Place, Singapore',
    year: '2024',
    size: '8,500 sq ft',
    description: 'Modern office transformation with glass partitions, acoustic panels, and sustainable materials.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=85',
    ],
    tags: ['Commercial', 'Glass Work', 'Sustainable'],
  },
  {
    id: 4,
    title: 'Sentosa Villa',
    category: 'High-End Residential',
    location: 'Sentosa Cove, Singapore',
    year: '2023',
    size: '6,200 sq ft',
    description: 'Tropical modern villa with floor-to-ceiling windows, custom wooden doors, and outdoor integration.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=85',
    ],
    tags: ['Villa', 'Custom Windows', 'Tropical Design'],
  },
]

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null)
  const [activeTab, setActiveTab] = useState('all')

  const categories = ['all', 'Residential', 'Commercial', 'Hospitality']

  const filteredProjects =
    activeTab === 'all'
      ? featuredProjects
      : featuredProjects.filter((p) =>
          p.category.toLowerCase().includes(activeTab.toLowerCase())
        )

  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            FEATURED WORK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Signature <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Explore our most iconic transformations that define excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full text-sm tracking-wide transition-all ${
                activeTab === category
                  ? 'bg-metallic-gold text-charcoal-dark font-semibold'
                  : 'glass-effect border border-warmGrey-dark/30 text-warmGrey-light hover:border-metallic-gold/50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group glass-effect rounded-2xl overflow-hidden border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-metallic-gold" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs tracking-wider text-metallic-gold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-warmGrey-light text-sm">{project.location}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-warmGrey-light mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-metallic-gold/10 text-metallic-gold text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-warmGrey-light">
                    <span className="text-white font-semibold">{project.size}</span> • {project.year}
                  </div>
                  <div className="flex items-center gap-1 text-metallic-gold group-hover:gap-2 transition-all">
                    View Details <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-charcoal-dark/95 backdrop-blur-lg flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-effect rounded-3xl border border-metallic-gold/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center hover:bg-metallic-gold/20 transition-colors"
                >
                  <span className="text-white text-2xl">×</span>
                </button>
              </div>
              <div className="p-8 md:p-12">
                <div className="text-xs tracking-wider text-metallic-gold mb-2">
                  {selectedProject.category}
                </div>
                <h3 className="text-4xl font-display font-semibold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-6 text-warmGrey-light mb-6">
                  <div>
                    <span className="text-white font-semibold">Location:</span>{' '}
                    {selectedProject.location}
                  </div>
                  <div>
                    <span className="text-white font-semibold">Size:</span> {selectedProject.size}
                  </div>
                  <div>
                    <span className="text-white font-semibold">Year:</span> {selectedProject.year}
                  </div>
                </div>
                <p className="text-warmGrey-light text-lg mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-metallic-gold/10 text-metallic-gold text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden">
                      <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
