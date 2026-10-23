import { Star } from 'lucide-react'
import Reveal from '../../../shared/ui/Reveal'
import Button from '../../../shared/ui/Button'
import jane from '../../../shared/assets/jane.png'
import catherine from '../../../shared/assets/catherine.png'
import a3 from '../../../shared/assets/avatar-3.png'
import a4 from '../../../shared/assets/avatar-4.png'
import a5 from '../../../shared/assets/avatar-5.png'

const floating = [
  { src: catherine, pos: 'left-[8%] top-[45%] h-14 w-14', delay: '0s' },
  { src: a3, pos: 'right-[12%] top-[8%] h-10 w-10', delay: '1s' },
  { src: jane, pos: 'left-[2%] bottom-[10%] h-10 w-10', delay: '2s' },
  { src: a4, pos: 'right-[2%] top-[42%] h-8 w-8', delay: '1.5s' },
  { src: a5, pos: 'right-[10%] bottom-[8%] h-11 w-11', delay: '0.5s' },
]

export default function DownloadCta() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-24 text-center">
      {floating.map((f, i) => (
        <img
          key={i}
          src={f.src}
          alt=""
          style={{ animationDelay: f.delay }}
          className={`absolute hidden rounded-full object-cover shadow-md animate-float md:block ${f.pos}`}
        />
      ))}

      <Reveal>
        <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight md:text-4xl">
          Don't miss out on my <span className="text-brand">'Live life at the full potential'</span> free guide
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
        </p>
        <Button className="mt-7">Download my free guide</Button>
        <p className="mt-8 text-xs text-muted">More than 100+ 5 star reviews</p>
        <div className="mt-1 flex justify-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
        </div>
      </Reveal>
    </section>
  )
}