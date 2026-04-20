import { motion } from 'framer-motion'
import '../styles/Navigation.css'

export default function Navigation({ activeSection, scrollToSection }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          Samin Yasar Siddique
        </motion.div>
        <div className="nav-menu">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="nav-underline"
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
