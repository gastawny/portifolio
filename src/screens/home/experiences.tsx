import { FadeIn } from '@/components/animation/fade-in'
import { ExperienceModel } from '@/config/user'
import { ExperienceCard } from './experience-card'

interface ExperiencesProps {
  experiencesList: ExperienceModel[]
}

export function Experiences({ experiencesList }: ExperiencesProps) {
  return (
    <ol className="flex flex-col h-full gap-6">
      {experiencesList
        .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
        .sort((a, b) => (a.highlight && !b.highlight ? -1 : 1))
        .map((experienceData, index) => (
          <FadeIn
            key={`company-${experienceData.company}-${index}`}
            delay={0.2 + 0.1 * index}
            duration={0.4}
            startOnScrollIntersect
            as="li"
          >
            <ExperienceCard data={experienceData} />
          </FadeIn>
        ))}
    </ol>
  )
}
