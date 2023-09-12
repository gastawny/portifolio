import styles from './styles.module.scss'
import { GitHub, LinkExternal } from '@/components/svgs'
import { Technology } from '../Technology'
import { Bg, BoxContainer } from './styles'
import Link from 'next/link'

interface IProjectProps {
  title: string
  technologies: string[]
  text: string
  link: string
  githubLink: string
  type: string
  image: string
}

export function Project({
  title,
  technologies,
  text,
  link,
  githubLink,
  type,
  image,
}: IProjectProps) {
  return (
    <div className={styles['project-container']}>
      <Bg>
        <img
          alt={`Image about ${title} project`}
          className="w-[85%] sm:w-[70%] rounded-2xl"
          src={`/assets/images/${image}`}
          loading="lazy"
        />
      </Bg>
      <BoxContainer type={type}>
        <div className={styles.box}>
          <div className={styles.border}>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.links}>
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`link to ${title} github project`}
                  >
                    <GitHub responsiveSize={{ sm: '2.25rem', xl: '1.75rem', '2xl': '2rem' }} />
                  </Link>
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`link to ${title} website project`}
                  >
                    <LinkExternal
                      responsiveSize={{ sm: '2.8125rem', xl: '2.1875rem', '2xl': '2.5rem' }}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-[0.35rem] 2xl:gap-2">
                {technologies.map((technology) => (
                  <Technology technology={technology} />
                ))}
              </div>
              <p className={styles.text}>{text}</p>
            </div>
          </div>
        </div>
      </BoxContainer>
    </div>
  )
}
