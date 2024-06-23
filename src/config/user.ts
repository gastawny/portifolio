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
]

export const userData = {
  name: 'Gabriel Stawny',
  birthDate: new Date('2004-02-14'),
  languages: ['english', 'portuguese'],
}

export const stack = [
  'NextJS',
  'ReactJS',
  'Spring',
  'Laravel',
  'Svelte',
  'TypeScript',
  'Java',
  'Go',
]
