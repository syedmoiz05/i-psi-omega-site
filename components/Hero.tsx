import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            <span className="text-white">Where </span>
            <span className="text-accent">Builders</span>
            <span className="text-white"> Begin</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto">
            A co-ed entrepreneurial business fraternity and incubator for ambitious students
            driven to learn, launch, and lead.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Join Rush
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  )
}

export default Hero 