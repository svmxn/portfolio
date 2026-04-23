import { motion } from 'framer-motion'
import '../styles/Skills.css'

export default function Skills() {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'C#', 'SQL', 'HTML/CSS', 'Bash', 'LISP', 'Visual Basic', 'Smalltalk', 'Rust', 'Elixir', 'Haskell', 'PROLOG'] },
    { category: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'ASP.NET'] },
    { category: 'Developer Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'Linux/Unix', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs', 'PowerBI'] },
    { category: 'Cloud, DevOps & Tools', items: ['AWS (EC2, S3)', 'CI/CD (GitHub Actions)', 'AutoCAD', 'Microsoft Office (Excel, PowerPoint, Word)'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management', 'Leadership'] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="skills">
      <div className="section-bg" />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="skills-header">
          <h2>Technical Skills</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
