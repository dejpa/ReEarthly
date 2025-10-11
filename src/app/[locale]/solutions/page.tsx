'use client'

import SolutionHero from '@/src/app/components/solutions/SolutionHero'
import SolutionCategories from '@/src/app/components/solutions/SolutionCategories'
import SolutionFeatures from '@/src/app/components/solutions/SolutionFeatures'
import SolutionImpact from '@/src/app/components/solutions/SolutionImpact'
import SolutionCTA from '@/src/app/components/solutions/SolutionCTA'

export default function Solutions() {
  return (
    <>
      <SolutionHero />
      <SolutionCategories />
      <SolutionFeatures />
      <SolutionImpact />
      <SolutionCTA />
    </>
  )
}

