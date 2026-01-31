'use client'

import { Button } from '@/components/ui/button'
import { FloatButton } from '@/components/ui/float-button'
import { Icon } from '@/components/ui/icon'
import { Link } from '@/navigation'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Moon, Sun } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

export function NavBar() {
  const currentLocale = useLocale()
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const t = useTranslations('components.settingsToggle')

  function getPathWithoutLocale(pathname: string, locale: string) {
    const regex = new RegExp(`^/${locale}(?=/|$)`, 'i')
    return pathname.replace(regex, '') || '/'
  }

  return (
    <FloatButton>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <span>{theme === 'dark' ? t('theme.light') : t('theme.dark')}</span>
        </TooltipContent>
      </Tooltip>
      {currentLocale !== 'en' && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" asChild>
              <Link href={getPathWithoutLocale(pathname, currentLocale)} locale={'en'}>
                <Icon.flagUs className="rounded" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <span>{t('language.en')}</span>
          </TooltipContent>
        </Tooltip>
      )}
      {currentLocale !== 'pt-BR' && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" asChild>
              <Link href={getPathWithoutLocale(pathname, currentLocale)} locale={'pt-BR'}>
                <Icon.flagBr className="rounded" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <span>{t('language.pt-BR')}</span>
          </TooltipContent>
        </Tooltip>
      )}
    </FloatButton>
  )
}
