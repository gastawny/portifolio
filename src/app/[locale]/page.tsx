import { FadeIn } from '@/components/animation/fade-in'
import { Locale } from '@/navigation'
import { Home } from '@/screens/Home'
import { getTranslations, unstable_setRequestLocale as setRequestLocale } from 'next-intl/server'

interface HomePageProps {
  params: {
    locale: Locale
  }
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  setRequestLocale(locale)

  const t = await getTranslations('pages.home')

  return (
    <div className="container max-w-4xl py-14 flex flex-col h-full justify-center gap-6">
      <Home.PresentationHead />
      <FadeIn className="grid w-full gap-2 card" duration={0.5}>
        <Home.SectionTitle title={t('about.title')} link={t('about.link')} href="/about" />
        <p className="leading-relaxed text-muted-foreground">{t('about.userDescription')}</p>
      </FadeIn>
    </div>
  )
}
