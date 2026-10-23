import { MessageCircle, CalendarDays, MessagesSquare, UserRound, Bell } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'

const items = [MessageCircle, CalendarDays, MessagesSquare, UserRound, Bell, MessagesSquare]

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm text-muted">How does it work?</p>
        <h2 className="text-3xl font-bold md:text-4xl">Are you ready to transform your life?</h2>
        <p className="mt-4 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua minim veniam.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((Icon, i) => (
          <Reveal key={i} delay={(i % 3) * 120}>
            <div className="group h-full rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-soft hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-soft text-ink transition group-hover:bg-brand group-hover:text-white">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 font-bold">Ready to start? Let's talk!</h3>
              <p className="text-sm leading-relaxed text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}