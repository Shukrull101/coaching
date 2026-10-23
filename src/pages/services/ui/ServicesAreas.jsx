import { BookOpen, MessagesSquare, MonitorPlay, Users } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'

const items = [
  { icon: Users, title: 'Group Coaching Sessions', accent: true },
  { icon: MonitorPlay, title: 'Online course' },
  { icon: MessagesSquare, title: 'Consultation' },
  { icon: BookOpen, title: '1:1 Coaching' },
]

export default function ServicesAreas() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">I can help you in these<br />particular areas.</h2>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, accent }, i) => (
          <Reveal key={title} delay={(i % 2) * 150}>
            <div className="group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:bg-soft hover:shadow-lg">
              <Icon size={28} className="mb-4 transition group-hover:text-brand" />
              <h3 className={`mb-2 font-bold ${accent ? 'text-brand' : ''}`}>{title}</h3>
              <p className="text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}