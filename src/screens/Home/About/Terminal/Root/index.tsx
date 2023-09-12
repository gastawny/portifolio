import styles from './styles.module.scss'

export function Root({ children, process }: { children: React.ReactNode; process: string }) {
  return (
    <div className={styles['terminal']}>
      <span className="md:text-sm 2xl:text-base absolute left-1/2 -translate-x-1/2 mt-[0.125rem] 2xl:mt-1 opacity-60">
        {process}
      </span>
      <div className={styles['topBarButtons']}></div>
      {children}
    </div>
  )
}
