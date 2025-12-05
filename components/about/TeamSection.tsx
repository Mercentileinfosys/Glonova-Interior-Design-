'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'David Lim',
    role: 'Founder & CEO',
    bio: '20+ years in interior manufacturing. Visionary leader driving innovation and excellence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85',
    linkedin: '#',
    email: 'david@glonova.com.sg',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    bio: 'Award-winning designer with international experience. Transforming visions into reality.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85',
    linkedin: '#',
    email: 'sarah@glonova.com.sg',
  },
  {
    name: 'Michael Tan',
    role: 'Operations Director',
    bio: 'Logistics expert ensuring seamless project execution and on-time delivery.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85',
    linkedin: '#',
    email: 'michael@glonova.com.sg',
  },
  {
    name: 'Jennifer Wong',
    role: 'Quality Assurance Manager',
    bio: 'Meticulous quality control specialist maintaining our rigorous standards.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=85',
    linkedin: '#',
    email: 'jennifer@glonova.com.sg',
  },
]

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            MEET THE TEAM
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Leadership <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            The experts behind Singapore&apos;s finest interior solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl smooth-shadow">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="text-metallic-gold text-sm font-medium tracking-wider mb-3">
                      {member.role}
                    </div>
                    <p className="text-warmGrey-light text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center hover:bg-metallic-gold/20 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-metallic-gold" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full glass-effect border border-metallic-gold/30 flex items-center justify-center hover:bg-metallic-gold/20 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5 text-metallic-gold" />
                    </motion.a>
                  </motion.div>
                </motion.div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 rounded-full bg-metallic-gold animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
