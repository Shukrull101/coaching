import { Award } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'

export default function Guarantee() {
  return (
    <section className="mx-auto max-w-md px-6 py-20 text-center">
      <Reveal>
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-brand/30 text-brand animate-float">
          <Award size={52} strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-bold">Guarantee</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua minim veniam.
        </p>
      </Reveal>
    </section>
  )
}