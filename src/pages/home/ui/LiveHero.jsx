import { Target } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'
import Button from '../../../shared/ui/Button'
import Zigzag from '../../../shared/ui/Zigzag'
import img from '../../../shared/assets/hero-live.png'

export default function LiveHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal from="left">
          <Zigzag className="mb-6" />
          <p className="mb-4 text-sm text-muted">Proven strategies backed by science for success</p>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">Live life at the<br />full potential</h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps
            that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna
            transform your life?
          </p>
          <Button to="/free-guide" className="mt-8">Get your free guide now</Button>
        </Reveal>

        <Reveal from="right" delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-10 top-6 z-10 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg animate-float">
            <Target size={22} className="text-brand" />
            <div className="text-xs">
              <p className="font-bold">100%</p>
              <p className="text-muted">Success rate this year</p>
            </div>
          </div>
          <div className="absolute -right-4 top-10 z-10 flex -space-x-2 rounded-full bg-white p-1 shadow-lg animate-float">
            {['A', 'S'].map((l, i) => (
              <span key={l} className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ${i ? 'bg-blue-600' : 'bg-violet'}`}>{l}</span>
            ))}
          </div>
          <img src={img} alt="Coach" className="w-full rounded-2xl object-cover shadow-xl" />
        </Reveal>
      </div>
    </section>
  )
}