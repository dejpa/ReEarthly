'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function CallToAction() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'

  const benefits = [
    t('cta.benefits.0'),
    t('cta.benefits.1'),
    t('cta.benefits.2'),
    t('cta.benefits.3')
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-300/10 to-emerald-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Modern Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium text-white/90">🚀 {t('cta.badge')}</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                {t('cta.title')}
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
              {t('cta.subtitle')}
            </p>

            {/* Modern Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Modern Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href={`/${locale}/contact`}>
                <button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-slate-900 bg-white rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <span className="relative z-10">{t('cta.primaryButton')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  {t('cta.secondaryButton')}
                </button>
              </Link>
            </div>
          </div>

          {/* Modern Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl">
              <div className="space-y-8">
                {/* Modern Progress Bars */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">{t('cta.metrics.carbonFootprint')}</span>
                      <span className="text-emerald-300 font-bold text-lg">-45%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-4 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">{t('cta.metrics.energySavings')}</span>
                      <span className="text-blue-300 font-bold text-lg">+30%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-4 rounded-full w-1/2 transition-all duration-1000 delay-300 ease-out"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">{t('cta.metrics.wasteReduction')}</span>
                      <span className="text-emerald-300 font-bold text-lg">-60%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-4 rounded-full w-4/5 transition-all duration-1000 delay-500 ease-out"></div>
                    </div>
                  </div>
                </div>

                {/* Modern Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  <div className="text-center group">
                    <div className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">1.2M</div>
                    <div className="text-sm text-white/70 font-medium">{t('cta.metrics.treesSaved')}</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-black text-white group-hover:scale-110 transition-transform duration-300">500K</div>
                    <div className="text-sm text-white/70 font-medium">{t('cta.metrics.livesImpacted')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Floating Icons */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group hover:scale-110 transition-transform duration-300">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🌱</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 group hover:scale-110 transition-transform duration-300">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">♻️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
