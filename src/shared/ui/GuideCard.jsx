import { MessageCircle } from 'lucide-react'
import img from '../assets/guide-card.jpg'

export default function GuideCard() {
  return (
    <div className="group relative mx-auto w-full max-w-xs">
      <span className="absolute -right-3 -top-3 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-center text-[10px] font-semibold leading-tight text-white shadow-lg animate-float">
        Free<br />guide!
      </span>
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-violet p-6 shadow-2xl transition duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
        <h3 className="relative z-10 text-3xl font-extrabold leading-tight text-white">Are you ready to transform your life?</h3>
        <img src={img} alt="" className="absolute bottom-0 right-0 h-3/5 w-4/5 rounded-tl-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-2 text-white">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-violet">
            <MessageCircle size={12} />
          </span>
          <div className="text-[10px] leading-tight">
            <p className="font-semibold">Ready to start? Let's talk!</p>
            <p className="opacity-80">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    </div>
  )
}