import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { LineChart, Bot, Sparkles } from 'lucide-react'

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
