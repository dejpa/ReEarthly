'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { footerSections as footerSectionsConfig, socialLinks, legalLinks } from '@/src/app/constants/navLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()
  const locale = useLocale()

  // Map footer sections with translations
  const footerSections = footerSectionsConfig.map(section => ({
    title: t(`footer.${section.title.toLowerCase()}`) || section.title,
    links: section.links.map(link => ({
      href: `/${locale}${link.href}`,
      label: t(`footer.${link.key.replace('-', '')}`) || link.label,
      key: link.key,
      description: link.description
    }))
  }))

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gradient-blue to-gradient-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">ReEarthly</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.description}
                  title={social.description}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
               Designed & Developed by <a href="https://www.melinaniavarani.com" target="_blank" className="text-white hover:text-primary-600 transition-colors duration-200">Melina Niavarani</a>| © {currentYear} ReEarthly. {t('footer.rights')}
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={`/${locale}${link.href}`} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    title={link.description}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                {t('footer.madeWith')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}