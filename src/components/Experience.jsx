import { motion } from 'framer-motion'
import '../styles/Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Technical Student, IT Infrastructure Operations',
      company: 'Toronto Hydro-Electric System Ltd.',
      period: 'Jan 2025 - Dec 2025',
      bullets: [
        'Provide technical support and maintenance for Citrix servers, Hyper-V, and VMware environments, ensuring optimal system performance and uptime across multiple production, test, and development infrastructures.',
        'Execute server builds, configurations, and decommissions, following strict change control and security protocols to maintain a stable and compliant infrastructure.',
        'Manage and maintain server blades and hardware assets, performing diagnostics, capacity planning, and coordination with vendors for timely issue resolution.',
        'Administer Avamar backup and recovery systems, verifying backup success rates, restoring critical data, and contributing to business continuity and disaster recovery planning.',
        'Support and monitor SQL databases, performing performance tuning, user access management, and backup/restore operations to ensure database integrity and efficiency.',
        'Prepare and maintain KPI reports and bin management records, monitoring operational metrics to ensure SLAs are consistently met and performance standards upheld.'
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Flower Shop Projects',
      period: 'Jan 2024 - Oct 2024',
      bullets: [
        'Analyzed sales and market trends using Python (pandas, sklearn, matplotlib), resulting in a 30% increase in client acquisition and a 20% boost in sales within 4 months.',
        'Developed interactive PowerBI dashboards, accelerating data retrieval and decision-making by 30%, with backend support from PostgreSQL.',
        'Led the competitor analysis project with Python and PostgreSQL, securing 30 new high-value clients, including Tokyo Smoke, Northern Helm, and JSupplyCo.'
      ],
    },
    {
      title: 'Teacher',
      company: "Mentor's Academy",
      period: 'Aug 2022 - Present',
      bullets: [
        'Teach and develop curriculum for advanced mathematics courses, including calculus, linear algebra, and differential equations, fostering a deep understanding of mathematical concepts.',
        'Lead programming classes covering multiple languages such as Python, Java, and C++, emphasizing algorithmic thinking and problem-solving skills.',
        'Provide one-on-one tutoring and mentorship to students, tailoring instruction to meet diverse learning needs and helping them achieve academic excellence.'
      ],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="experience">
      <div className="section-bg" />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="experience-header">
          <h2>Experience</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-date">{exp.period}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="timeline-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
