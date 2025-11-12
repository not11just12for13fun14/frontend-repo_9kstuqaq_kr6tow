import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[#0b0f1a]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-36">
        <div className="max-w-3xl">
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
        </div>
      </div>
    </section>
  )
}
