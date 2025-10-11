'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ContactHero() {
  const t = useTranslations()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image
            src="/contact.webp"
            alt="Environmental Solutions"
            fill
            className="object-cover object-center"
            priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-emerald-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <span className="text-sm font-semibold text-white">💬 {t('contact.hero.badge')}</span>
        </div>
      
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
          {t('contact.hero.title')}
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
          {t('contact.hero.description')}
        </p>
      </div>
    </section>
  )
}


