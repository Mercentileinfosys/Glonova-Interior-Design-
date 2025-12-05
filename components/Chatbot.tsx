'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive interior solutions including custom doors, windows, sliding systems, full interior renovations, custom joinery, and professional installation services.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Most projects are completed within 4-6 weeks from design approval. Complex renovations may take 8-12 weeks. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you provide warranty?',
    answer: 'Yes! We offer a comprehensive 10-year warranty on all our products and installations, backed by lifetime support.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Singapore, including residential, commercial, and industrial properties. Our showroom is located at 21 Sembawang Road, Singapore 779079.',
  },
  {
    question: 'Can I get a quote?',
    answer: 'Absolutely! You can request a quote through our contact form, call us at +65 8115 2385, or visit our showroom for a free consultation.',
  },
  {
    question: 'Do you offer custom designs?',
    answer: 'Yes, we specialize in custom designs tailored to your exact specifications. Our design team works closely with you from concept to completion.',
  },
  {
    question: 'What materials do you use?',
    answer: 'We use premium, sustainably sourced materials including FSC-certified wood, high-grade aluminum, and eco-friendly finishes. All materials meet international quality standards.',
  },
  {
    question: 'Do you handle permits and paperwork?',
    answer: 'Yes, we handle all necessary permits, approvals, and documentation required for your project, ensuring full compliance with local regulations.',
  },
]

const quickActions = [
  'Get a Quote',
  'View Services',
  'Project Timeline',
  'Warranty Info',
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: 'Hello! Welcome to Glonova. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    const matchedFaq = faqs.find(faq =>
      lowerQuery.includes(faq.question.toLowerCase()) ||
      faq.question.toLowerCase().includes(lowerQuery) ||
      lowerQuery.split(' ').some(word => faq.question.toLowerCase().includes(word))
    )

    if (matchedFaq) {
      return matchedFaq.answer
    }

    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('quote')) {
      return 'Pricing varies based on project scope and materials. I recommend requesting a free consultation where we can provide a detailed quote tailored to your needs. You can reach us at +65 8115 2385 or visit our contact page.'
    }

    if (lowerQuery.includes('location') || lowerQuery.includes('address') || lowerQuery.includes('showroom')) {
      return 'Our showroom is located at 21 Sembawang Road, Singapore 779079. We\'re open Monday-Friday 9AM-6PM and Saturday 9AM-1PM. Feel free to visit us for a consultation!'
    }

    if (lowerQuery.includes('contact') || lowerQuery.includes('phone') || lowerQuery.includes('email')) {
      return 'You can reach us at:\n📞 Phone: +65 8115 2385\n📧 Email: Enquiries@glonovas.com\n📍 Address: 21 Sembawang Road, Singapore 779079'
    }

    return 'Thank you for your question! For detailed information, please contact our team at +65 8115 2385 or email Enquiries@glonovas.com. We\'re here to help!'
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const answer = findAnswer(inputValue)
      const botMessage: Message = {
        id: messages.length + 1,
        text: answer,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickAction = (action: string) => {
    const responses: { [key: string]: string } = {
      'Get a Quote': 'To get a personalized quote, please visit our contact page or call us at +65 8115 2385. Our team will schedule a free consultation to discuss your project.',
      'View Services': 'We offer: \n• Premium Doors & Windows\n• Custom Joinery\n• Full Interior Renovation\n• Sliding Systems\n• Professional Installation\n\nVisit our Services page for details!',
      'Project Timeline': 'Typical timelines:\n• Standard projects: 4-6 weeks\n• Full renovations: 8-12 weeks\n• Custom orders: 6-8 weeks\n\nWe guarantee on-time delivery!',
      'Warranty Info': 'We provide a comprehensive 10-year warranty on all products and installations, plus lifetime support. Quality is our guarantee!',
    }

    const userMessage: Message = {
      id: messages.length,
      text: action,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 1,
        text: responses[action],
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 left-8 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-metallic-gold to-wood-DEFAULT text-charcoal-dark shadow-2xl shadow-metallic-gold/50 flex items-center justify-center group"
          >
            <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full border-4 border-metallic-gold"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-8 z-50 w-96 h-[600px] rounded-2xl glass-effect border border-metallic-gold/30 shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-to-r from-metallic-gold to-wood-DEFAULT p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-charcoal-dark flex items-center justify-center">
                  <Bot className="w-6 h-6 text-metallic-gold" />
                </div>
                <div>
                  <h3 className="text-charcoal-dark font-semibold">Glonova Assistant</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-charcoal-dark/70 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal-dark hover:bg-charcoal-dark/10 p-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-charcoal-dark/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'bot'
                        ? 'bg-metallic-gold/20'
                        : 'bg-warmGrey-dark/50'
                      }`}
                  >
                    {message.sender === 'bot' ? (
                      <Bot className="w-5 h-5 text-metallic-gold" />
                    ) : (
                      <User className="w-5 h-5 text-warmGrey-light" />
                    )}
                  </div>
                  <div
                    className={`max-w-[70%] p-3 rounded-2xl ${message.sender === 'bot'
                        ? 'bg-warmGrey-dark/20 text-warmGrey-light'
                        : 'bg-metallic-gold/20 text-white'
                      }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-metallic-gold/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-metallic-gold" />
                  </div>
                  <div className="bg-warmGrey-dark/20 p-3 rounded-2xl">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 rounded-full bg-metallic-gold"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-metallic-gold"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 rounded-full bg-metallic-gold"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="p-4 border-t border-warmGrey-dark/20 bg-charcoal-dark/50">
                <p className="text-xs text-warmGrey-light mb-3">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleQuickAction(action)}
                      className="px-3 py-2 text-xs bg-metallic-gold/10 border border-metallic-gold/30 rounded-lg text-metallic-gold hover:bg-metallic-gold/20 transition-colors"
                    >
                      {action}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-warmGrey-dark/20 bg-charcoal-dark/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-warmGrey-dark/20 border border-warmGrey-dark/30 rounded-lg text-white placeholder-warmGrey-dark focus:outline-none focus:border-metallic-gold transition-colors text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="p-3 bg-gradient-to-r from-metallic-gold to-wood-DEFAULT rounded-lg text-charcoal-dark disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
