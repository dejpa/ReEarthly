'use client'

import { useTranslations, useLocale } from 'next-intl'
import { formatNumber } from '@/src/i18n'

export default function Hero() {
  const t = useTranslations()
  const locale = useLocale()

  const statsData = [
    { number: 1250, label: t('hero.stats.trees') },
    { number: 2500, label: t('hero.stats.communities') },
    { number: 75, label: t('hero.stats.countries') },
    { number: 99, label: t('hero.stats.carbon') }
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/intro.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-emerald-900/10"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm">
              <span className="text-sm font-medium text-blue-700">🌱 Sustainable Future</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl hover:bg-white hover:border-slate-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                {t('hero.secondaryCta')}
              </button>
            </div>

            {/* Modern Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 ">
              {statsData.map((stat, index) => (
                <div key={index} className="group text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:bg-white/80 hover:border-slate-300/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {formatNumber(stat.number, locale)}
                    {index === 3 ? '%' : '+'}
                  </div>
                  <div className="text-sm font-medium text-slate-600 mt-2 group-hover:text-slate-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          {/* <div className="relative">
            <div className="relative z-10">
              <div className="bg-stone-100 opacity-80 rounded-xl shadow-xl p-4 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl border border-gray-100 max-w-xs">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-gradient-blue/20 to-gradient-blue/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-lg">🌱</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">Sustainable Living</h3>
                      <p className="text-xs text-gray-600">Eco-friendly practices</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-gradient-green/20 to-gradient-green/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-lg">♻️</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">Waste Reduction</h3>
                      <p className="text-xs text-gray-600">Smart recycling solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-gradient-blue/20 to-gradient-green/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">Renewable Energy</h3>
                      <p className="text-xs text-gray-600">Clean energy future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
