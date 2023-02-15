import './Projects.scss'
import BackGroundSVG from 'components/BackgroundSVG'
import { motion } from 'framer-motion'
import projects from 'json/projects.json'
import Project from './Project'
import { v4 as uuidv4 } from 'uuid'

const Projects = () => (
  <motion.div
    className="Projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.1 }}
  >
    <BackGroundSVG />
    <div className="Projects-Container">
      {projects.map((project) => (
        <Project key={uuidv4()} {...project} />
      ))}
    </div>
  </motion.div>
)

export default Projects
