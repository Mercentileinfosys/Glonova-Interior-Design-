'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-4">
        {[
          'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85',
          'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=85',
          'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=85',
          'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=85',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=85',
          'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=85',
          'https://images.unsplash.com/photo-1595428773637-bd6d4065c5b5?w=600&q=85',
        ].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Project ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal-dark/60" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/95 via-charcoal/90 to-charcoal-dark/95" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center px-6 lg:px-12 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 glass-effect border border-metallic-gold/30 rounded-full text-metallic-gold text-sm tracking-[0.3em] font-medium">
            OUR PORTFOLIO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light mb-8 leading-tight"
        >
          1000+ Projects
          <br />
          <span className="gradient-text">One Standard</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-warmGrey-light text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Excellence in every detail. Explore our collection of transformative projects
          across residential, commercial, and hospitality spaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <div className="text-center">
            <div className="text-5xl font-display font-bold gradient-text mb-2">98%</div>
            <div className="text-warmGrey-light text-sm tracking-wider">Client Satisfaction</div>
          </div>
          <div className="w-px h-16 bg-metallic-gold/30" />
          <div className="text-center">
            <div className="text-5xl font-display font-bold gradient-text mb-2">$50M+</div>
            <div className="text-warmGrey-light text-sm tracking-wider">Projects Delivered</div>
          </div>
          <div className="w-px h-16 bg-metallic-gold/30" />
          <div className="text-center">
            <div className="text-5xl font-display font-bold gradient-text mb-2">13+</div>
            <div className="text-warmGrey-light text-sm tracking-wider">Years Excellence</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
