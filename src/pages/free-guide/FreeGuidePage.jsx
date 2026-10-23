import GuideHero from './ui/GuideHero'
import Steps from './ui/Steps'
import DownloadCta from './ui/DownloadCta'
import Results from '../../shared/ui/Results'
import Faq from '../../shared/ui/Faq'

export default function FreeGuidePage() {
  return (
    <>
      <GuideHero />
      <Results />
      <Steps />
      <Faq />
      <DownloadCta />
    </>
  )
}