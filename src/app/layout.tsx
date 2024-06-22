import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Gabriel Stawny',
  description: 'Gabriel Stawny Portifolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <body className="font-ubuntu">{children}</body>
    </html>
  )
}
