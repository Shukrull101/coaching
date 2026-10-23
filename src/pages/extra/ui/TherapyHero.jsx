import Reveal from '../../../shared/ui/Reveal'
import Button from '../../../shared/ui/Button'
import img from '../../../shared/assets/self-esteem.png'

export default function TherapyHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal from="left">
          <svg width="60" height="14" viewBox="0 0 60 14" fill="none" className="mb-6 text-brand">
            <path d="M1 7l7-5 7 10 7-10 7 10 7-10 7 10 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="mb-4 text-sm text-muted">Proven strategies backed by science for success</p>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">Self Esteem<br />Therapy</h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps
            that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna
            transform your life?
          </p>
          <Button className="mt-8">Claim your spot</Button>
        </Reveal>

        <Reveal from="right" delay={150} className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
          <img src={img} alt="Therapy session" className="w-full object-cover transition duration-700 hover:scale-105" />
        </Reveal>
      </div>
    </section>
  )
}