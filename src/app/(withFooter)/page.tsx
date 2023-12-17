import styles from './styles.module.scss'
import Home from '@/screens/Home'

export default async function HomePage() {
  return (
    <div className={styles['container']}>
      <Home.Photograph />
      <Home.About />
      <Home.Skills />
    </div>
  )
}
