'use client'

import AboutHero from '@/src/app/components/about/AboutHero'
import OurMission from '@/src/app/components/about/OurMission'
import OurTeam from '@/src/app/components/about/OurTeam'
import OurValues from '@/src/app/components/about/OurValues'
import OurStory from '@/src/app/components/about/OurStory'

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurValues />
      <OurTeam />
    </>
  )
}
