import { useState } from 'react'
import Reveal from '../../../shared/ui/Reveal'
import GuideCard from '../../../shared/ui/GuideCard'

const field = 'w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

export default function GuideHero() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSent(true)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal from="left">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Results that speak for themselves</h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
          </p>

          <form onSubmit={onSubmit} className="mt-8 max-w-xs space-y-3">
            <input className={field} placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className={field} type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <p className="text-xs text-muted">We care about your data in our <a href="#" className="underline">privacy policy</a></p>
            <button className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg">
              {sent ? 'Check your inbox!' : 'Get free guide'}
            </button>
          </form>
        </Reveal>

        <Reveal from="right" delay={150}>
          <GuideCard />
        </Reveal>
      </div>
    </section>
  )
}