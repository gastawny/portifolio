import {
  ArrowUpFromLineIcon,
  ArrowUpRightIcon,
  BookOpenIcon,
  CheckIcon,
  ChevronRightIcon,
  DotIcon,
  DownloadIcon,
  FolderDotIcon,
  GithubIcon,
  HomeIcon,
  LaptopIcon,
  LinkedinIcon,
  LucideProps,
  MailIcon,
  MenuIcon,
  MoonIcon,
  NewspaperIcon,
  SettingsIcon,
  ShieldAlertIcon,
  SunIcon,
  TwitchIcon,
  TwitterIcon,
  XIcon,
  createLucideIcon,
  type LucideIcon,
  MessageSquareIcon,
  TrashIcon,
  Info,
  InstagramIcon,
} from 'lucide-react'

export const Icon = {
  arrowUpFromLine: ArrowUpFromLineIcon,
  arrowUpRight: ArrowUpRightIcon,
  alert: ShieldAlertIcon,
  bookOpen: BookOpenIcon,
  check: CheckIcon,
  chevronRight: ChevronRightIcon,
  dotFilled: DotIcon,
  download: DownloadIcon,
  folderDot: FolderDotIcon,
  github: GithubIcon,
  hamburger: MenuIcon,
  house: HomeIcon,
  laptop: LaptopIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
  messageSquare: MessageSquareIcon,
  moon: MoonIcon,
  newspaper: NewspaperIcon,
  settings: SettingsIcon,
  sun: SunIcon,
  trash: TrashIcon,
  twitch: TwitchIcon,
  twitter: TwitterIcon,
  x: XIcon,
  info: Info,
  instagram: InstagramIcon,
  strava: createLucideIcon('Strava', [
    [
      'path',
      {
        d: 'm15.4 18-2.1-4.2h-3l5 10.2 5.2-10.2h-3m-7-5.6 2.8 5.6h4.2L10.5 0l-7 13.8h4.1',
        fill: 'currentColor',
        stroke: 'none',
        key: 'strava-icon',
      },
    ],
  ]),
  spotify: createLucideIcon('Spotify', [
    [
      'path',
      {
        d: 'M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z',
        fill: '#1ED760',
        stroke: 'transparent',
        key: 'spotify-icon',
      },
    ],
  ]),
  flagUs: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path fill="#eee" d="M8 0h8v2l-1 1 1 1v2l-1 1 1 1v2l-1 1 1 1v2l-8 1-8-1v-2l1-1-1-1V8z" />
      <path fill="#d80027" d="M7 2h9v2H7zm0 4h9v2H8zm-7 4h16v2H0zm0 4h16v2H0z" />
      <path fill="#0052b4" d="M0 0h8v8H0z" />
      <path
        fill="#eee"
        d="m5.8 7.6 1.8-1.3H5.4l1.8 1.3-.7-2.1zm-2.5 0 1.8-1.3H2.9l1.8 1.3L4 5.5zm-2.5 0 1.8-1.3H.4l1.8 1.3-.7-2.1zm5-2.5 1.8-1.3H5.4L7.2 5 6.5 3zM3.3 5l1.8-1.3H2.9L4.7 5 4 3zM.8 5l1.8-1.3H.4L2.2 5 1.5 3zm5-2.6 1.8-1.3H5.4l1.8 1.3-.7-2zm-2.5 0 1.8-1.3H2.9l1.8 1.3-.7-2zm-2.5 0 1.8-1.3H.4l1.8 1.3-.7-2z"
      />
    </svg>
  ),
  flagBr: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path fill="#6da544" d="M0 0h16v16H0z" />
      <path fill="#ffda44" d="M8 3.1 14.6 8 8 12.9 1.4 8z" />
      <path fill="#eee" d="m5.4 7-.2 1 5 1.6q.5-.5.5-1C9.5 6.4 7 6 5.4 6.8" />
      <path
        fill="#0052b4"
        d="M8 5.2A3 3 0 0 0 5.4 7a6 6 0 0 1 5.3 1.6A3 3 0 0 0 8 5.2M6.6 7.8 5.2 8a2.8 2.8 0 0 0 5 1.6 5 5 0 0 0-3.6-1.8"
      />
    </svg>
  ),
}
export type IconType = LucideIcon
export type IconName = keyof typeof Icon

interface DynamicIconProps extends LucideProps {
  name: IconName
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = Icon[name]
  return <IconComponent {...props} />
}
