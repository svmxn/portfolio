import { motion } from 'framer-motion'
import '../styles/Experience.css'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Technical Student, IT Infrastructure Operations',
      company: 'Toronto Hydro-Electric System Ltd.',
      period: 'Jan 2025 - Dec 2025',
      bullets: [
        'Provided technical support and maintenance for Citrix servers, Hyper-V, and VMware environments across production, test, and development systems, ensuring strong infrastructure performance, stability, and uptime.',
        'Performed server builds, configurations, and decommissions while adhering to change control requirements and security protocols to support a stable and compliant enterprise environment.',
        'Managed server blades and hardware assets by conducting diagnostics, assisting with capacity planning, and coordinating with vendors for timely issue resolution and maintenance.',
        'Administered Avamar backup and recovery systems, monitored backup success rates, restored critical data, and contributed to business continuity and disaster recovery readiness.',
        'Supported SQL databases through performance tuning, user access management, and backup/restore operations, helping maintain database integrity, reliability, and efficiency.',
        'Prepared KPI reports and maintained bin management records to monitor operational metrics, support service performance analysis, and ensure compliance with SLAs.'
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
