import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      title: "Mentor's Academy Attendance Tracker",
      bullets: [
        'Developed an attendance management platform using React.js, HTML, CSS, and MySQL to efficiently track student participation and attendance records.',
        'Designed user-friendly interfaces for managing student profiles and class schedules, ensuring real-time data integration and seamless database interaction.',
        'Enhanced the platform\'s functionality by incorporating features for task management, payment tracking, and student progress monitoring.'
      ],
      technologies: ['HTML/CSS', 'React.js', 'MySQL'],
      github: 'https://github.com',
      link: '#',
      featured: true,
    },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="projects">
      <div className="section-bg" />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="projects-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">A selection of work I'm proud of</p>
          <div className="accent-line" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>

              <ul className="project-bullets">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="project-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <motion.a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={20} />
                  Code
                </motion.a>
                <motion.a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink size={20} />
                  Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
