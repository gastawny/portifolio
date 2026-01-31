import '@/styles/globals.css'
import { Ubuntu } from '@next/font/google'
import { appLocales } from '@/config/appLocales'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { createTranslator } from 'next-intl'
import { Metadata } from 'next'
import { websiteUrl } from '@/config/site'
import { userData } from '@/config/user'
import { InternalizationProvider } from '@/providers/i18n-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  subsets: ['latin'],
})

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

const locales = appLocales.map((locale) => locale.name)

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const isValidLocale = locales.some((cur) => cur === locale)
  if (!isValidLocale) return notFound()

  setRequestLocale(locale)

  return (
    <html lang={locale} className={`${ubuntu.variable}`} suppressHydrationWarning>
      <body
        className="
          font-ubuntu 
          overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-background
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-primary
        "
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            <InternalizationProvider locale={locale}>{children}</InternalizationProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: RootLayoutProps): Promise<Metadata> {
  const messages = (await import(`/messages/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  const languages: Record<string, URL> = {}

  locales.map((loc) => {
    languages[loc] = new URL(`${websiteUrl}/${loc}`)
  })

  const title = `${userData.name} - ${t('config.userData.role')}`

  return {
    title: {
      template: '%s',
      default: title,
    },
    description: t('config.metadata.description'),
    authors: [
      {
        name: userData.name,
        url: websiteUrl,
      },
    ],
    metadataBase: new URL(websiteUrl),
    creator: userData.name,
    publisher: userData.name,
    alternates: {
      canonical: websiteUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      title: title,
      description: t('config.metadata.description'),
      url: '/opengraph-image',
    },
    applicationName: title,
  }
}
