import { IconName } from '@/components/ui/icon'

export type AppLocale = {
  label: string
  name: string
  icon: IconName
}

export const appLocales: AppLocale[] = [
  { label: 'English', name: 'en', icon: 'flagUs' },
  { label: 'Português', name: 'pt-BR', icon: 'flagBr' },
]
