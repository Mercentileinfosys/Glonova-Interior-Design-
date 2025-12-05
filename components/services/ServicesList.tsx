'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DoorOpen, Frame, Home, Wrench, Ruler, Sparkles } from 'lucide-react'

const services = [
  {
    icon: DoorOpen,
    title: 'Premium Doors',
    description: 'Custom-crafted entrance, interior, and security doors designed for durability and elegance',
    features: [
      'Solid wood & engineered options',
      'Smart lock integration',
      'Custom sizes & finishes',
      'Fire-rated options available',
      'Soundproofing technology',
      'Weatherproof sealing',
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=85',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Frame,
    title: 'Luxury Windows',
    description: 'Energy-efficient windows combining aesthetic appeal with superior performance',
    features: [
      'Double/triple glazing',
      'UV protection coating',
      'Noise reduction up to 40dB',
      'Aluminum & uPVC frames',
      'Custom designs & shapes',
      'Easy maintenance systems',
    ],
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=600&q=85',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Sparkles,
    title: 'Sliding Systems',
    description: 'Space-saving sliding door and partition systems for modern living',
    features: [
      'Smooth gliding mechanisms',
      'Soft-close technology',
      'Track systems & frameless options',
      'Glass, wood & composite materials',
      'Pocket door solutions',
      'Bi-fold configurations',
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Ruler,
    title: 'Custom Joinery',
    description: 'Bespoke woodwork and carpentry solutions tailored to your exact specifications',
    features: [
      'Built-in wardrobes',
      'Kitchen cabinets',
      'Entertainment units',
      'Study tables & shelving',
      'Wine cellars',
      'Custom furniture pieces',
    ],
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=85',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Home,
    title: 'Full Renovation',
    description: 'Complete interior transformation from design to installation',
    features: [
      'Concept & 3D design',
      'Space planning',
      'Project management',
      'All trades coordination',
      'Quality assurance',
      'Post-completion support',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85',
    gradient: 'from-red-500 to-rose-600',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Expert installation services ensuring perfect fit and finish',
    features: [
      'Certified technicians',
      'Precision measurements',
      'Minimal disruption',
      'Site cleanup included',
      'Final inspection & handover',
      '10-year warranty',
    ],
    image: 'https://images.unsplash.com/photo-1581092918484-8313e1f7e8d4?w=600&q=85',
    gradient: 'from-indigo-500 to-violet-600',
  },
]

export default function ServicesList() {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            WHAT WE OFFER
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-3xl mx-auto">
            Comprehensive interior solutions backed by expertise, quality craftsmanship, and cutting-edge technology
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden smooth-shadow group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={`absolute -bottom-6 ${
                    index % 2 === 1 ? '-left-6' : '-right-6'
                  } w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}
                >
                  <service.icon className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
                    SERVICE {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display font-light mb-6">
                    {service.title}
                  </h3>
                  <p className="text-warmGrey-light text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIndex * 0.05 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 rounded-lg glass-effect border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all duration-300 group"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.gradient}`} />
                        <span className="text-warmGrey-light text-sm group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-8"
                  >
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-block px-8 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                    >
                      Request Quote
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
