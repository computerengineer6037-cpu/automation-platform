'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'WhatsApp Automation',
    description: 'Send, receive, and route messages automatically with business workflow logic.',
    accent: '#22c55e',
  },
  {
    title: 'Lead Capture',
    description: 'Collect customer data from forms and push it to your favorite tools or inbox.',
    accent: '#3b82f6',
  },
  {
    title: 'AI Agent',
    description: 'Connect your chatbot to AI, CRM, and automation tools without building from scratch.',
    accent: '#a855f7',
  },
];

const metrics = [
  { label: 'Automations', value: '12' },
  { label: 'Lead flow', value: '98%' },
  { label: 'Setup time', value: '3 min' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="chip">Automation Platform</span>
          <h1>Build a smarter, faster customer journey.</h1>
          <p>
            Create flows for WhatsApp, chat support, AI tools, and external services from one beautiful platform.
          </p>

          <div className="cta-row">
            <button className="primary-btn">Launch demo</button>
            <button className="secondary-btn">View workflows</button>
          </div>

          <div className="metrics-row">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-box">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="panel-header">
            <span className="dot green" />
            <span className="dot yellow" />
            <span className="dot red" />
          </div>

          <div className="workflow-box">
            <div className="workflow-item">
              <span className="badge blue">Chat</span>
              <strong>Customer inquiry</strong>
            </div>
            <div className="connector" />
            <div className="workflow-item">
              <span className="badge purple">AI</span>
              <strong>Route + summarize</strong>
            </div>
            <div className="connector" />
            <div className="workflow-item">
              <span className="badge green">WhatsApp</span>
              <strong>Send response</strong>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="cards-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="info-card"
            style={{ '--card-accent': card.accent }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="card-icon" style={{ background: card.accent }} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
