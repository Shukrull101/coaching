import TherapyHero from './ui/TherapyHero'
import HowItWorks from './ui/HowItWorks'
import VideoSection from './ui/VideoSection'
import PerfectFor from './ui/PerfectFor'
import Guarantee from './ui/Guarantee'
import Results from '../../shared/ui/Results'
import Faq from '../../shared/ui/Faq'
import SessionCta from '../../shared/ui/SessionCta'

export default function ExtraPage() {
  return (
    <>
      <TherapyHero />
      <HowItWorks />
      <VideoSection />
      <Results />
      <PerfectFor />
      <SessionCta buttonText="Claim your spot" />
      <Guarantee />
      <Faq />
    </>
  )
}