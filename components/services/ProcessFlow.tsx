'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Hammer, CheckCircle2, Calendar, Award } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Free consultation to understand your vision, requirements, and budget. We visit your site and provide expert recommendations.',
    duration: '1-2 days',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Lightbulb,
    title: 'Design & Planning',
    description: '3D visualization, detailed drawings, and material selection. Refine the design until it perfectly matches your expectations.',
    duration: '1-2 weeks',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Calendar,
    title: 'Approval & Scheduling',
    description: 'Final design approval, permits, and project timeline confirmation. Lock in materials and coordinate installation dates.',
    duration: '3-5 days',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Hammer,
    title: 'Manufacturing',
    description: 'Precision manufacturing in our ISO-certified facility using premium materials and advanced CNC technology.',
    duration: '3-5 weeks',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: CheckCircle2,
    title: 'Installation',
    description: 'Professional installation by certified technicians. Minimal disruption with comprehensive site cleanup included.',
    duration: '1-2 weeks',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: Award,
    title: 'Handover & Warranty',
    description: 'Final inspection, walkthrough, and warranty documentation. Enjoy your transformed space with 10-year coverage.',
    duration: 'Lifetime support',
    color: 'from-indigo-500 to-violet-600',
  },
]

export default function ProcessFlow() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-charcoal-light via-charcoal-dark to-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-3xl mx-auto">
            Six simple steps from concept to completion, ensuring excellence at every stage
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-metallic-gold via-metallic-silver to-metallic-gold hidden lg:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full lg:w-5/12 ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}
                  >
                    <div className="glass-effect rounded-2xl p-8 border border-warmGrey-dark/20 hover:border-metallic-gold/30 transition-all duration-300">
                      <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 1 ? '' : 'lg:flex-row-reverse'}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-5xl font-display font-bold text-warmGrey-dark/30">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-display font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-warmGrey-light leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${step.color} bg-opacity-20`}>
                        <Calendar className="w-4 h-4 text-metallic-gold" />
                        <span className="text-sm text-metallic-gold font-medium">{step.duration}</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="hidden lg:block w-2/12 flex-shrink-0"
                  >
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className="absolute w-24 h-24 rounded-full border-2 border-dashed border-metallic-gold/30"
                      />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-metallic-gold to-metallic-silver flex items-center justify-center shadow-2xl shadow-metallic-gold/30">
                        <step.icon className="w-8 h-8 text-charcoal-dark" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="w-full lg:w-5/12" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect inline-block px-12 py-8 rounded-2xl border border-metallic-gold/30">
            <h3 className="text-3xl font-display font-semibold text-white mb-4">
              Average Total Timeline: <span className="gradient-text">4-8 Weeks</span>
            </h3>
            <p className="text-warmGrey-light text-lg mb-6">
              From consultation to completion, we guarantee on-time delivery
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
