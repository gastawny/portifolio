import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { BackGroundSVG } from '@/components/BackgroundSVG'

export const metadata: Metadata = {
  title: 'Gabriel Stawny',
  description: 'Gabriel Stawny Portifolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bgColor">
        <div className="relative w-full min-h-screen overflow-hidden">
          <Header />
          {children}
          <BackGroundSVG />
        </div>
      </body>
    </html>
  )
}
