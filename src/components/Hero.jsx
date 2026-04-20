import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import '../styles/Hero.css'

export default function Hero({ scrollToSection }) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  const titles = [
    'IT Operations Specialist',
    'Data Engineer',
    'Full Stack Developer',
    'Software Developer',
    'Web Developer',
  ]

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % titles.length
      const fullText = titles[current]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000) // Pause at end
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, loopNum, titles])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="hero">
      <div className="section-bg" />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          Hey there, I'm
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Samin Yasar Siddique
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-subtitle-container">
          <span className="hero-subtitle-static">I'm a </span>
          <span className="hero-subtitle-typed">{currentText}</span>
          <span className="hero-cursor">|</span>
        </motion.div>

        <motion.p variants={itemVariants} className="hero-description">
          Passionate about crafting elegant solutions to complex problems. I blend creativity with code to build impactful digital experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <button className="btn" onClick={() => scrollToSection('about')}>
            Explore My Work
          </button>
          <button className="btn secondary" onClick={() => scrollToSection('contact')}>
            Let's Connect
          </button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
