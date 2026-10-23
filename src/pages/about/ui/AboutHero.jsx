import { CalendarDays, MessagesSquare } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'
import Button from '../../../shared/ui/Button'
import hero from '../../../shared/assets/hero.png'

const logos = ['Layers', 'Sisyphus', 'Circooles', 'Catalog', 'Quotient']

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal from="left">
          <p className="mb-4 text-sm text-muted">Proven strategies backed by science for success</p>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">About me</h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps
            that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna
            transform your life?
          </p>
          <Button to="/" className="mt-8">Get your free guide now</Button>
        </Reveal>

        <Reveal from="right" delay={150} className="relative mx-auto w-full max-w-md">
          <div className="absolute -top-6 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg animate-float">
            <CalendarDays className="text-ink" size={22} />
          </div>
          <img src={hero} alt="Coach" className="w-full rounded-2xl object-cover shadow-xl" />
          <div className="absolute -right-4 bottom-1/3 flex items-center gap-3 rounded-xl bg-white/90 px-5 py-4 text-sm shadow-lg backdrop-blur animate-float">
            <MessagesSquare size={22} />
            <span>More than 250+<br />Online Sessions</span>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20 text-center">
        <p className="text-sm text-muted">From startups to the world's largest companies</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center gap-2 text-xl font-semibold text-ink/80 transition hover:text-brand">
              <span className="h-6 w-6 rounded-md bg-ink/70" />
              {l}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}