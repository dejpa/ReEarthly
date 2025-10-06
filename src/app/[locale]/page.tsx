'use client'

import Hero from '@/src/app/components/home/Hero'
import Features from '@/src/app/components/home/Features'
import Stats from '@/src/app/components/home/Stats'
import CallToAction from '@/src/app/components/home/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <CallToAction />
    </>
  )
}

