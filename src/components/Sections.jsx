import { CheckCircle2, LineChart, Bot, Sparkles, BarChart3, PenTool, Brain, Mail, Megaphone, MessageSquare } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative bg-[#0b0f1a] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">AI that moves markets</h2>
          <p className="mt-4 text-gray-300">We blend data science and creative strategy to deliver compounding marketing gains. From automation to predictive optimization—SPixLabs is your growth operating system.</p>
          <ul className="mt-6 space-y-3">
            {[
              'Automation across the funnel',
              'Predictive media mix and bidding',
              'Content intelligence for every channel',
              'Meta & Google Ads excellence with AI optimization',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-gray-300"><CheckCircle2 className="text-cyan-400 mt-0.5" /> {t}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Bot, title: 'AI Ops' },
            { icon: LineChart, title: 'Performance' },
            { icon: Sparkles, title: 'Creative' },
            { icon: BarChart3, title: 'Insights' },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center text-white">
              <Icon className="mx-auto text-cyan-400" />
              <p className="mt-2 text-sm text-gray-300">{title}</p>
            </div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Services</h2>
        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">We provide complete automation for your acquisition, activation, and retention—plus high-performance paid media across Meta and Google.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:from-white/10 transition">
              <Icon className="text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 text-cyan-300">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">Platforms we automate</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <span key={p} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-black/40 text-gray-200">{p}</span>
            ))}
          </div>
        </div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Case Studies</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.brand} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-sm text-cyan-300">{c.brand}</p>
              <h3 className="text-2xl font-semibold mt-2">{c.metric}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
            </div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">AI Tools Showcase</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <div key={t.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="text-gray-300 mt-2">{t.desc}</p>
            </div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What Clients Say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-gray-200 italic">“{t.quote}”</p>
              <p className="text-cyan-300 mt-3">{t.name}</p>
            </div>
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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Insights</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <span className="text-xs text-cyan-300">{p.tag} • {p.date}</span>
              <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
              <p className="text-gray-300 mt-2">Thought leadership on AI and growth.</p>
              <button className="mt-4 text-cyan-300 hover:text-cyan-200">Read more →</button>
            </article>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s Talk Growth</h2>
          <p className="mt-4 text-gray-300">Tell us about your goals and timeline. We’ll come back with a tailored growth plan and pricing options.</p>
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-white">
            <p className="text-cyan-300">Integrations</p>
            <p className="text-gray-300 mt-2">Plug into your favorite tools: HubSpot, Salesforce, Marketo, GA4, Meta, Google Ads, TikTok, and more.</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
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
        </form>
      </div>
    </section>
  )
}
