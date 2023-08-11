import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { BackGroundSVG } from '@/components/BackgroundSVG'
import localFont from '@next/font/local'
import StyledComponentsRegistry from '@/lib/registry'

const CascadiaCode = localFont({
  src: [
    {
      path: '../../public/fonts/CascadiaCode/CascadiaCode-Light.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/CascadiaCode/CascadiaCode.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/CascadiaCode/CascadiaCode-SemiBold.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/CascadiaCode/CascadiaCode-Bold.woff2',
      weight: '600',
    },
  ],
  variable: '--font-cascadiaCode',
})

const TradeMaker = localFont({
  src: [
    {
      path: '../../public/fonts/trademarker-light.otf',
    },
  ],
  variable: '--font-trademarker',
})

export const metadata: Metadata = {
  title: 'Gabriel Stawny',
  description: 'Gabriel Stawny Portifolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${CascadiaCode.variable} ${TradeMaker.variable}`}>
      <body className="bg-bgColor font-cascadiaCode">
        <StyledComponentsRegistry>
          <div className="relative w-full min-h-screen overflow-hidden">
            <Header />
            {children}
            <BackGroundSVG />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
