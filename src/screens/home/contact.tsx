import { FadeIn } from '@/components/animation/fade-in'
import { DynamicIcon, Icon } from '@/components/ui/icon'
import { UserSocialModel } from '@/config/user'
import Link from 'next/link'

interface IContactProps {
  socials: UserSocialModel[]
}

export function Contact({ socials }: IContactProps) {
  return (
    <div className="divide-y divide-white/10">
      {socials.map((social, index) => (
        <FadeIn
          startOnScrollIntersect
          to={index % 2 === 0 ? 'left' : 'right'}
          delay={0.1 * index}
          id="project"
          duration={0.4}
          key={social.name}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 py-4 group hover:text-primary transition-colors"
          >
            <div className="flex items-center gap-4 min-w-0">
              <DynamicIcon name={social.icon} className="w-9 h-9 flex-shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-base text-foreground truncate">
                  {social.name}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {social.href
                    .replace(/^https?:\/\//, '')
                    .replace(/^www\./, '')
                    .replace(/^mailto:/, '')}
                </span>
              </div>
            </div>
            <Icon.chevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </FadeIn>
      ))}
    </div>
  )
}
