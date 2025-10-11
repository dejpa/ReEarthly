'use client'

import { useTranslations } from 'next-intl'

export default function WaterConservationBenefits() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-900 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              {t('solutions.waterConservation.benefits.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('solutions.waterConservation.benefits.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="group bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {t(`solutions.waterConservation.benefits.items.${index}.icon`)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`solutions.waterConservation.benefits.items.${index}.title`)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(`solutions.waterConservation.benefits.items.${index}.description`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[0, 1, 2].map((index) => (
            <div key={index} className="text-center bg-gradient-to-br from-cyan-900 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-5xl font-black mb-2">{t(`solutions.waterConservation.benefits.stats.${index}.value`)}</div>
              <div className="text-slate-300 font-medium">{t(`solutions.waterConservation.benefits.stats.${index}.label`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

