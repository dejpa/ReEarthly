import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'reEarthly - Sustainable Living for a Better Tomorrow',
  description: 'Join us in creating a sustainable future through eco-friendly practices, environmental awareness, and green living solutions.',
  keywords: 'sustainability, environment, eco-friendly, green living, climate change, renewable energy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}