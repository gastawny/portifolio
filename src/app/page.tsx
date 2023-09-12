import styles from './styles.module.scss'

import Home from '@/screens/Home'

const HomePage = () => {
  return (
    <div className={styles['container']}>
      <Home.Photograph />
      <Home.About />
      <Home.Skills />
    </div>
  )
}

export default HomePage
