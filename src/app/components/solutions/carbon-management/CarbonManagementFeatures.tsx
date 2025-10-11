'use client'

import { useTranslations } from 'next-intl'

export default function CarbonManagementFeatures() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('solutions.carbonManagement.features.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('solutions.carbonManagement.features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {t(`solutions.carbonManagement.features.items.${index}.icon`)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {t(`solutions.carbonManagement.features.items.${index}.title`)}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t(`solutions.carbonManagement.features.items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

