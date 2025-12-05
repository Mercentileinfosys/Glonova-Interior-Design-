'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=90"
          alt="Glonova Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/90 via-charcoal/80 to-charcoal-dark/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 lg:px-12 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 glass-effect border border-metallic-gold/30 rounded-full text-metallic-gold text-sm tracking-[0.3em] font-medium">
            COMPREHENSIVE SOLUTIONS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light mb-8 leading-tight"
        >
          Transform Your Space
          <br />
          <span className="gradient-text">With Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-warmGrey-light text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-12"
        >
          From concept to completion, we deliver world-class interior manufacturing
          and renovation solutions backed by 13+ years of excellence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold tracking-wider hover:shadow-2xl hover:shadow-metallic-gold/50 transition-all duration-300"
          >
            EXPLORE SERVICES
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 glass-effect border border-metallic-gold/30 text-white font-semibold tracking-wider hover:bg-metallic-gold/10 transition-all duration-300"
          >
            GET A QUOTE
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-warmGrey-light text-sm tracking-wider">Scroll to explore</span>
        <ArrowDown className="w-6 h-6 text-metallic-gold" />
      </motion.div>
    </section>
  )
}
