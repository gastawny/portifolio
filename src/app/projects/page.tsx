import Projects from '@/components/screens/Projects'
import { GitHub, LinkExternal } from '@/components/svgs'
import projects from '@/json/projects.json'

export default function ProjectsPage() {
  return (
    <div>
      <Projects.Root>
        {projects.map((project) => (
          <Projects.Project
            key={project.title}
            title={project.title}
            technologies={project.technologies}
            text={project.text}
            link={project.link}
            githubLink={project.githubLink}
            type={project.type}
            image={project.image}
          />
        ))}
      </Projects.Root>
    </div>
  )
}
