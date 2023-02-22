import './Projects.scss'
import BackGroundSVG from 'components/BackgroundSVG'
import { motion } from 'framer-motion'
import projects from 'json/projects.json'
import Project from './Project'
import { v4 as uuidv4 } from 'uuid'
import Repositorie from './Repositorie'
import { useEffect, useState } from 'react'
import { IRepositorie } from 'interfaces/Repositorie'

const Projects = () => {
  const [repositories, setRepositories] = useState<IRepositorie[]>([])
  const getRepositoriesAPI: IRepositorie[] = []

  useEffect(() => {
    fetch('https://api.github.com/users/gastawny/repos')
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line
        data.forEach((repositorie: any) => {
          const {
            language: technology,
            description,
            name: repo,
            html_url: url,
            pushed_at,
          } = repositorie

          if (!getRepositoriesAPI.some((actualRepo) => actualRepo.repo === repo))
            getRepositoriesAPI.push({ repo, technology, description, url, pushed_at })
        })
      })
      .then(() => {
        getRepositoriesAPI
          .sort(
            // eslint-disable-next-line
            (a: any, b: any) => new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()
          )
          .reverse()
        setRepositories(() => getRepositoriesAPI)
      })
  }, [])

  return (
    <motion.div
      className="Projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <BackGroundSVG />
      <h1 className="title">My Projects</h1>
      <p className="sub-title">Some personal projects</p>
      <div className="projects-container">
        {projects.map((project) => (
          <Project key={uuidv4()} {...project} />
        ))}
      </div>
      <h2 className="repositories-title">Repositories</h2>
      <p className="repositories-sub-title">
        A list of all of the public repositories on my GitHub.
      </p>
      <div className="repositories-container">
        {repositories.length > 0 ? (
          repositories.map((repositorie) => <Repositorie key={uuidv4()} {...repositorie} />)
        ) : (
          <></>
        )}
      </div>
    </motion.div>
  )
}

export default Projects
