'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const packages = [
  {
    name: 'Essential',
    tagline: 'Perfect for single items',
    price: 'From $1,500',
    description: 'Ideal for individual door or window replacement',
    features: [
      'Single door/window unit',
      'Standard materials',
      'Professional installation',
      'Quality assurance',
      '5-year warranty',
      'Basic customization',
    ],
    color: 'from-blue-500 to-cyan-600',
    popular: false,
  },
  {
    name: 'Premium',
    tagline: 'Most popular choice',
    price: 'From $8,000',
    description: 'Complete room renovation with custom solutions',
    features: [
      'Multiple units (3-5 items)',
      'Premium materials',
      'Custom design consultation',
      '3D visualization',
      'Project management',
      '10-year warranty',
      'Priority scheduling',
      'Lifetime support',
    ],
    color: 'from-metallic-gold to-wood-DEFAULT',
    popular: true,
  },
  {
    name: 'Luxury',
    tagline: 'Ultimate transformation',
    price: 'From $25,000',
    description: 'Full property interior renovation',
    features: [
      'Whole property coverage',
      'Luxury materials',
      'Dedicated design team',
      'Full 3D walkthrough',
      'Concierge service',
      'All trades coordination',
      '15-year warranty',
      'VIP priority',
      'Annual maintenance',
    ],
    color: 'from-purple-500 to-pink-600',
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-charcoal via-charcoal-dark to-charcoal-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            INVESTMENT GUIDE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-3xl mx-auto">
            Flexible packages designed to match your needs and budget. All prices include installation and warranty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className={`flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r ${pkg.color} shadow-lg`}>
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-white font-semibold text-sm">MOST POPULAR</span>
                  </div>
                </motion.div>
              )}

              <div className={`relative h-full p-8 rounded-2xl glass-effect border-2 ${
                pkg.popular ? 'border-metallic-gold/50' : 'border-warmGrey-dark/20'
              } hover:border-metallic-gold/50 transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'lg:scale-105' : ''
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} mb-6 shadow-lg`}>
                    <div className="text-3xl font-display font-bold text-white">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-3xl font-display font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-metallic-gold text-sm font-medium mb-4">
                    {pkg.tagline}
                  </p>

                  <div className="mb-6">
                    <div className="text-4xl font-display font-bold gradient-text mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-warmGrey-light text-sm">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-warmGrey-light text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? `bg-gradient-to-r ${pkg.color} text-white shadow-lg hover:shadow-xl`
                        : 'glass-effect border border-metallic-gold/30 text-white hover:bg-metallic-gold/10'
                    }`}
                  >
                    Get Started
                  </motion.a>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -bottom-12 -right-12 w-32 h-32 bg-metallic-gold/10 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-warmGrey-light text-lg mb-4">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-metallic-gold">
              <Check className="w-5 h-5" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-metallic-gold">
              <Check className="w-5 h-5" />
              <span className="text-sm">Flexible Payment Plans</span>
            </div>
            <div className="flex items-center gap-2 text-metallic-gold">
              <Check className="w-5 h-5" />
              <span className="text-sm">Price Match Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
