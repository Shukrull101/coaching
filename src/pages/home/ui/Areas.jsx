import { Link } from 'react-router-dom'
import { BookOpen, MessagesSquare, Users } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'
import Zigzag from '../../../shared/ui/Zigzag'

const areas = [
  { icon: BookOpen, title: '1:1 Coaching' },
  { icon: MessagesSquare, title: 'Consultation' },
  { icon: Users, title: 'Group Coaching Sessions' },
]

export default function Areas() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal from="left">
          <Zigzag className="mb-6" />
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">I can help you in these particular areas.</h2>
        </Reveal>
        <Reveal from="right" className="space-y-4 text-sm leading-relaxed text-muted">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {areas.map(({ icon: Icon, title }, i) => (
          <Reveal key={title} delay={i * 120}>
            <Link to="/services" className="group block h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:bg-soft hover:shadow-lg">
              <Icon size={28} className="mb-4 text-ink transition group-hover:text-brand" />
              <h3 className="mb-2 font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}