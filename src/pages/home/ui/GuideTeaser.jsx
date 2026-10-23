import Reveal from '../../../shared/ui/Reveal'
import Button from '../../../shared/ui/Button'
import GuideCard from '../../../shared/ui/GuideCard'

export default function GuideTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal from="left">
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">Don't miss out on my 'Live life at the full potential' free guide</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
          <p className="mt-3 text-xs leading-relaxed text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <Button to="/free-guide" className="mt-6">Get your free guide now</Button>
        </Reveal>
        <Reveal from="right" delay={150}>
          <GuideCard />
        </Reveal>
      </div>
    </section>
  )
}