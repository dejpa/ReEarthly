'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { formatCompactNumber } from '@/src/i18n'

export default function Stats() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const [counts, setCounts] = useState({
    trees: 0,
    communities: 0,
    countries: 0,
    impact: 0
  })

  const statsData = [
    {
      number: 1250000,
      suffix: '+',
      label: t('stats.items.0.label'),
      description: t('stats.items.0.description')
    },
    {
      number: 2500,
      suffix: '+',
      label: t('stats.items.1.label'),
      description: t('stats.items.1.description')
    },
    {
      number: 75,
      suffix: '+',
      label: t('stats.items.2.label'),
      description: t('stats.items.2.description')
    },
    {
      number: 99,
      suffix: '%',
      label: t('stats.items.3.label'),
      description: t('stats.items.3.description')
    }
  ]

  useEffect(() => {
    // Animate counters
    const animateCount = (target: number, setter: (value: number) => void, duration: number = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
      
      return timer
    }

    const timers = [
      animateCount(1250000, (value) => setCounts(prev => ({ ...prev, trees: value }))),
      animateCount(2500, (value) => setCounts(prev => ({ ...prev, communities: value }))),
      animateCount(75, (value) => setCounts(prev => ({ ...prev, countries: value }))),
      animateCount(99, (value) => setCounts(prev => ({ ...prev, impact: value })))
    ]

    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gradient-blue/10 to-gradient-green/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B0E4' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-700">📊 {t('stats.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('stats.title')}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Modern Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-slate-200/50 hover:border-slate-300/50 min-w-0 h-full flex flex-col">
                {/* Modern Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {index === 0 && '🌳'}
                      {index === 1 && '🏘️'}
                      {index === 2 && '🌍'}
                      {index === 3 && '♻️'}
                    </span>
                  </div>
                </div>

                {/* Modern Number */}
                <div className="text-center mb-3 flex-grow">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {index === 0 && formatCompactNumber(counts.trees, locale)}
                    {index === 1 && formatCompactNumber(counts.communities, locale)}
                    {index === 2 && formatCompactNumber(counts.countries, locale)}
                    {index === 3 && formatCompactNumber(counts.impact, locale)}
                    <span className="text-lg">{stat.suffix}</span>
                  </div>
                </div>

                {/* Modern Label */}
                <h3 className="text-sm font-bold text-slate-900 mb-2 text-center group-hover:text-blue-700 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Modern Description */}
                <p className="text-xs text-slate-600 text-center leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl max-w-5xl mx-auto border border-slate-200/50">
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
                {t('stats.joinMission')}
              </span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              {t('stats.missionDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">{t('stats.getInvolved')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <Link href={`/${locale}/about`}>
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-2xl hover:bg-white hover:border-slate-300 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  {t('stats.learnMore')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
