'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function CompanyStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-charcoal-dark via-charcoal to-charcoal-light overflow-hidden"
    >
      <motion.div
        style={{ x: x1 }}
        className="absolute top-20 -left-20 w-96 h-96 bg-metallic-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: x2 }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-metallic-silver/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
              OUR STORY
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
              Building Dreams
              <br />
              <span className="gradient-text">One Space at a Time</span>
            </h2>
            <div className="space-y-6 text-warmGrey-light text-lg leading-relaxed">
              <p>
                Founded in 2010, Glonova Pte Ltd emerged from a simple vision: to revolutionize 
                Singapore&apos;s interior manufacturing industry with uncompromising quality and innovative design.
              </p>
              <p>
                What started as a small workshop in Sembawang has grown into Singapore&apos;s most 
                trusted name in premium doors, windows, and complete interior solutions. Our journey 
                has been marked by relentless pursuit of perfection and unwavering commitment to our clients.
              </p>
              <p>
                Today, we combine traditional craftsmanship with cutting-edge technology, employing 
                state-of-the-art CNC machinery and sustainable materials to create spaces that inspire 
                and endure.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden smooth-shadow">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=90"
                alt="Glonova Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass-effect rounded-2xl p-8 border border-metallic-gold/30 max-w-xs"
            >
              <div className="text-4xl font-display font-bold gradient-text mb-2">
                ISO 9001:2015
              </div>
              <p className="text-warmGrey-light text-sm">
                Certified for Quality Management Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden smooth-shadow"
              >
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=85"
                  alt="Manufacturing Process"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden smooth-shadow mt-12"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d4?w=400&q=85"
                  alt="Quality Control"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
              OUR APPROACH
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light mb-6">
              Precision Meets
              <br />
              <span className="gradient-text">Passion</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Advanced Manufacturing',
                  desc: 'State-of-the-art CNC machinery ensures precision down to 0.1mm tolerance',
                },
                {
                  title: 'Sustainable Materials',
                  desc: 'FSC-certified wood and eco-friendly finishes for responsible luxury',
                },
                {
                  title: 'Expert Craftsmen',
                  desc: 'Team of 50+ skilled artisans with decades of combined experience',
                },
                {
                  title: 'Quality Assurance',
                  desc: 'Every product undergoes rigorous 12-point inspection process',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-metallic-gold/10 flex items-center justify-center text-metallic-gold font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-warmGrey-light text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
