import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Value {
  title: string
  description: string
  icon: string
}

const values: Value[] = [
  {
    title: "Not Just for Founders",
    description: "We welcome all ambitious students who want to learn, grow, and make an impact.",
    icon: "🌟"
  },
  {
    title: "Student Impact",
    description: "Our members have launched successful startups, secured internships at top tech companies, and made meaningful contributions to the entrepreneurial ecosystem.",
    icon: "💫"
  },
  {
    title: "Exclusivity",
    description: "We maintain a selective process to ensure a tight-knit community of driven individuals.",
    icon: "🎯"
  },
  {
    title: "Hands-on Experience",
    description: "Get real-world experience through workshops, mentorship, and startup projects.",
    icon: "🛠️"
  }
]

const Values: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="values" className="section-padding bg-primary">
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
            <span className="text-accent">Values</span> & Community
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Our community is built on shared values and a commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-light rounded-xl p-8 border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-heading font-bold mb-4 text-accent">
                {value.title}
              </h3>
              <p className="text-secondary">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-primary-light rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-heading font-bold text-accent mb-2">50+</div>
            <div className="text-secondary">Active Members</div>
          </div>
          <div className="bg-primary-light rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-heading font-bold text-accent mb-2">20+</div>
            <div className="text-secondary">Startups Launched</div>
          </div>
          <div className="bg-primary-light rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-heading font-bold text-accent mb-2">100%</div>
            <div className="text-secondary">Internship Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values 