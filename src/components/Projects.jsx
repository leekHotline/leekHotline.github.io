import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    title: 'Cortex AI',
    desc: '基于 FastAPI + React 的智能对话系统，支持流式响应和多轮对话',
    tags: ['React', 'FastAPI', 'AI'],
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600',
    github: '#',
    demo: '#'
  },
  {
    title: 'E-Commerce Platform',
    desc: '全栈科研平台，包含公式提取、登录、支付等完整功能',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600',
    github: '#',
    demo: '#'
  },
  {
    title: 'Design System',
    desc: '企业级组件库，包含 50+ 可复用组件，支持主题定制',
    tags: ['React', 'TypeScript', 'Storybook'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
    github: '#',
    demo: '#'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title">精选项目</span>
          <h2 className="section-heading">我的作品</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <motion.a
                    href={project.github}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}