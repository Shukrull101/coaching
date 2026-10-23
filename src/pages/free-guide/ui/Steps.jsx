import { MessagesSquare, CalendarDays, MessageSquareText, MessageCircle } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'
import img from '../../../shared/assets/hero-live.png'

const steps = [
  { icon: MessagesSquare, title: 'Talk to me first' },
  { icon: CalendarDays, title: 'Schedule a meeting' },
  { icon: MessageSquareText, title: 'Online consultation' },
  { icon: MessageCircle, title: "Ready to start? Let's talk!" },
]

export default function Steps() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Reveal from="left">
            <p className="mb-3 text-sm text-muted">How does it work?</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Are you ready to transform your life?</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua minim veniam.
            </p>
          </Reveal>

          <div className="mt-8 space-y-6">
            {steps.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-brand">
                    <Icon size={16} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="text-xs text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal from="right" delay={150} className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
          <img src={img} alt="Coach" className="w-full object-cover transition duration-700 hover:scale-105" />
        </Reveal>
      </div>
    </section>
  )
}