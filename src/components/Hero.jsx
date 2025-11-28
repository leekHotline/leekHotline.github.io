import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    // GSAP 文字分割动画
    const title = titleRef.current
    const text = title.innerText
    title.innerHTML = ''
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span')
      span.innerText = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(100px) rotateX(90deg)'
      title.appendChild(span)
    })

    gsap.to(title.children, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1,
      stagger: 0.03,
      ease: 'power4.out',
      delay: 0.5
    })
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/leekHotline', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ]

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <motion.div 
          className="hero-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge-dot" />
          Available for work
        </motion.div>

        <h1 className="hero-title" ref={titleRef}>
          创造优雅的数字体验
        </h1>

        <motion.p
          className="hero-subtitle"
          ref={subtitleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          我是一名全栈开发者，专注于构建美观、高性能的 Web 应用。
          <br />
          热爱将创意转化为现实，追求极致的用户体验。
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            查看作品
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            联系我
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              whileHover={{ y: -3, color: '#000' }}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}