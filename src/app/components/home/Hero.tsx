'use client'

import { useTranslations, useLocale } from 'next-intl'
import { formatNumber } from '@/src/i18n'

export default function Hero() {
  const t = useTranslations()
  const locale = useLocale()

  const statsData = [
    { number: 1250000, label: t('hero.stats.trees') },
    { number: 2500, label: t('hero.stats.communities') },
    { number: 75, label: t('hero.stats.countries') },
    { number: 99, label: t('hero.stats.carbon') }
  ]

  return (
    <section className="relative bg-gradient-to-br from-gradient-blue/10 via-white to-gradient-green/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B0E4' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                {t('hero.cta')}
                <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-lg font-medium rounded-lg text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 hover:shadow-lg">
                {t('hero.secondaryCta')}
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 group-hover:scale-110 transition-transform duration-200">
                    {formatNumber(stat.number, locale)}
                    {index === 3 ? '%' : '+'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 group-hover:text-primary-600 transition-colors duration-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-3xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gradient-blue/20 to-gradient-blue/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">Sustainable Living</h3>
                      <p className="text-sm text-gray-600">Eco-friendly practices for daily life</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gradient-green/20 to-gradient-green/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">♻️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">Waste Reduction</h3>
                      <p className="text-sm text-gray-600">Smart recycling and upcycling solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gradient-blue/20 to-gradient-green/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">Renewable Energy</h3>
                      <p className="text-sm text-gray-600">Clean energy for a brighter future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gradient-blue/30 to-gradient-blue/50 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-gradient-green/30 to-gradient-green/50 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-gradient-blue/40 to-gradient-green/40 rounded-full opacity-40 animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}
