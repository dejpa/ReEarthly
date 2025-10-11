'use client'

import { useTranslations } from 'next-intl'

export default function SolutionFeatures() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #1e40af 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-700">⚡ {t('solutions.features.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('solutions.features.title')}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            {t('solutions.features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {t(`solutions.features.items.${index}.icon`)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {t(`solutions.features.items.${index}.title`)}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {t(`solutions.features.items.${index}.description`)}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">
            {t('solutions.features.ctaText')}
          </p>
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {t('solutions.features.ctaButton')}
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

