import { Link } from '@/navigation'
import { getTranslations } from 'next-intl/server'
import { FadeIn } from '@/components/animation/fade-in'
import { TechStackBadges } from './tech-stack-badges'
import Image from 'next/image'

export async function PresentationHead() {
  const userData = await getTranslations('config.userData')

  return (
    <div>
      <div className="flex gap-6 items-center">
        <FadeIn className="h-24 w-24 aspect-square rounded-lg overflow-hidden">
          <Image
            src={userData('avatarUrl')}
            alt={userData('avatarAltDescription')}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </FadeIn>
        <div className="flex-1">
          <FadeIn as="h1" className="font-bold text-2xl sm:text-3xl" delay={0.1} duration={0.5}>
            {userData('name')}
          </FadeIn>
          <FadeIn as="span" className="text-muted-foreground block" delay={0.2} duration={0.5}>
            {userData('role')}{' '}
            {userData('company.name') ? (
              <>
                @{' '}
                <Link
                  href={userData('company.url')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <span className="underline text-secondary">{userData('company.name')}</span>
                </Link>
              </>
            ) : null}
          </FadeIn>
          <TechStackBadges />
        </div>
      </div>
      <TechStackBadges className="flex xs:hidden justify-center" />
    </div>
  )
}
