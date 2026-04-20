import { motion } from 'framer-motion'
import '../styles/About.css'

export default function About() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="about">
      <div className="section-bg" />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="about-header">
          <h2>About Me</h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div variants={itemVariants} className="about-content">
          <p>
            I'm a Computer Science student at Toronto Metropolitan University (formerly Ryerson University) with a passion for building innovative solutions using cutting-edge technologies. With a strong foundation in full-stack development, data engineering, and infrastructure operations, I'm excited to tackle challenging projects and contribute to impactful initiatives.
          </p>

          <p>
            My experience spans from developing full-stack web applications to managing enterprise IT infrastructure, with a focus on leveraging modern technologies like React, Python, and cloud platforms. I'm actively seeking opportunities to apply my skills in real-world scenarios while continuing to expand my technical expertise.
          </p>

          <p>
            Beyond academics, I'm passionate about teaching and mentoring, helping others develop their programming and mathematical skills. I believe in the power of technology to solve complex problems and create meaningful impact.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="about-highlights">
          <div className="highlight-item">
            <div className="highlight-number">3.97</div>
            <div className="highlight-label">CGPA</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-number">20+</div>
            <div className="highlight-label">Languages & Technologies</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-number">5+</div>
            <div className="highlight-label">Years Experience</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
