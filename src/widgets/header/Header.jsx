import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../../shared/ui/Logo'
import Button from '../../shared/ui/Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About us' },
  { to: '/extra', label: 'Extra Salespage' },
]

const linkCls = ({ isActive }) =>
  `text-sm transition hover:text-brand ${isActive ? 'font-medium text-brand' : 'text-ink/80'}`

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkCls}>{l.label}</NavLink>
          ))}
          <Button to="/free-guide">Get your free guide now</Button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <nav className="overflow-hidden">
          <div className="flex flex-col gap-4 px-6 pb-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkCls} onClick={() => setOpen(false)}>{l.label}</NavLink>
            ))}
            <Button to="/free-guide" onClick={() => setOpen(false)}>Get your free guide now</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}