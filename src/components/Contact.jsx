import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import '../styles/Contact.css'

export default function Contact() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/svmxn',
      color: '#6366f1',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samin-siddique/',
      color: '#3b82f6',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="contact">
      <div className="section-bg" />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="contact-header">
          <h2>Let's Connect</h2>
          <p className="section-subtitle">
            I'm always open to new opportunities and interesting conversations
          </p>
          <div className="accent-line" />
        </motion.div>

        <motion.div variants={itemVariants} className="contact-content">
          <p>
            Whether you have a project in mind, want to discuss tech, or just grab coffee and chat, I'd love to hear from you!
          </p>

          <div className="contact-buttons">
            <motion.a
              href="mailto:saminysiddique@gmail.com"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Me an Email
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="social-links">
          <p className="social-label">Find me on</p>
          <div className="social-icons">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: `0 8px 20px ${social.color}40`,
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ '--color': social.color }}
                >
                  <Icon size={28} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="contact-footer">
          <p>
            Designed & built by <span className="highlight">Samin Yasar Siddique</span> | © 2026
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
