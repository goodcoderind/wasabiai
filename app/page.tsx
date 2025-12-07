import Hero from '@/components/home/Hero'
import SecondaryHero from '@/components/home/SecondaryHero'
import CalloutSection from '@/components/home/CalloutSection'
import WhatStudentsCreate from '@/components/home/WhatStudentsCreate'
import CurriculumOverview from '@/components/home/CurriculumOverview'
import DayByDayBreakdown from '@/components/home/DayByDayBreakdown'
import ToolsShowcase from '@/components/home/ToolsShowcase'
import WhatStudentsGain from '@/components/home/WhatStudentsGain'
import LearningJourney from '@/components/home/LearningJourney'
import WhyWasabiAI from '@/components/home/WhyWasabiAI'
import ImpactStats from '@/components/home/ImpactStats'
import StudentProjectsShowcase from '@/components/home/StudentProjectsShowcase'
import ResultsTestimonials from '@/components/home/ResultsTestimonials'
import StudentSpotlights from '@/components/home/StudentSpotlights'
import IndustryTestimonials from '@/components/home/IndustryTestimonials'
import SamAltmanFeature from '@/components/home/SamAltmanFeature'
import ProgramDetails from '@/components/home/ProgramDetails'
import TeamSection from '@/components/home/TeamSection'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ToolsShowcase />
      <SecondaryHero />
      <CalloutSection />
      <WhatStudentsCreate />
      <CurriculumOverview />
      <DayByDayBreakdown />
      <WhatStudentsGain />
      <LearningJourney />
      <WhyWasabiAI />
      <ImpactStats />
      <StudentProjectsShowcase />
      <ResultsTestimonials />
      <StudentSpotlights />
      <IndustryTestimonials />
      <SamAltmanFeature />
      <ProgramDetails />
      <TeamSection />
      <FinalCTA />
    </div>
  )
}
