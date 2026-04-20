import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import '../styles/Resume.css'

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="resume">
      <div className="section-bg" />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="resume-header">
          <h2>My Resume</h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div variants={itemVariants} className="resume-controls">
          <motion.a
            href="/Samin_Siddique_Resume.pdf"
            download="Samin_Siddique_Resume.pdf"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="resume-viewer">
          <embed
            src="/Samin_Siddique_Resume.pdf#zoom=150&view=FitH"
            type="application/pdf"
            className="resume-embed"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
