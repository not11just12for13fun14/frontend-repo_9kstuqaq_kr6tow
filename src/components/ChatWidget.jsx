import { useEffect, useMemo, useRef, useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi, I'm SPix. Ask me anything about AI marketing, pricing, or services." },
  ])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const sessionId = useMemo(() => Math.random().toString(36).slice(2), [])
  const endRef = useRef(null)

  useEffect(() => {
    if (open && endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  const sendMessage = async (e) => {
    e?.preventDefault()
    if (!input.trim()) return
    const text = input.trim()
    setMessages((m) => [...m, { role: 'user', content: text }])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, message: text }),
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.reply || 'Thanks! We will get back to you.' }])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Network issue. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-[320px] sm:w-[360px] rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a] shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="font-medium">Ask SPix</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X size={18} />
            </button>
          </div>
          <div className="h-72 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`${m.role === 'user' ? 'bg-cyan-600/20 border-cyan-600/30' : 'bg-white/5 border-white/10'} inline-block max-w-[80%] px-3 py-2 rounded-lg text-sm text-gray-100 border`}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={sendMessage} className="flex items-center gap-2 p-3 border-t border-white/10">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-black/40 text-white placeholder-gray-400 rounded-md px-3 py-2 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button disabled={loading} type="submit" className="p-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:opacity-60">
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 flex items-center justify-center">
          <MessageCircle />
        </button>
      )}
    </div>
  )
}
