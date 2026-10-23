import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../shared/ui/Logo'
import Reveal from '../../shared/ui/Reveal'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About us' },
  { to: '/extra', label: 'Extra Sales/Landingpage' },
  { to: '/free-guide', label: 'Free guide' },
]

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <Reveal className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">Get notified when I publish new articles</h2>
          <p className="mt-2 text-muted">Stay up to date with the latest news, announcements, and articles.</p>
        </div>
        <form onSubmit={onSubmit} className="flex w-full max-w-md gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          <button className="rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-brand-dark">
            {done ? 'Done!' : 'Subscribe'}
          </button>
        </form>
      </div>
    </Reveal>
  )
}

export default function Footer() {
  return (
    <footer className="mt-10 bg-soft/60">
      <Newsletter />
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">Design amazing digital experiences that create more happy in the world.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold">Pages</h4>
            <ul className="space-y-3 text-sm text-muted">
              {pages.map((p) => (
                <li key={p.to}><Link to={p.to} className="transition hover:text-brand">{p.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>+123 456 789</li>
              <li><a href="mailto:hello@happydigital.nl" className="transition hover:text-brand">hello@happydigital.nl</a></li>
              <li><a href="#" className="transition hover:text-brand">Instagram</a></li>
              <li><a href="#" className="transition hover:text-brand">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-ink/10 pt-6 text-xs">
          <p>Made with a <span className="text-blue-600">●</span> by <b>HappyDigital</b></p>
          <div className="flex gap-3">
            {['in', 'f', 'Dr'].map((s) => (
              <a key={s} href="#" className="flex h-7 w-7 items-center justify-center rounded-md bg-ink/70 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}