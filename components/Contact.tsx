import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaSlack, FaDiscord } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="section-padding bg-primary-light">
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
            <span className="text-accent">Contact</span> & Join
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Have questions? Want to learn more? Reach out to us!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-xl p-8 border border-accent/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-primary-light border border-accent/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-primary-light border border-accent/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-primary-light border border-accent/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary rounded-xl p-8 border border-accent/20"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-accent">
              Connect With Us
            </h3>
            <div className="space-y-6">
              <a
                href="https://github.com/iota-psi-omega"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-secondary hover:text-accent transition-colors"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub Repository</span>
              </a>
              <a
                href="https://join.slack.com/t/iota-psi-omega"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-secondary hover:text-accent transition-colors"
              >
                <FaSlack className="text-2xl" />
                <span>Join our Slack</span>
              </a>
              <a
                href="https://discord.gg/iota-psi-omega"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-secondary hover:text-accent transition-colors"
              >
                <FaDiscord className="text-2xl" />
                <span>Join our Discord</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 