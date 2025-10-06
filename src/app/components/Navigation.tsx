'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { mainNavLinks } from '@/src/app/constants/navLinks'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations()

  // Extract locale from pathname
  const locale = pathname.split('/')[1] || 'en'

  const availableLocales = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  const handleLanguageToggle = () => {
    const newLang = locale === 'en' ? 'fr' : 'en'
    
    // Replace the current locale in the pathname
    const segments = pathname.split('/')
    if (segments[1] && ['en', 'fr'].includes(segments[1])) {
      segments[1] = newLang
    } else {
      segments.splice(1, 0, newLang)
    }
    const newPath = segments.join('/')
    
    router.push(newPath)
  }

  // Get current path without locale for generating locale-aware links
  const getCurrentPathWithoutLocale = () => {
    const segments = pathname.split('/')
    if (segments[1] && ['en', 'fr'].includes(segments[1])) {
      return segments.slice(2).join('/') || ''
    }
    return segments.slice(1).join('/') || ''
  }

  const currentPathWithoutLocale = getCurrentPathWithoutLocale()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-gradient-blue to-gradient-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-200">ReEarthly</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavLinks.map((item) => {
              const isActive = pathname === `/${locale}${item.href}` || 
                             (item.href === '/' && pathname === `/${locale}`)
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-primary-600 bg-primary-50 border-b-2 border-primary-600' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                  title={item.description}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              )
            })}
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLanguageToggle}
              className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-all duration-200 group"
              title={`Switch to ${locale === 'en' ? 'French' : 'English'}`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                {locale === 'en' ? '🇺🇸' : '🇫🇷'}
              </span>
              <span className="font-semibold">{locale.toUpperCase()}</span>
            </button>
            
            <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-gradient-blue to-gradient-green hover:from-primary-600 hover:to-secondary-600 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              {t('navigation.getStarted')}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
              {mainNavLinks.map((item) => {
                const isActive = pathname === `/${locale}${item.href}` || 
                               (item.href === '/' && pathname === `/${locale}`)
                return (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-600' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    title={item.description}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                )
              })}
              <div className="pt-2 border-t border-gray-200">
                <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200">
                  {t('navigation.getStarted')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}