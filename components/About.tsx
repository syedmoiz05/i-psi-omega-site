import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding bg-primary-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            <span className="text-accent">About</span> Us
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            We are a community of ambitious students driven to learn, launch, and lead.
            Our mission is to foster the next generation of builders and innovators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What We Are */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-xl p-8 border border-accent/20"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
              What We Are
            </h3>
            <ul className="space-y-4 text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                A co-ed entrepreneurial business fraternity
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                An incubator for student startups
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                A network of builders and innovators
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                A community of lifelong learners
              </li>
            </ul>
          </motion.div>

          {/* What We Value */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary rounded-xl p-8 border border-accent/20"
          >
            <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
              What We Value
            </h3>
            <ul className="space-y-4 text-secondary">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Innovation and creativity
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Collaboration and community
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Continuous learning and growth
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Impact and leadership
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 