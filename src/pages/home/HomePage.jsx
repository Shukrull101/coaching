import LiveHero from './ui/LiveHero'
import Areas from './ui/Areas'
import Blog from './ui/Blog'
import GuideTeaser from './ui/GuideTeaser'
import ClientsSay from '../../shared/ui/ClientsSay'
import SessionCta from '../../shared/ui/SessionCta'

export default function HomePage() {
  return (
    <>
      <LiveHero />
      <Areas />
      <ClientsSay />
      <Blog />
      <GuideTeaser />
      <SessionCta />
    </>
  )
}