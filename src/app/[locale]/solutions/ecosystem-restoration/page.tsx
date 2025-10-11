'use client'

import EcosystemRestorationHero from '@/src/app/components/solutions/ecosystem-restoration/EcosystemRestorationHero'
import EcosystemRestorationFeatures from '@/src/app/components/solutions/ecosystem-restoration/EcosystemRestorationFeatures'
import EcosystemRestorationProcess from '@/src/app/components/solutions/ecosystem-restoration/EcosystemRestorationProcess'
import EcosystemRestorationBenefits from '@/src/app/components/solutions/ecosystem-restoration/EcosystemRestorationBenefits'
import EcosystemRestorationCTA from '@/src/app/components/solutions/ecosystem-restoration/EcosystemRestorationCTA'

export default function EcosystemRestorationPage() {
  return (
    <>
      <EcosystemRestorationHero />
      <EcosystemRestorationFeatures />
      <EcosystemRestorationProcess />
      <EcosystemRestorationBenefits />
      <EcosystemRestorationCTA />
    </>
  )
}

