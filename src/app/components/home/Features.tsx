'use client'

import { useTranslations, useLocale } from 'next-intl'

export default function Features() {
  const t = useTranslations()
  const locale = useLocale()

  const features = [
    {
      icon: '🌱',
      title: t('features.sustainableLiving.title'),
      description: t('features.sustainableLiving.description'),
      color: 'from-gradient-green to-gradient-green/80'
    },
    {
      icon: '⚡',
      title: t('features.renewableEnergy.title'),
      description: t('features.renewableEnergy.description'),
      color: 'from-gradient-blue to-gradient-blue/80'
    },
    {
      icon: '♻️',
      title: t('features.wasteReduction.title'),
      description: t('features.wasteReduction.description'),
      color: 'from-gradient-blue to-gradient-green'
    },
    {
      icon: '🌍',
      title: t('features.carbonTracking.title'),
      description: t('features.carbonTracking.description'),
      color: 'from-gradient-green to-gradient-blue'
    },
    {
      icon: '🌿',
      title: t('features.communityGardens.title'),
      description: t('features.communityGardens.description'),
      color: 'from-gradient-green to-gradient-blue'
    },
    {
      icon: '📊',
      title: t('features.impactAnalytics.title'),
      description: t('features.impactAnalytics.description'),
      color: 'from-gradient-blue to-gradient-green'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {locale === 'en' ? 'Explore All Solutions' : 'Explorer Toutes les Solutions'}
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
