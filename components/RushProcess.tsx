import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Step {
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    title: "Mandatory Events",
    description: "Attend our information sessions and social events to learn more about ΙΨΩ.",
    icon: "🎓"
  },
  {
    title: "Application",
    description: "Submit your application showcasing your entrepreneurial spirit and achievements.",
    icon: "📝"
  },
  {
    title: "Interviews",
    description: "Meet with current members for a series of interviews to assess fit and potential.",
    icon: "🤝"
  },
  {
    title: "Bid",
    description: "Receive and accept your bid to join the ΙΨΩ brotherhood.",
    icon: "🎉"
  }
]

const RushProcess: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="rush" className="section-padding bg-primary-light">
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
            <span className="text-accent">Rush</span> Process
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Join our community of builders and innovators through our structured rush process.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-primary rounded-xl p-6 border border-accent/20">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-heading font-bold mb-2 text-accent">
                      {step.title}
                    </h3>
                    <p className="text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default RushProcess 