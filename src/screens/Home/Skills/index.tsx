import styles from './styles.module.scss'
import { Card } from '@/components/Card'
import { Title } from '@/components/Title'
import { technologies } from '@/utils/technologies'

export function Skills() {
  return (
    <section id="Skills" className="mt-6 flex flex-col gap-4 2xl:gap-20">
      <Title className="absolute left-1/2 -translate-x-1/2">Skills</Title>
      <div className="flex flex-col gap-10 items-center justify-center">
        {technologies.map((area) => (
          <div
            key={area.name}
            className="flex flex-row p-4 pt-0 md:p-0 gap-9 flex-wrap mx-auto items-center justify-center"
          >
            <div className="basis-full md:basis-auto flex justify-center">
              <h2 className={styles['tech-title']}>{area.name}</h2>
            </div>
            {area.techs.map((technology, index) => (
              <Card key={technology.name}>
                <a
                  className={styles['link']}
                  rel="noreferrer"
                  aria-label={`link to ${technology.name}`}
                  target="_blank"
                  href={technology.link}
                >
                  <div className="flex flex-col gap-1">
                    {technology.icon}
                    <p>{technology.name}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
