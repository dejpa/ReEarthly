'use client'

import CircularEconomyHero from '@/src/app/components/solutions/circular-economy/CircularEconomyHero'
import CircularEconomyFeatures from '@/src/app/components/solutions/circular-economy/CircularEconomyFeatures'
import CircularEconomyProcess from '@/src/app/components/solutions/circular-economy/CircularEconomyProcess'
import CircularEconomyBenefits from '@/src/app/components/solutions/circular-economy/CircularEconomyBenefits'
import CircularEconomyCTA from '@/src/app/components/solutions/circular-economy/CircularEconomyCTA'

export default function CircularEconomyPage() {
  return (
    <>
      <CircularEconomyHero />
      <CircularEconomyFeatures />
      <CircularEconomyProcess />
      <CircularEconomyBenefits />
      <CircularEconomyCTA />
    </>
  )
}

