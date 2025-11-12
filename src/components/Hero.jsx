import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { LineChart, Bot, Sparkles } from 'lucide-react'

function MarketingAIBackdrop() {
  // Positions for AI glyphs
  const nodes = [
    { x: 120, y: 120 },
    { x: 280, y: 180 },
    { x: 420, y: 100 },
    { x: 560, y: 200 },
    { x: 700, y: 140 },
    { x: 860, y: 220 },
    { x: 1020, y: 160 },
  ]

  const AiGlyph = ({ x, y, idx }) => (
    <motion.g
      transform={`translate(${x - 12} ${y - 12})`}
      initial={{ opacity: 0.6, scale: 0.96 }}
      animate={{ opacity: [0.55, 1, 0.55], scale: [0.94, 1.06, 0.94] }}
      transition={{ duration: 3 + (idx % 3), repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Chip body */}
      <rect x="0" y="0" width="24" height="24" rx="6" fill="#0ea5e9" opacity="0.08" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="6" fill="none" stroke="#a78bfa" strokeOpacity="0.35" />

      {/* Pins (suggesting AI hardware) */}
      {[2, 6, 18, 22].map((px) => (
        <>
          <rect key={`t-${px}`} x={px} y={-2} width="1.5" height="3" fill="#94a3b8" opacity="0.5" />
          <rect key={`b-${px}`} x={px} y={23} width="1.5" height="3" fill="#94a3b8" opacity="0.5" />
        </>
      ))}

      {/* Stylized 'A' */}
      <path d="M5 17 L9 7 L13 17" fill="none" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7.5" y1="13" x2="10.5" y2="13" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" />
      {/* Stylized 'I' */}
      <line x1="17" y1="7.5" x2="17" y2="16.5" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="15.2" y1="7.5" x2="18.8" y2="7.5" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
      <line x1="15.2" y1="16.5" x2="18.8" y2="16.5" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
    </motion.g>
  )

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Subtle marketing grid */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" aria-hidden>
        {/* Gradient backdrop */}
        <defs>
          <linearGradient id="gradGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* soft gradient wash */}
        <rect x="0" y="0" width="1440" height="800" fill="url(#gradGlow)" />

        {/* grid */}
        {[...Array(18)].map((_, i) => (
          <line key={`v-${i}`} x1={i * 80} y1={0} x2={i * 80} y2={800} stroke="#ffffff10" strokeWidth="1" />
        ))}
        {[...Array(11)].map((_, i) => (
          <line key={`h-${i}`} x1={0} y1={i * 72} x2={1440} y2={i * 72} stroke="#ffffff10" strokeWidth="1" />
        ))}

        {/* Sparkline that animates like growing ROAS */}
        <motion.path
          d="M 80 560 C 200 520, 260 500, 340 520 S 480 560, 560 520 680 440, 760 460 900 520, 1040 420 1240 360, 1360 300"
          fill="none"
          stroke="url(#spark)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.8 }}
          animate={{ pathLength: [0, 1, 0.95, 1], opacity: [0.6, 1, 0.9, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Candles to suggest ad performance */}
        {[...Array(14)].map((_, i) => {
          const x = 120 + i * 90
          const h = 20 + ((i * 37) % 60)
          return (
            <g key={`c-${i}`}>
              <rect x={x} y={520 - h} width="8" height={h} fill="#22d3ee" opacity="0.3" rx="2" />
              <rect x={x + 10} y={520 - Math.max(10, h - 12)} width="8" height={Math.max(10, h - 12)} fill="#a855f7" opacity="0.25" rx="2" />
            </g>
          )
        })}

        {/* AI glyphs replacing round growing nodes */}
        {nodes.map((n, idx) => (
          <AiGlyph key={`glyph-${idx}`} x={n.x} y={n.y} idx={idx} />
        ))}

        {/* edges connecting glyphs */}
        {nodes.slice(0, -1).map((n, i) => (
          <line
            key={`edge-${i}`}
            x1={n.x}
            y1={n.y}
            x2={nodes[i + 1].x}
            y2={nodes[i + 1].y}
            stroke="#ffffff22"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* Floating platform chips for clear marketing context */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-3 opacity-70">
        {[
          'Meta Ads',
          'Google Ads',
          'YouTube',
          'Instagram',
          'Messenger',
          'WhatsApp',
          'Web Chat',
        ].map((label, i) => (
          <motion.div
            key={label}
            className="text-[11px] sm:text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            animate={{ y: [0, -3, 0] }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const float = {
    initial: { y: 0 },
    animate: {
      y: [-6, 6, -6],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#0b0f1a]" id="home">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Marketing + AI illustrative backdrop overlay */}
      <MarketingAIBackdrop />

      {/* AI glow layers */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        initial={{ opacity: 0.4, scale: 0.9 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-36">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <p className="text-cyan-400/90 tracking-widest uppercase text-xs mb-4">AI-Powered Digital Marketing</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Smart Marketing. Powered by AI.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            SPixLabs helps ambitious brands grow smarter and faster with automation, predictive insights, and content intelligence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/30">
              Let's Talk Growth
            </a>
            <a href="#services" className="px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Floating marketing + AI metrics */}
        <div className="relative mt-10">
          <motion.div
            variants={float}
            initial="initial"
            animate="animate"
            className="hidden sm:flex absolute -top-10 right-6 items-center gap-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur px-4 py-2 text-white"
          >
            <LineChart className="h-4 w-4 text-cyan-300" />
            <span className="text-sm">ROAS +124%</span>
          </motion.div>

          <motion.div
            variants={float}
            initial="initial"
            animate="animate"
            className="hidden md:flex absolute top-10 right-56 items-center gap-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur px-4 py-2 text-white"
            transition={{ delay: 0.3 }}
          >
            <Bot className="h-4 w-4 text-indigo-300" />
            <span className="text-sm">24/7 AI Chat</span>
          </motion.div>

          <motion.div
            variants={float}
            initial="initial"
            animate="animate"
            className="hidden lg:flex absolute -bottom-6 right-24 items-center gap-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur px-4 py-2 text-white"
            transition={{ delay: 0.6 }}
          >
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span className="text-sm">Creative IQ</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
