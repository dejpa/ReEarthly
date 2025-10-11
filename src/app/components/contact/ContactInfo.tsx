'use client'

import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function ContactInfo() {
  const t = useTranslations()

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent">
              {t('contact.info.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('contact.info.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
              {t('contact.info.email.title')}
            </h3>
            <a href="mailto:contact@reearthly.com" className="text-blue-600 hover:text-blue-700 font-medium">
              contact@reearthly.com
            </a>
          </div>

          {/* Phone */}
          <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faPhone} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
              {t('contact.info.phone.title')}
            </h3>
            <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium">
              +1 (234) 567-890
            </a>
          </div>

          {/* Location */}
          <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faLocationDot} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
              {t('contact.info.location.title')}
            </h3>
            <p className="text-slate-600">
              {t('contact.info.location.address')}
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.info.followUs')}</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/reearthly"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
            </a>
            <a
              href="https://x.com/reearthly"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900 hover:bg-black rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Twitter/X"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl" />
            </a>
            <a
              href="https://linkedin.com/company/reearthly"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

