'use client'

import { useTranslations } from 'next-intl'

export default function SolutionImpact() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-700">📊 {t('solutions.impact.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('solutions.impact.title')}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            {t('solutions.impact.subtitle')}
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {t(`solutions.impact.stats.${index}.icon`)}
              </div>

              {/* Value */}
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {t(`solutions.impact.stats.${index}.value`)}
              </div>

              {/* Label */}
              <div className="text-slate-600 font-medium">
                {t(`solutions.impact.stats.${index}.label`)}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            {t('solutions.impact.caseStudiesTitle')}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[0, 1].map((index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Company Name */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                    {t(`solutions.impact.caseStudies.${index}.company`)}
                  </div>
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {t(`solutions.impact.caseStudies.${index}.icon`)}
                  </div>
                </div>

                {/* Industry */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                  {t(`solutions.impact.caseStudies.${index}.industry`)}
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">{t('solutions.impact.challengeLabel')}</h4>
                  <p className="text-slate-600">
                    {t(`solutions.impact.caseStudies.${index}.challenge`)}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">{t('solutions.impact.solutionLabel')}</h4>
                  <p className="text-slate-600">
                    {t(`solutions.impact.caseStudies.${index}.solution`)}
                  </p>
                </div>

                {/* Results */}
                <div className="border-t border-slate-200 pt-4 mt-4">
                  <h4 className="font-bold text-slate-900 mb-3">{t('solutions.impact.resultsLabel')}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[0, 1].map((resultIndex) => (
                      <div key={resultIndex} className="text-center p-3 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {t(`solutions.impact.caseStudies.${index}.results.${resultIndex}.value`)}
                        </div>
                        <div className="text-sm text-slate-600">
                          {t(`solutions.impact.caseStudies.${index}.results.${resultIndex}.label`)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

