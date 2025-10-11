'use client'

import { useTranslations } from 'next-intl'

export default function WaterConservationFeatures() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-900 via-blue-800 to-slate-800 bg-clip-text text-transparent">
              {t('solutions.waterConservation.features.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('solutions.waterConservation.features.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-cyan-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {t(`solutions.waterConservation.features.items.${index}.icon`)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                {t(`solutions.waterConservation.features.items.${index}.title`)}
              </h3>
              <p className="text-slate-600 leading-relaxed">{t(`solutions.waterConservation.features.items.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

