import createMiddleware from 'next-intl/middleware'
import { appLocales } from '@/config/appLocales'

import { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country') || request.geo?.country || null

  let defaultLocale = 'en'
  if (country === 'BR') {
    defaultLocale = 'pt-BR'
  }

  return createMiddleware({
    locales: appLocales.map((locale) => locale.name),
    defaultLocale,
  })(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
