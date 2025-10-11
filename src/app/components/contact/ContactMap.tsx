'use client'

import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function ContactMap() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('contact.map.title')}
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            {t('contact.map.subtitle')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden shadow-2xl border border-slate-300">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
            <div className="text-center p-12">
              <div className="mb-6">
                <FontAwesomeIcon icon={faMapLocationDot} className="text-blue-600 text-7xl" />
              </div>
              <p className="text-2xl font-bold text-slate-700">{t('contact.map.placeholder')}</p>
              <p className="text-slate-600 mt-2">{t('contact.map.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

