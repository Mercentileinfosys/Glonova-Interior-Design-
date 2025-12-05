'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Zap, Heart, TrendingUp, Users } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Winner of multiple awards including BCA Green Mark Gold and Singapore Quality Award',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: Shield,
    title: '10-Year Warranty',
    description: 'Comprehensive warranty coverage on all products with lifetime support',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Average project completion in 4-6 weeks with on-time delivery guarantee',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Dedicated project manager for each client ensuring personalized attention',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Leader',
    description: 'Continuously investing in R&D and adopting latest manufacturing technologies',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Singapore&apos;s most experienced team with 300+ years combined expertise',
    color: 'from-indigo-500 to-violet-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.03),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            WHY GLONOVA
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Your Trusted <span className="gradient-text">Partner</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Six compelling reasons to choose Glonova for your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl glass-effect border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} mb-6 shadow-lg`}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-metallic-gold transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-warmGrey-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-12 -right-12 w-32 h-32 bg-metallic-gold/10 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
