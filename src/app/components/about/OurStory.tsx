'use client'

import { useTranslations } from 'next-intl'

export default function OurStory() {
  const t = useTranslations()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.story.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('about.story.subtitle')}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
            <p className="text-lg mb-8">
              {t('about.story.content')}
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {[0, 1, 2].map((index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                        <div className="text-primary-600 font-bold text-lg mb-2">
                          {t(`about.story.milestones.${index}.year`)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {t(`about.story.milestones.${index}.title`)}
                        </h3>
                        <p className="text-gray-600">
                          {t(`about.story.milestones.${index}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
