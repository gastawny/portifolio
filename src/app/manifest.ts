import { MetadataRoute } from 'next'

/* eslint-disable quotes */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gabriel Stawny',
    short_name: 'Gabriel Stawny',
    description:
      "Hi, I'm Gabriel Stawny, a software developer with focus on performance enhancement. Currently, I'm pursuing my Computer Science degree at the Federal Technological University of Paraná (UTFPR)",
    start_url: '/',
    display: 'standalone',
    background_color: '#020817',
    theme_color: '#020817',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    lang: 'en',
    orientation: 'portrait',
    categories: ['portfolio', 'blog', 'personal', 'website'],
    dir: 'ltr',
  }
}
