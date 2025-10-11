'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function AboutHero() {
  const t = useTranslations()

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about-hero.webp"
          alt="About ReEarthly - Environmental sustainability and green technology"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Minimal gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
        
        {/* Subtle animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Modern Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-700">🌱 {t('about.hero.badge')}</span>
          </div>
          
          {/* Modern Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('about.hero.title')}
            </span>
          </h1>
          
          {/* Modern Subtitle */}
          <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-4xl mx-auto font-medium drop-shadow-lg px-8 py-6 rounded-2xl backdrop-blur-sm">
            {t('about.hero.subtitle')}
          </p>
          
          {/* Modern Description */}
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg px-6 py-4 rounded-xl backdrop-blur-sm">
            {t('about.hero.description')}
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">{t('about.hero.primaryCTA')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl hover:bg-white hover:border-slate-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
              {t('about.hero.secondaryCTA')}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}
