export const projectsList = [
  {
    id: 'shockwave',
    name: 'Shockwave',
    projectUrl: '-',
    sourceUrl: 'https://github.com/gastawny/shockwave',
    imagePreviewUrl: '/images/projects/shockwave.webp',
  },
  {
    id: 'syncgym',
    name: 'Syncgym',
    projectUrl: '-',
    sourceUrl: 'https://github.com/syncgym/api',
    imagePreviewUrl: '/images/projects/syncgym.webp',
  },
] as const

export type ProjectModel = {
  id: (typeof projectsList)[number]['id']
  name: string
  projectUrl?: string
  sourceUrl: string
  imagePreviewUrl: string
}
