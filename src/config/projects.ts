export type ProjectModel = {
  id: string
  name: string
  projectUrl?: string
  sourceUrl?: string
  imagePreviewUrl: string
}

export const projectsList: ProjectModel[] = [
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
]
