import BackGroundSVG from 'components/BackgroundSVG'
import './Projects.scss'
import { motion } from 'framer-motion'

const Projects = () => (
    <motion.div
        className='Projects'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .1 }}
    >
        <BackGroundSVG />
    </motion.div>
)

export default Projects