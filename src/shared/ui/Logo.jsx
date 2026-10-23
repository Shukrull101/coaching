import { Link } from 'react-router-dom'
import { MessageSquareText } from 'lucide-react'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-sm font-semibold">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-white">
        <MessageSquareText size={14} />
      </span>
      Happy Coaching
    </Link>
  )
}