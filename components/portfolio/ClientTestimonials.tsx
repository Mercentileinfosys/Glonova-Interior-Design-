'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const clientTestimonials = [
  {
    id: 1,
    name: 'Rachel Lim',
    role: 'Homeowner',
    location: 'Bukit Timah, Singapore',
    rating: 5,
    text: 'The transformation of our home was incredible. Glonova\'s team delivered exceptional craftsmanship and attention to detail. Every element was perfectly executed.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=85',
    project: 'Residential Renovation',
    duration: '8 weeks',
  },
  {
    id: 2,
    name: 'James Koh',
    role: 'Restaurant Owner',
    location: 'Tanjong Pagar, Singapore',
    rating: 5,
    text: 'Professional, reliable, and delivers on promises. The custom furniture and interior finishes exceeded our expectations. Highly recommend for commercial projects.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=85',
    project: 'Restaurant Fit-Out',
    duration: '6 weeks',
  },
  {
    id: 3,
    name: 'Amanda Ng',
    role: 'Interior Designer',
    location: 'Holland Village, Singapore',
    rating: 5,
    text: 'As a designer, I appreciate their commitment to quality and precision. Glonova consistently brings our visions to life with superior craftsmanship and materials.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=85',
    project: 'Modern Apartment',
    duration: '10 weeks',
  },
  {
    id: 4,
    name: 'Steven Tan',
    role: 'Corporate Manager',
    location: 'Raffles Place, Singapore',
    rating: 5,
    text: 'Outstanding work on our office space. The team was punctual, professional, and maintained excellent communication throughout the entire project timeline.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=85',
    project: 'Corporate Office',
    duration: '12 weeks',
  },
  {
    id: 5,
    name: 'Catherine Lee',
    role: 'Boutique Owner',
    location: 'Dempsey Hill, Singapore',
    rating: 5,
    text: 'The custom joinery and fixtures transformed our retail space into something truly special. Glonova\'s attention to detail and quality is unmatched in Singapore.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=85',
    project: 'Retail Space',
    duration: '5 weeks',
  },
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + clientTestimonials.length) %
        clientTestimonials.length
    )
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal via-charcoal-light to-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Real feedback from our valued clients across Singapore
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[550px] lg:h-[480px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
              >
                <div className="glass-effect rounded-3xl p-8 lg:p-12 border border-warmGrey-dark/20 shadow-2xl backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative flex-shrink-0 mx-auto sm:mx-0"
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-metallic-gold shadow-xl">
                        <Image
                          src={clientTestimonials[currentIndex].image}
                          alt={clientTestimonials[currentIndex].name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-metallic-gold to-metallic-bronze rounded-xl flex items-center justify-center shadow-xl">
                        <Quote className="w-5 h-5 text-charcoal-dark" />
                      </div>
                    </motion.div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-2xl lg:text-3xl font-display font-semibold text-white mb-2">
                        {clientTestimonials[currentIndex].name}
                      </h3>
                      <p className="text-warmGrey-light text-sm mb-3">
                        {clientTestimonials[currentIndex].role} •{' '}
                        {clientTestimonials[currentIndex].location}
                      </p>
                      <div className="flex items-center gap-1 mb-4 justify-center sm:justify-start">
                        {[...Array(clientTestimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-metallic-gold text-metallic-gold"
                            />
                          )
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        <div className="inline-block px-4 py-1.5 bg-metallic-gold/10 border border-metallic-gold/30 rounded-full">
                          <span className="text-metallic-gold text-xs font-medium">
                            {clientTestimonials[currentIndex].project}
                          </span>
                        </div>
                        <div className="inline-block px-4 py-1.5 bg-warmGrey-dark/30 border border-warmGrey-dark/50 rounded-full">
                          <span className="text-warmGrey-light text-xs font-medium">
                            {clientTestimonials[currentIndex].duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-warmGrey-light text-lg lg:text-xl leading-relaxed italic mb-8 text-center sm:text-left">
                    &quot;{clientTestimonials[currentIndex].text}&quot;
                  </blockquote>

                  <div className="flex items-center justify-between pt-6 border-t border-warmGrey-dark/30">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-metallic-gold animate-pulse" />
                      <span className="text-warmGrey-light text-sm">
                        Verified Client
                      </span>
                    </div>
                    <div className="text-warmGrey-dark text-sm font-medium">
                      {currentIndex + 1} of {clientTestimonials.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-14 h-14 rounded-full glass-effect border-2 border-metallic-gold/40 flex items-center justify-center hover:bg-metallic-gold/20 transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-metallic-gold" />
            </motion.button>

            <div className="flex gap-2.5">
              {clientTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-10 bg-metallic-gold shadow-lg shadow-metallic-gold/50'
                      : 'w-2.5 bg-warmGrey-dark hover:bg-warmGrey-light'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-14 h-14 rounded-full glass-effect border-2 border-metallic-gold/40 flex items-center justify-center hover:bg-metallic-gold/20 transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-metallic-gold" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
