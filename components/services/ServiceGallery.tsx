'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const galleryItems = [
  {
    title: 'Modern Entrance Doors',
    category: 'Doors',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85',
  },
  {
    title: 'Panoramic Windows',
    category: 'Windows',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85',
  },
  {
    title: 'Sliding Glass Systems',
    category: 'Systems',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
  },
  {
    title: 'Custom Kitchen Cabinets',
    category: 'Joinery',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=85',
  },
  {
    title: 'Luxury Living Room',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85',
  },
  {
    title: 'Master Bedroom Suite',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=85',
  },
]

export default function ServiceGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Doors', 'Windows', 'Systems', 'Joinery', 'Renovation']

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="relative py-32 bg-gradient-to-b from-charcoal-light to-charcoal-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-3xl mx-auto">
            Explore our portfolio of exceptional projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark shadow-lg'
                  : 'glass-effect text-warmGrey-light hover:text-white border border-warmGrey-dark/20 hover:border-metallic-gold/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden smooth-shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-metallic-gold/20 border border-metallic-gold/30 rounded-full text-metallic-gold text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white">
                    {item.title}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-metallic-gold/20 backdrop-blur-sm"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-3 bg-white text-charcoal-dark font-semibold rounded-lg shadow-lg"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
