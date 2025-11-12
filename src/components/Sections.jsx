import { CheckCircle2, LineChart, Bot, Sparkles, BarChart3, PenTool, Brain, Mail, Megaphone, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export function About() {
  const tiles = [
    { icon: Bot, title: 'AI Ops' },
    { icon: LineChart, title: 'Performance' },
    { icon: Sparkles, title: 'Creative' },
    { icon: BarChart3, title: 'Insights' },
  ]

  return (
    <section id="about" className="relative bg-[#0b0f1a] py-20">
      {/* subtle animated grid backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(56,189,248,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI that moves markets</h2>
          <p className="mt-4 text-gray-300">We blend data science and creative strategy to deliver compounding marketing gains. From automation to predictive optimization—SPixLabs is your growth operating system.</p>
          <ul className="mt-6 space-y-3">
            {[
              'Automation across the funnel',
              'Predictive media mix and bidding',
              'Content intelligence for every channel',
              'Meta & Google Ads excellence with AI optimization',
            ].map((t, i) => (
              <motion.li
                key={t}
                className="flex items-start gap-3 text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <CheckCircle2 className="text-cyan-400 mt-0.5" /> {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {tiles.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(56,189,248,0.15)' }}
            >
              <Icon className="mx-auto text-cyan-400" />
              <p className="mt-2 text-sm text-gray-300">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { icon: Megaphone, title: 'Meta Ads Management', desc: 'Full-funnel campaigns across Facebook & Instagram with creative testing and AI-driven optimization.' },
    { icon: Megaphone, title: 'Google Ads Management', desc: 'Search, Performance Max, YouTube, and Display with predictive bidding and budget pacing.' },
    { icon: Bot, title: 'Custom AI Chatbots', desc: 'Website, WhatsApp, Instagram, and Messenger bots that qualify leads and book meetings 24/7.' },
    { icon: Brain, title: 'Marketing Automation', desc: 'Trigger-based journeys, lead scoring, lifecycle nurtures, and CRM workflows—end-to-end.' },
    { icon: LineChart, title: 'Predictive Ad Optimization', desc: 'Budget pacing, bid recommendations, and channel mix models.' },
    { icon: BarChart3, title: 'Data Analytics & Insights', desc: 'Full-funnel dashboards, attribution analysis, and anomaly alerts.' },
    { icon: Sparkles, title: 'Content Intelligence', desc: 'Generate and optimize creatives with AI-guided messaging and asset scoring.' },
    { icon: PenTool, title: 'Branding & Creative Strategy', desc: 'Distinctive brand systems and thumb-stopping assets.' },
  ]
  const platforms = ['Meta', 'Google Ads', 'YouTube', 'WhatsApp', 'Instagram', 'Messenger', 'Web Chat']
  return (
    <section id="services" className="bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">We provide complete automation for your acquisition, activation, and retention—plus high-performance paid media across Meta and Google.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="inline-flex items-center justify-center rounded-md bg-cyan-500/10 p-2"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                <Icon className="text-cyan-400" />
              </motion.div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-gray-300">{desc}</p>
              <motion.div
                aria-hidden
                className="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                whileInView={{ width: '40%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-2 text-cyan-300">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">Platforms we automate</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {platforms.map((p, i) => (
              <motion.span
                key={p}
                className="px-3 py-1 text-xs rounded-full border border-white/10 bg-black/40 text-gray-200"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Cases() {
  const items = [
    { brand: 'Acme Fitness', metric: '+124% ROAS', desc: 'Predictive bidding across search and paid social.' },
    { brand: 'Nimbus SaaS', metric: '-38% CAC', desc: 'Automated lifecycle scoring and nurtures.' },
    { brand: 'Vela Retail', metric: '+3.2x CTR', desc: 'Creative intelligence for high-performing ads.' },
  ]
  return (
    <section id="cases" className="bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white text-center" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>Case Studies</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <motion.div
              key={c.brand}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <p className="text-sm text-cyan-300">{c.brand}</p>
              <h3 className="text-2xl font-semibold mt-2">{c.metric}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Tools() {
  const items = [
    { title: 'SPix Automator', desc: 'Workflow engine for multichannel automation and lead scoring.' },
    { title: 'Creative IQ', desc: 'AI that benchmarks and evolves ad concepts and messaging.' },
    { title: 'Predictor', desc: 'Media mix modeling and budget/bid recommendations.' },
    { title: 'Insight Hub', desc: 'Unified analytics with anomaly detection and alerts.' },
  ]
  return (
    <section id="tools" className="bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white text-center" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>AI Tools Showcase</motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-white"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="text-gray-300 mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { quote: 'SPixLabs turned our data into a growth engine.', name: 'Lara W., CMO' },
    { quote: 'Automation and insights that actually drive pipeline.', name: 'Ken T., VP Growth' },
    { quote: 'Creative + AI = performance. We loved the partnership.', name: 'Priya D., Brand Lead' },
  ]
  return (
    <section id="testimonials" className="bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white text-center" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>What Clients Say</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <p className="text-gray-200 italic">“{t.quote}”</p>
              <p className="text-cyan-300 mt-3">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  const posts = [
    { title: 'AI in Performance Marketing: 2025 Playbook', tag: 'AI', date: 'Oct 2025' },
    { title: 'Creative Intelligence: From Guesswork to Science', tag: 'Creativity', date: 'Sep 2025' },
    { title: 'Attribution in a Privacy-First World', tag: 'Analytics', date: 'Aug 2025' },
  ]
  return (
    <section id="blog" className="bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white text-center" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>Insights</motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6 }}
            >
              <span className="text-xs text-cyan-300">{p.tag} • {p.date}</span>
              <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
              <p className="text-gray-300 mt-2">Thought leadership on AI and growth.</p>
              <button className="mt-4 text-cyan-300 hover:text-cyan-200">Read more →</button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact({ onSubmit }) {
  return (
    <section id="contact" className="relative bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-white" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>Let’s Talk Growth</motion.h2>
          <p className="mt-4 text-gray-300">Tell us about your goals and timeline. We’ll come back with a tailored growth plan and pricing options.</p>
          <motion.div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-cyan-300">Integrations</p>
            <p className="text-gray-300 mt-2">Plug into your favorite tools: HubSpot, Salesforce, Marketo, GA4, Meta, Google Ads, TikTok, and more.</p>
          </motion.div>
        </div>
        <motion.form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="bg-black/40 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input name="email" required type="email" placeholder="Email" className="bg-black/40 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input name="company" placeholder="Company" className="bg-black/40 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" />
            <input name="phone" placeholder="Phone" className="bg-black/40 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" />
            <textarea name="message" rows="4" placeholder="Project goals" className="bg-black/40 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" />
          </div>
          <button type="submit" className="mt-6 w-full px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">Request a Proposal</button>
          <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
            <Mail className="w-4 h-4" />
            <span>Subscribe to insights</span>
            <input name="subscribe" type="checkbox" className="ml-auto accent-cyan-500" />
          </div>
        </motion.form>
      </div>
    </section>
  )
}
