import Reveal from './Reveal'
import Button from './Button'
import img from '../assets/cta-woman.png'

export default function SessionCta({ buttonText = 'Book now' }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Reveal>
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-soft md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold leading-tight">Get 15-Minutes Complimentary online session.</h2>
            <p className="mt-3 text-sm text-muted">Limited Period Offer. Claim Now.</p>
            <Button className="mt-6">{buttonText}</Button>
          </div>
          <img src={img} alt="Coach" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
        </div>
      </Reveal>
    </section>
  )
}