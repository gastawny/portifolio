import styles from './styles.module.scss'

interface ICardProps {
  children: React.ReactNode
}

export function Card({ children }: ICardProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['box']}>
        <span></span>
        {children}
      </div>
    </div>
  )
}
