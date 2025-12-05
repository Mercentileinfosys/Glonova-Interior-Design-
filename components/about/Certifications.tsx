'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle, Shield, Star } from 'lucide-react'

const certifications = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management',
    description: 'International standard ensuring consistent quality',
    icon: Award,
  },
  {
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management',
    description: 'Commitment to sustainable practices',
    icon: Shield,
  },
  {
    title: 'BCA Green Mark Gold',
    subtitle: 'Sustainability Excellence',
    description: 'Recognized green building practices',
    icon: Star,
  },
  {
    title: 'Singapore Quality Award',
    subtitle: 'Business Excellence',
    description: 'Top-tier operational performance',
    icon: CheckCircle,
  },
]

export default function Certifications() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-dark to-charcoal-light">
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
            CERTIFICATIONS & AWARDS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Recognized <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Industry certifications and awards validating our commitment to quality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl glass-effect border border-warmGrey-dark/20 hover:border-metallic-gold/50 transition-all duration-300 text-center">
                <motion.div
                  animate={{
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-metallic-gold to-metallic-silver mb-6 shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <cert.icon className="w-10 h-10 text-charcoal-dark" />
                </motion.div>

                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <div className="text-metallic-gold text-sm font-medium mb-4">
                  {cert.subtitle}
                </div>
                <p className="text-warmGrey-light text-sm">
                  {cert.description}
                </p>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-metallic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
