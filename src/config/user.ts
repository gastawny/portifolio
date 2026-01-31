import { IconName } from '@/components/ui/icon'

export type UserSocialModel = {
  icon: IconName
  name: string
  href: string
}

export const socials: UserSocialModel[] = [
  {
    icon: 'github',
    name: 'Github',
    href: 'https://github.com/gastawny',
  },
  {
    icon: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-stawny',
  },
  {
    icon: 'mail',
    name: 'Email',
    href: 'mailto:gastawny@gmail.com',
  },
  {
    icon: 'strava',
    name: 'Strava',
    href: 'https://www.strava.com/athletes/141218751',
  },
  {
    icon: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/gastawny',
  },
]

export type ExperienceModel = {
  company: keyof IntlMessages['config']['roles']
  startDate: Date
  endDate?: Date
  image: string
  type: 'work' | 'educational'
  highlight?: boolean
}

export const experiencesList: ExperienceModel[] = [
  {
    company: 'Avalia Sistemas',
    startDate: new Date('2024-03-01'),
    image: '/images/experiences/avalia.png',
    type: 'work',
    highlight: true,
  },
  {
    company: 'UTFPR',
    startDate: new Date('2022-02-01'),
    endDate: new Date('2026-02-01'),
    image: '/images/experiences/utfpr.png',
    type: 'educational',
  },
]

export const userData = {
  name: 'Gabriel Stawny',
  birthDate: new Date('2004-02-14'),
  languages: ['english', 'portuguese'],
}

export const stack = ['NextJS', 'ReactJS', 'Spring', 'Laravel', 'Svelte', 'TypeScript', 'ElysiaJS']
