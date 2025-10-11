'use client'

import { useTranslations } from 'next-intl'

export default function SolutionCTA() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="text-sm font-semibold text-white">🚀 {t('solutions.cta.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            {t('solutions.cta.title')}
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-slate-200 mb-12 leading-relaxed font-light">
            {t('solutions.cta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-10 py-5 bg-white text-slate-900 font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">{t('solutions.cta.primaryButton')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              {t('solutions.cta.secondaryButton')}
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl mb-3">
                  {t(`solutions.cta.benefits.${index}.icon`)}
                </div>
                <div className="text-white font-semibold mb-2">
                  {t(`solutions.cta.benefits.${index}.title`)}
                </div>
                <div className="text-slate-300 text-sm">
                  {t(`solutions.cta.benefits.${index}.description`)}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-slate-400 mb-6">{t('solutions.cta.trustText')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="text-white font-semibold text-lg">
                  {t(`solutions.cta.partners.${index}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

