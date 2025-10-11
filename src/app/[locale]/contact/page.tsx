'use client'

import ContactHero from '@/src/app/components/contact/ContactHero'
import ContactForm from '@/src/app/components/contact/ContactForm'
import ContactInfo from '@/src/app/components/contact/ContactInfo'
import ContactMap from '@/src/app/components/contact/ContactMap'

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </>
  )
}


