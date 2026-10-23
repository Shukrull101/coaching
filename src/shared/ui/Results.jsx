import { Star } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import avatar from '../../shared/assets/jane.png'

export default function Results() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm text-muted">Testimonials</p>
          <h2 className="text-3xl font-bold md:text-4xl">Results that speak for themselves</h2>
        </div>
        <Button>Get started</Button>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <Reveal key={i} delay={(i % 2) * 150}>
            <div className="rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-soft hover:shadow-md">
              <p className="mb-5 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>{' '}
                sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <img src={avatar} alt="Naam" className="mx-auto h-12 w-12 rounded-full object-cover" />
              <p className="mt-2 font-semibold">Naam</p>
              <p className="text-xs text-muted">Bedrijf</p>
              <div className="mt-2 flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}