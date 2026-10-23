import Reveal from '../../../shared/ui/Reveal'
import Button from '../../../shared/ui/Button'
import blog1 from '../../../shared/assets/blog-1.jpg'
import blog2 from '../../../shared/assets/blog-2.jpg'
import blog3 from '../../../shared/assets/blog-3.jpg'

const posts = [
  { img: blog1, title: 'Balancing your love and work life.' },
  { img: blog2, title: 'A short break from Social Media is important.' },
  { img: blog3, title: 'How to be 1% Better Every Day' },
]

export default function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-md text-3xl font-bold leading-tight md:text-4xl">Stay Motivated, read the weekly blog articles.</h2>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 150}>
            <article className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl">
                <img src={p.img} alt={p.title} className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <h3 className="mt-4 font-bold transition group-hover:text-brand">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Button>Read more blogs</Button>
      </Reveal>
    </section>
  )
}