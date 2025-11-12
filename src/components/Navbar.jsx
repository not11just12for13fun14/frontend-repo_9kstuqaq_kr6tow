import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const links = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'tools', label: 'AI Tools' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-wide">SPixLabs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-gray-300 hover:text-white transition">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/30">
              Let's Talk Growth
            </button>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left text-gray-300 hover:text-white py-2">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="w-full mt-2 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium">
              Let's Talk Growth
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
