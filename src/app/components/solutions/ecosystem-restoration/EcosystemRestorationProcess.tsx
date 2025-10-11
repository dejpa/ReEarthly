'use client'

import { useTranslations } from 'next-intl'

export default function EcosystemRestorationProcess() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-900 via-emerald-800 to-slate-800 bg-clip-text text-transparent">
              {t('solutions.ecosystemRestoration.process.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('solutions.ecosystemRestoration.process.subtitle')}</p>
        </div>

        <div className="space-y-12">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                  <span className="text-4xl font-black text-white">{index + 1}</span>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t(`solutions.ecosystemRestoration.process.steps.${index}.title`)}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {t(`solutions.ecosystemRestoration.process.steps.${index}.description`)}
                </p>
                <ul className="space-y-2">
                  {[0, 1, 2].map((bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{t(`solutions.ecosystemRestoration.process.steps.${index}.bullets.${bulletIndex}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

