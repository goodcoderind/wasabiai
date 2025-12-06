import AboutHero from '@/components/about/AboutHero'
import OurStory from '@/components/about/OurStory'
import Values from '@/components/about/Values'
import ExtendedTeam from '@/components/about/ExtendedTeam'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <Values />
      <ExtendedTeam />
    </div>
  )
}
