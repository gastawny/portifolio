import './Home.scss'
import Photograph from './Photograph'
import { ScrollProvider } from 'contexts/Scroll'
import BackGroundSVG from 'components/BackgroundSVG'
import { motion } from 'framer-motion'
import { lazy } from 'react'

const About = lazy(() => import('./About'))
const Skills = lazy(() => import('./Skills'))

const Home = () => (
  <ScrollProvider>
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <BackGroundSVG />
      <Photograph />
      <About />
      <Skills />
    </motion.div>
  </ScrollProvider>
)

export default Home
