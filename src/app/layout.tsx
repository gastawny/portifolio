import { Header } from '@/components/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { BackGroundSVG } from '@/components/BackgroundSVG'
import localFont from '@next/font/local'
import { Ubuntu } from '@next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  subsets: ['latin'],
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
    <html lang="en" className={`${TradeMaker.variable} ${ubuntu.variable}`}>
      <body className="bg-bgColor font-ubuntu text-fontColor">
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
