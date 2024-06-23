import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function NotFoundPage() {
  const t = await getTranslations('pages.404')

  return (
    <div className="h-full flex items-center justify-center p-2 flex-1 gap-4 xl:gap-8">
      <Image
        src={t('image')}
        height={260}
        width={260}
        alt={t('alt')}
        className="bg-muted rounded-lg p-2 w-32 xl:w-64"
      />
      <div className="grid gap-2 xl:gap-4">
        <h1 className="text-6xl xl:text-9xl font-bold">404</h1>
        <p className="text-xl xl:text-2xl">{t('message')}</p>
      </div>
    </div>
  )
}
