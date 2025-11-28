import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // 处理表单提交
    console.log(formState)
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-title">联系方式</span>
          <h2 className="section-heading">让我们开始合作</h2>
          <p className="contact-desc">
            有项目想法或合作机会？欢迎随时联系我
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div>
                <h4>邮箱</h4>
                <p>moonhotline@outlook.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <h4>位置</h4>
                <p>中国，深圳</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div>
                <h4>电话</h4>
                <p>+86 15038534859</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="您的姓名"
                value={formState.name}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="您的邮箱"
                value={formState.email}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="您的留言"
                rows={5}
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              发送消息
              <Send size={18} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}