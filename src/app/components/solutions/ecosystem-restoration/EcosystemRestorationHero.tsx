'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function EcosystemRestorationHero() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-slate-800">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="absolute top-24 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center text-sm text-slate-300">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">{t('solutions.ecosystemRestoration.breadcrumb.home')}</Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/solutions`} className="hover:text-white transition-colors">{t('solutions.ecosystemRestoration.breadcrumb.solutions')}</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{t('solutions.ecosystemRestoration.breadcrumb.current')}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <span className="text-sm font-semibold text-white">🌱 {t('solutions.ecosystemRestoration.hero.badge')}</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
          {t('solutions.ecosystemRestoration.hero.title')}
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          {t('solutions.ecosystemRestoration.hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-white text-slate-900 font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            {t('solutions.ecosystemRestoration.hero.primaryCTA')}
          </button>
          
          <button className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            {t('solutions.ecosystemRestoration.hero.secondaryCTA')}
          </button>
        </div>
      </div>
    </section>
  )
}

