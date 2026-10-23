import { useState } from 'react'
import { Play, MessageSquareText, MessageCircle } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'

const points = [
  { icon: MessageSquareText, title: 'Online consultation' },
  { icon: MessageCircle, title: "Ready to start? Let's talk!" },
]

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal from="left">
          <p className="mb-3 text-sm text-muted">How does it work?</p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Are you ready to transform your life?</h2>
          <p className="mt-4 text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua minim veniam.
          </p>
        </Reveal>

        <div className="space-y-6">
          {points.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} from="right" delay={i * 150}>
              <div className="flex gap-4">
                <Icon size={20} className="mt-1 shrink-0 text-brand" />
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={100} className="mt-14">
        <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl shadow-2xl">
          <img src="/video-poster.jpg" alt="Video" className={`h-full w-full object-cover transition duration-700 ${playing ? 'scale-110 blur-sm' : 'hover:scale-105'}`} />
          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink backdrop-blur transition duration-300 hover:scale-110 hover:bg-white"
            >
              <Play size={24} fill="currentColor" />
            </button>
          )}
        </div>
      </Reveal>
    </section>
  )
}