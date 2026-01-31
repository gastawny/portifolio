import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { ExperienceModel } from '@/config/user'
import { ExperienceModal } from './experience-modal'

interface ExperienceCardProps {
  data: ExperienceModel
}

export function calcDuration(startDate: Date, endDate: Date = new Date()) {
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12
  const diff = months + endDate.getMonth() - startDate.getMonth()

  return {
    years: Math.floor(diff / 12),
    months: diff % 12,
  }
}

export async function ExperienceCard({ data }: ExperienceCardProps) {
  const { company, startDate, endDate, image } = data
  const duration = calcDuration(startDate, endDate)

  const [configT, t] = await Promise.all([
    getTranslations('config'),
    getTranslations('components.experienceCard'),
  ])

  const postion = configT(`roles.${company}.position`)
  const topics = configT.raw(`roles.${company}.topics`)

  return (
    <div className="flex gap-4">
      <div className="rounded-full h-10 w-10 aspect-square flex justify-center items-center ring-1 bg-muted/50 ring-muted-foreground/40 p-1">
        <Image
          src={image}
          width={40}
          height={40}
          alt={`${company} logo`}
          className="rounded-full aspect-square bg-white"
        />
      </div>
      <div className="flex justify-between w-full">
        <dl>
          <dt className="sr-only">{t('company')}</dt>
          <dd className="w-full flex-none text-sm font-medium">{company}</dd>
          <dt className="sr-only">{t('role')}</dt>
          <dd className="text-xs text-muted-foreground">{postion}</dd>
          <dt className="sr-only">{t('date')}</dt>
          <dd className="text-xs text-muted-foreground/80 flex">
            <time className="mt-auto">
              {startDate.getFullYear()} –{' '}
              {!endDate ? t('present') : `${endDate.getFullYear()} • ${t('duration', duration)}`}
            </time>
          </dd>
        </dl>
        <ExperienceModal topics={topics} company={company} />
      </div>
    </div>
  )
}
