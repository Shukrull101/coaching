import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, className = '', from = 'up' }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true)
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const hidden = from === 'left' ? '-translate-x-10' : from === 'right' ? 'translate-x-10' : 'translate-y-8'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${show ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hidden}`} ${className}`}
    >
      {children}
    </div>
  )
}