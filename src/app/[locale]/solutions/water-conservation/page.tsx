'use client'

import WaterConservationHero from '@/src/app/components/solutions/water-conservation/WaterConservationHero'
import WaterConservationFeatures from '@/src/app/components/solutions/water-conservation/WaterConservationFeatures'
import WaterConservationProcess from '@/src/app/components/solutions/water-conservation/WaterConservationProcess'
import WaterConservationBenefits from '@/src/app/components/solutions/water-conservation/WaterConservationBenefits'
import WaterConservationCTA from '@/src/app/components/solutions/water-conservation/WaterConservationCTA'

export default function WaterConservationPage() {
  return (
    <>
      <WaterConservationHero />
      <WaterConservationFeatures />
      <WaterConservationProcess />
      <WaterConservationBenefits />
      <WaterConservationCTA />
    </>
  )
}

