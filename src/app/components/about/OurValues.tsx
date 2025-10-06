'use client'

import { useTranslations } from 'next-intl'

export default function OurValues() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.values.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.values.subtitle')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gradient-blue/10 to-gradient-green/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {t(`about.values.values.${index}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`about.values.values.${index}.description`)}
              </p>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gradient-blue to-gradient-green rounded-3xl p-12 text-white">
            <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
              {t('about.values.quote.text')}
            </blockquote>
            <cite className="text-lg text-primary-100">
              {t('about.values.quote.author')}
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
