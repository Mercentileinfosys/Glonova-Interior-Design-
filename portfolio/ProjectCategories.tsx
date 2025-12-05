'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building, Home, Hotel, Store, ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'residential',
    name: 'Residential',
    icon: Home,
    count: 450,
    description: 'Luxury homes, condos, and apartments',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=85',
    projects: [
      {
        title: 'Modern Condominiums',
        count: 280,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
      },
      {
        title: 'Luxury Villas',
        count: 95,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85',
      },
      {
        title: 'HDB Renovations',
        count: 75,
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=85',
      },
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building,
    count: 320,
    description: 'Offices, retail spaces, and showrooms',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
    projects: [
      {
        title: 'Corporate Offices',
        count: 180,
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=85',
      },
      {
        title: 'Retail Stores',
        count: 90,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85',
      },
      {
        title: 'Showrooms',
        count: 50,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85',
      },
    ],
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Hotel,
    count: 180,
    description: 'Hotels, restaurants, and cafes',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=85',
    projects: [
      {
        title: 'Boutique Hotels',
        count: 65,
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&q=85',
      },
      {
        title: 'Restaurants & Cafes',
        count: 95,
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=85',
      },
      {
        title: 'F&B Spaces',
        count: 20,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85',
      },
    ],
  },
  {
    id: 'specialist',
    name: 'Specialist',
    icon: Store,
    count: 150,
    description: 'Custom installations and unique spaces',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=85',
    projects: [
      {
        title: 'Heritage Restorations',
        count: 35,
        image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=85',
      },
      {
        title: 'Custom Installations',
        count: 75,
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=85',
      },
      {
        title: 'Specialty Projects',
        count: 40,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85',
      },
    ],
  },
]

export default function ProjectCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            PROJECT CATEGORIES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Diverse <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            From intimate residences to grand commercial spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isExpanded = expandedCategory === category.id

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`glass-effect rounded-2xl border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all cursor-pointer overflow-hidden ${
                    isExpanded ? 'border-metallic-gold/50' : ''
                  }`}
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/70 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-metallic-gold" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-display font-semibold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-warmGrey-light mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-metallic-gold font-semibold text-lg">
                          {category.count}+ Projects
                        </div>
                        <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                          <span className="text-sm">Explore</span>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-charcoal-dark/40">
                      <div className="text-sm tracking-wider text-metallic-gold mb-4">
                        SUBCATEGORIES
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {category.projects.map((project, idx) => (
                          <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all group/item"
                          >
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                              <p className="text-warmGrey-light text-sm">
                                {project.count} completed projects
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-metallic-gold opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-metallic-gold text-charcoal-dark font-semibold rounded-full hover:bg-metallic-gold/90 transition-all hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}
