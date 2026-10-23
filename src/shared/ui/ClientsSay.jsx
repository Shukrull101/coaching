import { Star } from 'lucide-react'
import Reveal from './Reveal'
import jane from '../assets/jane.png'
import catherine from '../assets/catherine.png'

const reviews = [
  { text: 'I gained so much confidence in my ability to connect and deepen my relationships with people.', name: 'Jane', img: jane },
  { text: 'Denise helped me organise my diet. Highly recommend her services!', name: 'Catherine', img: catherine },
  { text: 'I gained so much confidence in my ability to connect and deepen my relationships with people.', name: 'Jane', img: jane },
]

export default function ClientsSay() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <h2 className="max-w-md text-3xl font-bold leading-tight md:text-4xl">Hear out what my clients say about me.</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={i} delay={i * 150}>
            <div className="flex h-full flex-col rounded-2xl bg-soft p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="flex-1 leading-relaxed text-muted">"{r.text}"</p>
              <p className="mt-6 font-semibold">{r.name}</p>
              <img src={r.img} alt={r.name} className="mt-3 h-12 w-12 rounded-full object-cover" />
              <div className="mt-3 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}