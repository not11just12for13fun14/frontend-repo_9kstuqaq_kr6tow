import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, Cases, Tools, Testimonials, Blog, Contact } from './components/Sections'
import ChatWidget from './components/ChatWidget'

function App() {
  const [status, setStatus] = useState({ submitting: false, success: null, message: '' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus({ submitting: true, success: null, message: '' })

    try {
      const leadRes = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          company: payload.company || '',
          phone: payload.phone || '',
          message: payload.message || '',
          source: 'website',
        }),
      })

      if (!leadRes.ok) throw new Error('Failed to submit lead')

      if (payload.subscribe === 'on') {
        await fetch(`${baseUrl}/api/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: payload.email, source: 'website' }),
        })
      }

      setStatus({ submitting: false, success: true, message: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ submitting: false, success: false, message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Cases />
        <Tools />
        <Testimonials />
        <Blog />
        <Contact onSubmit={handleSubmit} />
        {status.message && (
          <div className={`fixed bottom-24 right-6 px-4 py-3 rounded-md text-white ${status.success ? 'bg-green-600' : 'bg-red-600'}`}>
            {status.message}
          </div>
        )}
      </main>
      <ChatWidget />
    </div>
  )
}

export default App
