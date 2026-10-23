import { Link } from 'react-router-dom'

export default function Button({ to, children, className = '', ...props }) {
  const cls = `inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand/20 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg active:translate-y-0 ${className}`
  return to
    ? <Link to={to} className={cls} {...props}>{children}</Link>
    : <button className={cls} {...props}>{children}</button>
}