import Reveal from '../../../shared/ui/Reveal'
import img from '../../../shared/assets/services-hero.jpg'

export default function ServicesHero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal from="left">
          <p className="mb-4 text-xs text-muted">I can help you in these particular areas</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">I help people to discover their true potential</h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            I help people to discover their true potential and live a fulfilling life... Discover the simple 3 steps
            that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna
            transform your life?
          </p>
        </Reveal>
        <Reveal from="right" delay={150} className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl shadow-xl">
          <img src={img} alt="Coach" className="aspect-3/4 w-full object-cover transition duration-700 hover:scale-105" />
        </Reveal>
      </div>
    </section>
  )
}