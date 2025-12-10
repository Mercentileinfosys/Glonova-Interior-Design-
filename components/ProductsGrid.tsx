'use client'

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Product {
  id: number
  title: string
  category: string
  description: string
  image: string
  specs: string[]
  detailedDescription: string
  features: string[]
  dimensions?: string
  material?: string
}

const products: Product[] = [
  {
    id: 1,
    title: '3-in-1 Combo Package',
    category: 'Special Offer',
    description: 'Complete door solution package with premium features',
    image: '/products/3in1-combo.jpg',
    specs: ['Complete package', 'Premium quality', 'Best value'],
    detailedDescription: 'Our exclusive 3-in-1 combo package includes everything you need for a complete door installation. This premium package combines quality, style, and functionality at an unbeatable value.',
    features: [
      'Complete installation package',
      'Premium quality materials',
      'Professional installation support',
      'Warranty included',
      'Customizable options available'
    ],
    material: 'Premium composite materials',
  },
  {
    id: 2,
    title: 'Aluminium Slim Sliding Door',
    category: 'Sliding Doors',
    description: 'Sleek aluminium sliding door with modern aesthetics',
    image: '/products/aluminium-slim-sliding-door.jpg',
    specs: ['Slim profile', 'Smooth operation', 'Space-saving'],
    detailedDescription: 'Experience the perfect blend of style and functionality with our Aluminium Slim Sliding Door. Designed for modern living spaces, this door offers a sleek profile while maximizing space efficiency.',
    features: [
      'Ultra-slim aluminium frame',
      'Smooth gliding mechanism',
      'Space-efficient design',
      'Durable powder-coated finish',
      'Easy maintenance',
      'Multiple color options'
    ],
    material: 'High-grade aluminium alloy',
    dimensions: 'Customizable to fit your space',
  },
  {
    id: 3,
    title: 'Aluminium Bi-Fold Toilet Door',
    category: 'Bi-Fold Doors',
    description: 'Space-saving bi-fold door perfect for bathrooms',
    image: '/products/aluminium-bifold-toilet-door.jpg',
    specs: ['Bi-fold design', 'Compact', 'Water-resistant'],
    detailedDescription: 'Maximize your bathroom space with our Aluminium Bi-Fold Toilet Door. This innovative design combines functionality with style, perfect for compact bathrooms and modern interiors.',
    features: [
      'Space-saving bi-fold mechanism',
      'Water-resistant materials',
      'Corrosion-resistant finish',
      'Smooth folding action',
      'Privacy glass options',
      'Easy to clean'
    ],
    material: 'Marine-grade aluminium',
    dimensions: 'Standard and custom sizes available',
  },
  {
    id: 4,
    title: 'Aluminum Slim Sliding Door',
    category: 'Sliding Doors',
    description: 'Contemporary aluminum sliding door system',
    image: '/products/aluminum-slim-sliding-door.jpg',
    specs: ['Modern design', 'Lightweight', 'Durable'],
    detailedDescription: 'Our Aluminum Slim Sliding Door offers a contemporary solution for modern homes. With its lightweight yet durable construction, it provides effortless operation and long-lasting performance.',
    features: [
      'Contemporary slim design',
      'Lightweight construction',
      'High durability',
      'Noise reduction technology',
      'Energy-efficient sealing',
      'Low maintenance'
    ],
    material: 'Aircraft-grade aluminum',
    dimensions: 'Fully customizable',
  },
  {
    id: 5,
    title: 'Bi-Fold Toilet Door',
    category: 'Bi-Fold Doors',
    description: 'Premium bi-fold door for bathroom spaces',
    image: '/products/bifold-toilet-door.jpg',
    specs: ['Premium finish', 'Space-efficient', 'Modern style'],
    detailedDescription: 'Transform your bathroom with our Premium Bi-Fold Toilet Door. Designed for optimal space utilization without compromising on style or quality.',
    features: [
      'Premium quality construction',
      'Space-maximizing design',
      'Moisture-resistant coating',
      'Smooth operation',
      'Contemporary aesthetics',
      'Multiple finish options'
    ],
    material: 'Premium composite with aluminum frame',
    dimensions: 'Standard and custom sizes',
  },
  {
    id: 6,
    title: 'Digital Lock System',
    category: 'Smart Locks',
    description: 'Advanced digital lock with smart features',
    image: '/products/digital-lock.jpg',
    specs: ['Keyless entry', 'Smart features', 'High security'],
    detailedDescription: 'Upgrade your home security with our state-of-the-art Digital Lock System. Combining advanced technology with user-friendly features for ultimate peace of mind.',
    features: [
      'Keyless entry system',
      'Multiple access methods (PIN, card, fingerprint)',
      'Auto-lock function',
      'Low battery alert',
      'Tamper alarm',
      'Easy installation',
      'Smartphone compatible (select models)'
    ],
    material: 'Stainless steel with anti-tamper technology',
  },
  {
    id: 7,
    title: 'Magic Bi-Fold Door',
    category: 'Bi-Fold Doors',
    description: 'Innovative bi-fold door with premium features',
    image: '/products/magic-bifold.jpg',
    specs: ['Innovative design', 'Premium quality', 'Versatile'],
    detailedDescription: 'Experience the magic of seamless space transformation with our Magic Bi-Fold Door. This innovative design offers unparalleled versatility and premium quality for discerning homeowners.',
    features: [
      'Innovative folding mechanism',
      'Premium materials',
      'Smooth and quiet operation',
      'Versatile applications',
      'Modern aesthetics',
      'Long-lasting durability',
      'Customizable configurations'
    ],
    material: 'Premium aluminum with reinforced hinges',
    dimensions: 'Fully customizable to your needs',
  },
]

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${product.title}. Can you provide more details and pricing information?`;
    const whatsappUrl = `https://wa.me/6581152385?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-light rounded-3xl shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        >
          <motion.span
            className="text-2xl"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            ×
          </motion.span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative aspect-square rounded-2xl overflow-hidden smooth-shadow"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 px-4 py-2 glass-effect rounded-full">
              <span className="text-xs text-metallic-gold font-medium tracking-wider uppercase">
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              {product.title}
            </h2>

            <p className="text-warmGrey-light text-base mb-6 leading-relaxed">
              {product.detailedDescription}
            </p>

            {/* Specifications */}
            <div className="mb-6 space-y-3">
              <h3 className="text-lg font-semibold text-metallic-gold mb-3">Key Features</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold mt-2 flex-shrink-0" />
                    <span className="text-warmGrey-light text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            {(product.material || product.dimensions) && (
              <div className="mb-6 space-y-3 p-4 glass-effect rounded-xl">
                {product.material && (
                  <div>
                    <span className="text-metallic-gold text-sm font-medium">Material: </span>
                    <span className="text-warmGrey-light text-sm">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <span className="text-metallic-gold text-sm font-medium">Dimensions: </span>
                    <span className="text-warmGrey-light text-sm">{product.dimensions}</span>
                  </div>
                )}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="mt-auto space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Buy Now via WhatsApp
              </motion.button>

              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Continue Browsing
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group relative"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl smooth-shadow cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-light">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          </div>

          <motion.div
            style={{
              transform: 'translateZ(50px)',
            }}
            className="absolute inset-0 p-6 flex flex-col justify-end"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
              className="mb-4 space-y-2"
            >
              {product.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 text-warmGrey-light text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-metallic-gold" />
                  <span>{spec}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="space-y-2">
              <div className="text-xs text-metallic-gold font-medium tracking-wider uppercase">
                {product.category}
              </div>
              <h3 className="text-2xl font-display font-semibold text-white">
                {product.title}
              </h3>
              <p className="text-warmGrey-light text-sm line-clamp-2">
                {product.description}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-metallic-gold/30 text-white text-sm font-medium rounded-full hover:bg-metallic-gold/20 transition-colors duration-300">
                View Details
              </button>
            </motion.div>
          </motion.div>

          <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-effect flex items-center justify-center">
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-metallic-gold"
            >
              ↗
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <ProductModal product={product} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default function ProductsGrid() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm tracking-[0.3em] text-metallic-gold font-medium mb-4">
            OUR PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
            Premium <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-warmGrey-light text-lg max-w-2xl mx-auto">
            Expertly crafted doors, windows, and systems for modern interiors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
