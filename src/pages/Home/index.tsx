import './Home.scss'
import About from "./About"
import Photograph from "./Photograph"
import Skills from './Skills'
import { ScrollProvider } from 'contexts/Scroll'
import BackGroundSVG from 'components/BackgroundSVG'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <ScrollProvider>
            <motion.div
                className='Home'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .15 }}
            >
                <BackGroundSVG />
                <Photograph />
                <About />
                <Skills />
            </motion.div>
        </ScrollProvider>
    )
}

export default Home