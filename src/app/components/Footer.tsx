'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { footerSections as footerSectionsConfig, socialLinks, legalLinks } from '@/src/app/constants/navLinks'

export default function Footer() {
  const t = useTranslations()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  
  // Extract locale from pathname (consistent with Navigation component)
  const locale = pathname.split('/')[1] || 'en'

  // Map icons
  const iconMap = {
    faInstagram,
    faXTwitter,
    faLinkedin,
    faEnvelope
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gradient-blue to-gradient-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">ReEarthly</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t('footer.tagline')}</p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-600"
                  aria-label={social.description}
                  title={social.description}
                >
                  <FontAwesomeIcon 
                    icon={iconMap[social.icon as keyof typeof iconMap]} 
                    className="text-white text-lg"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Sections */}
          {footerSectionsConfig.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              
              {/* Section Title */}
              {section.title === 'Solutions' ? (
                <Link href={`/${locale}/solutions`}>
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 hover:text-white transition-colors duration-200 cursor-pointer">
                    {t(`footer.${section.title.toLowerCase()}`)}
                  </h3>
                </Link>
              ) : (
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                  {t(`footer.${section.title.toLowerCase()}`)}
                </h3>
              )}

              {/* Section Links */}
              <ul className="space-y-3">
                {section.links.map((link) => {
                  // Get label: for Solutions, use solutions.json, otherwise use footer.json
                  const label = section.title === 'Solutions' 
                    ? t(`solutions.${link.key}.breadcrumb.current`)
                    : t(`footer.${link.key.replace('-', '')}`)

                  return (
                    <li key={link.key}>
                      <Link
                        href={`/${locale}${link.href}`}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        title={link.description}
                      >
                        {label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-500 text-xs">
                Designed & Developed by{' '}
                <a 
                  href="https://www.melinaniavarani.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-100 transition-colors duration-200"
                >
                  Melina Niavarani
                </a>
                {' '}| © {currentYear} ReEarthly. {t('footer.rights')}
              </p>
              
              {/* Legal Links */}
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <Link 
                    key={link.key}
                    href={`/${locale}${link.href}`} 
                    className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-200"
                    title={link.description}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Made With */}
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-xs">{t('footer.madeWith')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
