'use client'

import { useTranslations } from 'next-intl'

export default function WaterConservationCTA() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">{t('solutions.waterConservation.cta.title')}</h2>
        <p className="text-xl text-slate-200 mb-12 leading-relaxed">{t('solutions.waterConservation.cta.description')}</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-white text-slate-900 font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            {t('solutions.waterConservation.cta.primaryButton')}
          </button>
          
          <button className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            {t('solutions.waterConservation.cta.secondaryButton')}
          </button>
        </div>
      </div>
    </section>
  )
}

