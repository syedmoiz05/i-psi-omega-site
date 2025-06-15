import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Program {
  title: string
  description: string
  icon: string
}

interface Partner {
  name: string
  logo: string
}

const programs: Program[] = [
  {
    title: "Technical Workshops",
    description: "Hands-on sessions for underclass students to learn essential technical skills.",
    icon: "💻"
  },
  {
    title: "Fireside Chats",
    description: "Intimate discussions with industry leaders and successful entrepreneurs.",
    icon: "🔥"
  },
  {
    title: "Startup Partnerships",
    description: "Collaboration opportunities with VC-backed startups and accelerators.",
    icon: "🚀"
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced founders and industry experts.",
    icon: "👥"
  }
]

const partners: Partner[] = [
  { name: "Y Combinator", logo: "/logos/yc.svg" },
  { name: "a16z", logo: "/logos/a16z.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Meta", logo: "/logos/meta.svg" }
]

const Programs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="programs" className="section-padding bg-primary">
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
            <span className="text-accent">Programs</span> & Events
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to help you build,
            learn, and grow in the entrepreneurial ecosystem.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-light rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-colors"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-heading font-bold mb-2 text-accent">
                {program.title}
              </h3>
              <p className="text-secondary">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-white">
            Our Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="relative h-12 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs 