import { FadeIn } from '@/components/animation/fade-in'
import { ITechCategory } from '@/config/techs'
import { cn } from '@/lib/utils'
import { Link } from '@/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

interface ITechnologiesProps {
  techs: ITechCategory[]
}

export async function Technologies({ techs }: ITechnologiesProps) {
  const t = await getTranslations('config.technologies')

  return (
    <section className="flex flex-col gap-6 lg:gap-8">
      {techs.map(({ title, items }) => (
        <div id={title.toLowerCase()} key={title} className="flex flex-col gap-2 lg:gap-4">
          <FadeIn
            as="h2"
            className="font-bold text-lg"
            delay={0.1}
            duration={0.5}
            startOnScrollIntersect
          >
            {/* eslint-disable-next-line */}
            {t(`categories.${title}` as any)}
          </FadeIn>
          <FadeIn
            as="ul"
            delay={0.1}
            duration={0.5}
            to="top"
            startOnScrollIntersect
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            {items.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={cn(
                    'flex items-center gap-2 md:gap-3 rounded-md p-2 md:p-3 min-h-[56px] h-full bg-accent/50 dark:backdrop-blur-2xl hover:bg-accent/90 text-accent-foreground transition-colors',
                    'focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-ring'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={cn(
                      'p-1.5 md:p-2 flex items-center justify-center rounded-lg relative overflow-hidden',
                      item.invert && 'dark:invert'
                    )}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="z-10"
                      loading="lazy"
                    />
                    <Image
                      src={item.icon}
                      alt=""
                      width={8}
                      height={8}
                      className="blur-md absolute inset-0 w-[120%] h-[120%] opacity-80 z-0"
                    />
                  </div>
                  <span className="text-xs md:text-sm">{item.name}</span>
                </Link>
              </li>
            ))}
          </FadeIn>
        </div>
      ))}
    </section>
  )
}
