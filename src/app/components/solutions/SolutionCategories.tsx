'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function SolutionCategories() {
  const t = useTranslations()
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [0, 1, 2, 3]
  const categoryUrls = [
    'carbon-management',
    'circular-economy',
    'water-conservation',
    'ecosystem-restoration'
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-200/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-700">🎯 {t('solutions.categories.badge')}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('solutions.categories.title')}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            {t('solutions.categories.subtitle')}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer ${
                activeCategory === index
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-[1.02]'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-xl'
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {/* Icon */}
              <div className={`text-6xl mb-6 transform transition-transform duration-500 ${
                activeCategory === index ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                {t(`solutions.categories.items.${index}.icon`)}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                activeCategory === index ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-700'
              }`}>
                {t(`solutions.categories.items.${index}.title`)}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {t(`solutions.categories.items.${index}.description`)}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {[0, 1, 2].map((featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">
                      {t(`solutions.categories.items.${index}.features.${featureIndex}`)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                href={`/${locale}/solutions/${categoryUrls[index]}`}
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center font-semibold transition-all duration-300 hover:underline relative z-10 ${
                  activeCategory === index ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-600'
                }`}
              >
                {t('solutions.categories.learnMore')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-3xl transition-opacity duration-500 pointer-events-none ${
                activeCategory === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

