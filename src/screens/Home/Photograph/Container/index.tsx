import styles from './styles.module.scss'

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['card']}>
      <div className={styles['lines']}></div>
      <div className={styles['imgBx']}>
        <img src="/assets/images/photograph.png" />
      </div>
      <div className={styles['content']}>
        <div className={styles['details']}>{children}</div>
      </div>
    </div>
  )
}
