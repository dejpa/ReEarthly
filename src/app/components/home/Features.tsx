'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Features() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-700">✨ {t('features.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('features.title')}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Modern Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-slate-300/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              {/* Modern Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Modern Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Modern Call to Action */}
        <div className="text-center">
          <Link href={`/${locale}/solutions`}>
            <button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">{t('features.exploreCta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
