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
    <h1 className="title">My Projects</h1>
    <h2 className="sub-title">Some personal projects</h2>
    <div className="projects-container">
      {projects.map((project) => (
        <Project key={uuidv4()} {...project} />
      ))}
    </div>
  </motion.div>
)

export default Projects
