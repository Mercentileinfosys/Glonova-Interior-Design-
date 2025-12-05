'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=90"
          alt="Glonova Manufacturing Facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-charcoal/70 to-charcoal-dark" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 lg:px-12 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 glass-effect border border-metallic-gold/30 rounded-full text-metallic-gold text-sm tracking-[0.3em] font-medium">
            ABOUT GLONOVA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light mb-8 leading-tight"
        >
          Crafting Excellence
          <br />
          <span className="gradient-text">Since 2010</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-warmGrey-light text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Singapore&apos;s premier interior manufacturing and renovation company, 
          delivering world-class solutions with precision engineering and timeless design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-5xl font-display font-bold gradient-text mb-2">13+</div>
            <div className="text-warmGrey-light text-sm tracking-wider">Years Experience</div>
          </motion.div>
          <div className="w-px h-16 bg-metallic-gold/30" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-5xl font-display font-bold gradient-text mb-2">1000+</div>
            <div className="text-warmGrey-light text-sm tracking-wider">Projects Completed</div>
          </motion.div>
          <div className="w-px h-16 bg-metallic-gold/30" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="text-5xl font-display font-bold gradient-text mb-2">98%</div>
            <div className="text-warmGrey-light text-sm tracking-wider">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-metallic-gold to-transparent"
      />
    </section>
  )
}
