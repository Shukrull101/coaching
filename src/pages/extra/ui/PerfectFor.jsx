import { CircleCheck, CircleX } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'

const rows = [0, 1, 2, 3]

function Column({ title, icon: Icon, color, delay, from }) {
  return (
    <Reveal from={from} delay={delay}>
      <div className="h-full rounded-2xl bg-soft p-8">
        <h3 className="mb-6 text-center font-bold">{title}</h3>
        <ul className="space-y-4">
          {rows.map((r) => (
            <li key={r} className="flex items-start gap-3 text-sm text-muted">
              <Icon size={18} className={`mt-0.5 shrink-0 ${color}`} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function PerfectFor() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal className="text-center">
        <p className="mb-3 text-sm text-muted">This is not for everyone!</p>
        <h2 className="text-3xl font-bold md:text-4xl">This program is<br />perfect for you if...</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Column title="This is NOT for you if..." icon={CircleX} color="text-red-500" from="left" />
        <Column title="This is for you if..." icon={CircleCheck} color="text-brand" from="right" delay={150} />
      </div>
    </section>
  )
}