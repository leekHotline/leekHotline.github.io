import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'
import './Footer.css'

const socialLinks = [
  { icon: Github, href: 'https://github.com/leekHotline' },
  { icon: Twitter, href: 'https://x.com/attentionisaac' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="footer-logo">LH</span>
            <p>创造优雅的数字体验</p>
          </motion.div>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            © 2025 leekHotline. Made with <Heart size={14} className="heart" /> in China
          </p>
        </motion.div>
      </div>
    </footer>
  )
}