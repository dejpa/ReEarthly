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
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Modern Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-black text-lg">R</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                ReEarthly
              </span>
            </Link>
          </div>

          {/* Modern Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {mainNavLinks.map((item) => {
              const isActive = pathname === `/${locale}${item.href}` || 
                             (item.href === '/' && pathname === `/${locale}`)
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80 backdrop-blur-sm shadow-sm' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 hover:backdrop-blur-sm'
                  }`}
                  title={item.description}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              )
            })}
          </div>

          {/* Modern Language Toggle & CTA */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLanguageToggle}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 backdrop-blur-sm rounded-xl transition-all duration-300 group"
              title={`Switch to ${locale === 'en' ? 'French' : 'English'}`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {locale === 'en' ? '🇺🇸' : '🇫🇷'}
              </span>
              <span className="font-bold">{locale.toUpperCase()}</span>
            </button>
            
            <button className="hidden md:inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
              {t('navigation.getStarted')}
            </button>

            {/* Modern Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 backdrop-blur-sm transition-all duration-300"
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

        {/* Modern Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-slate-200/50 shadow-xl rounded-b-2xl">
              {mainNavLinks.map((item) => {
                const isActive = pathname === `/${locale}${item.href}` || 
                               (item.href === '/' && pathname === `/${locale}`)
                return (
                  <Link
                    key={item.href}
                    href={`/${locale}${item.href}`}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50/80 backdrop-blur-sm shadow-sm' 
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 hover:backdrop-blur-sm'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    title={item.description}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-slate-200/50">
                <button className="w-full text-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-emerald-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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