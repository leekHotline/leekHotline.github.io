import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Rocket } from 'lucide-react'
import './About.css'

const features = [
  {
    icon: Code,
    title: '全栈开发 + Agent开发',
    desc: '精通 FastAPI 、LangChian 、LangGraph、FastMCP、React构建完整的 AI 应用解决方案'
  },
  {
    icon: Palette,
    title: 'UI/UX 设计',
    desc: '注重用户体验，创造美观直观的界面设计'
  },
  {
    icon: Rocket,
    title: '性能优化',
    desc: '追求极致性能，让应用快速响应'
  }
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title">关于我</span>
          <h2 className="section-heading">
            热爱技术，追求卓越
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              我是一名充满热情的开发者，积极拥抱AI，拥有多年的 Web 开发经验。
              我相信好的代码不仅要能工作，还要优雅、可维护。
            </p>
            <p>
              在工作中，我专注于创建高质量的AI代理助手，让agents更智能、更高效。
              从构思到上线，每一个细节都力求完美。
            </p>
          </motion.div>

          <motion.div
            className="features-grid"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}