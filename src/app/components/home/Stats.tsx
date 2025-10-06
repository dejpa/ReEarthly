'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { formatNumber } from '@/src/i18n'

export default function Stats() {
  const t = useTranslations()
  const locale = useLocale()
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
      label: locale === 'en' ? 'Trees Planted' : 'Arbres Plantés',
      description: locale === 'en' ? 'Contributing to reforestation efforts globally' : 'Contribuant aux efforts de reforestation dans le monde'
    },
    {
      number: 2500,
      suffix: '+',
      label: locale === 'en' ? 'Communities Reached' : 'Communautés Atteintes',
      description: locale === 'en' ? 'Local communities actively participating' : 'Communautés locales participant activement'
    },
    {
      number: 75,
      suffix: '+',
      label: locale === 'en' ? 'Countries Involved' : 'Pays Impliqués',
      description: locale === 'en' ? 'Global presence and impact' : 'Présence et impact mondial'
    },
    {
      number: 99,
      suffix: '%',
      label: locale === 'en' ? 'Carbon Neutral' : 'Carbone Neutre',
      description: locale === 'en' ? 'Achieved carbon neutrality in operations' : 'Neutralité carbone atteinte dans les opérations'
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && formatNumber(counts.trees, locale)}
                  {index === 1 && counts.communities.toLocaleString()}
                  {index === 2 && counts.countries}
                  {index === 3 && counts.impact}
                  {stat.suffix}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>

                {/* Icon */}
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gradient-blue to-gradient-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">
                      {index === 0 && '🌳'}
                      {index === 1 && '🏘️'}
                      {index === 2 && '🌍'}
                      {index === 3 && '♻️'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('stats.joinMission')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('stats.missionDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                {t('stats.getInvolved')}
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-base font-medium rounded-lg text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200">
                {t('stats.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
