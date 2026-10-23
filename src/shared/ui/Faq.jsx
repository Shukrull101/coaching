import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'

const faq = [
  { q: 'How long does the coaching process take?', a: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
  { q: 'What if I wanted to end my coaching engagement?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  { q: 'Can I change through coaching?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
  { q: 'How often do we meet?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Good to know.</h2>
        <p className="mt-3 text-sm text-muted">Everything you need to know about the my services.</p>
      </Reveal>

      <div className="mt-12 divide-y divide-ink/10">
        {faq.map((item, i) => {
          const isOpen = open === i
          return (
            <Reveal key={item.q} delay={i * 80}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium transition hover:text-brand"
              >
                {item.q}
                {isOpen ? <Minus size={18} className="shrink-0 text-brand" /> : <Plus size={18} className="shrink-0 text-brand" />}
              </button>
              <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-14 text-center">
        <h3 className="font-bold">Still have questions?</h3>
        <p className="mt-1 text-sm text-muted">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <Button className="mt-5">Get in touch</Button>
      </Reveal>
    </section>
  )
}