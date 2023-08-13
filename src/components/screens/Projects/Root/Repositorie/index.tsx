import styles from './styles.module.scss'
import { IRepositorie } from '@/interfaces/Repositorie'
import { Technology } from '../../Technology'
import Link from 'next/link'
import { GitHub } from '@/components/svgs'

export function Repositorie({ repo, technology, description, url }: IRepositorie) {
  return (
    <div className="flex flex-col justify-around rounded-xl w-full bg-bgColorDark/80 h-32 md:h-24 p-3 md:p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-baseline md:items-center gap-2 md:gap-4">
          <h3 className="text-fontColor font-medium text-2xl md:text-[1.8rem] tracking-wider md:tracking-widest">
            {repo}
          </h3>
          {technology && <Technology technology={technology} />}
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noreferrer"
          className={styles.Link}
          aria-label={`Link to ${repo} repository`}
        >
          <GitHub responsiveSize={{ sm: '2.25rem', xl: '1.75rem', '2xl': '2rem' }} />
        </Link>
      </div>
      <p className="md:text-base tracking-wider md:tracking-widest font-light overflow-hidden whitespace-nowrap text-ellipsis">
        {description}
      </p>
    </div>
  )
}
