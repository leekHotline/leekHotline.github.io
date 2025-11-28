import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const skills = [
  { name: 'FastAPI', level: 95 },
  { name: 'FastMCP', level: 90 },
  { name: 'Langchain', level: 85 },
  { name: 'React', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'PostgreSQL', level: 80 },
]

const tools = [
  'Git', 'Docker', 'AWS', 'Nginx', 'Grafana', 'Linux'
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title">技能栈</span>
          <h2 className="section-heading">技术能力</h2>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-bars"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skills.map((skill, i) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="tools-section"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>常用工具</h3>
            <div className="tools-grid">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  className="tool-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}