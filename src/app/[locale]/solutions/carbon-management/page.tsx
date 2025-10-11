'use client'

import CarbonManagementHero from '@/src/app/components/solutions/carbon-management/CarbonManagementHero'
import CarbonManagementFeatures from '@/src/app/components/solutions/carbon-management/CarbonManagementFeatures'
import CarbonManagementProcess from '@/src/app/components/solutions/carbon-management/CarbonManagementProcess'
import CarbonManagementBenefits from '@/src/app/components/solutions/carbon-management/CarbonManagementBenefits'
import CarbonManagementCTA from '@/src/app/components/solutions/carbon-management/CarbonManagementCTA'

export default function CarbonManagementPage() {
  return (
    <>
      <CarbonManagementHero />
      <CarbonManagementFeatures />
      <CarbonManagementProcess />
      <CarbonManagementBenefits />
      <CarbonManagementCTA />
    </>
  )
}
