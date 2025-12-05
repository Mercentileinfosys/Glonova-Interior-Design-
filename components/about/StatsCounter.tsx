'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 13, suffix: '+', label: 'Years of Excellence', icon: '🏆' },
  { value: 1200, suffix: '+', label: 'Projects Completed', icon: '🏗️' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
  { value: 50, suffix: '+', label: 'Expert Team Members', icon: '👥' },
  { value: 15000, suffix: '+', label: 'Products Manufactured', icon: '🔧' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: '💬' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          Math.floor(latest)
        )
      }
    })
  }, [springValue])

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-light to-charcoal-dark">
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
            BY THE NUMBERS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Singapore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl glass-effect border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-metallic-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-6xl mb-6"
                  >
                    {stat.icon}
                  </motion.div>

                  <div className="text-5xl lg:text-6xl font-display font-bold gradient-text mb-4">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-warmGrey-light font-medium">
                    {stat.label}
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-12 -right-12 w-32 h-32 bg-metallic-gold/10 rounded-full blur-2xl group-hover:bg-metallic-gold/20 transition-all duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
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
