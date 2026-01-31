import { FadeIn } from '@/components/animation/fade-in'
import { SmoothScroll } from '@/components/animation/smooth-scroll'
import { projectsList } from '@/config/projects'
import { techs } from '@/config/techs'
import { experiencesList, socials } from '@/config/user'
import { Home } from '@/screens/home'
import { SectionTitle } from '@/screens/home/section-title'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import React from 'react'

interface PageProps {
  params: { locale: string }
}

export default async function HomePage({ params }: PageProps) {
  setRequestLocale(params.locale)
  const [t] = await Promise.all([getTranslations('pages.home')])

  const userDescription = t.rich('about.userDescription', {
    projects: (chunks) => (
      <span
        className="text-primary underline cursor-pointer"
        data-scroll-link="projects"
        role="link"
        tabIndex={0}
      >
        {chunks}
      </span>
    ),
    technologies: (chunks) => (
      <span
        className="text-primary underline cursor-pointer"
        data-scroll-link="technologies"
        role="link"
        tabIndex={0}
      >
        {chunks}
      </span>
    ),
    contacts: (chunks) => (
      <span
        className="text-primary underline cursor-pointer"
        data-scroll-link="contacts"
        role="link"
        tabIndex={0}
      >
        {chunks}
      </span>
    ),
  })

  return (
    <div className="container lg:w-2/3 2xl:w-1/2 py-14 flex flex-col h-full justify-center gap-6">
      <SmoothScroll />
      <Home.NavBar />
      <Home.PresentationHead />
      <FadeIn className="grid w-full gap-2 card" duration={0.5}>
        <Home.SectionTitle title={t('about.title')} />
        <p className="leading-relaxed text-muted-foreground mt-2">{userDescription}</p>
      </FadeIn>
      <div className="grid xl:grid-cols-2 gap-[inherit]">
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <Home.SectionTitle title={t('experiences.title')} />
          <Home.Experiences
            experiencesList={experiencesList.filter(({ type }) => type === 'work')}
          />
        </FadeIn>
        <FadeIn duration={0.5} delay={0.1} className="card flex flex-col gap-6">
          <Home.SectionTitle title={t('education.title')} />
          <Home.Experiences
            experiencesList={experiencesList.filter(({ type }) => type === 'educational')}
          />
        </FadeIn>
      </div>
      <FadeIn>
        <div className="card" id="projects">
          <SectionTitle title={t('projects.title')} />
          <div className="flex flex-col gap-8 mt-8">
            {projectsList.map((project, index) => (
              <Home.ProjectCard project={project} index={index} key={project.id} />
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="card" id="technologies">
          <SectionTitle title={t('technologies.title')} />
          <div className="flex flex-col gap-8 mt-8">
            <Home.Technologies techs={techs} />
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="card" id="contacts">
          <SectionTitle title={t('contacts.title')} />
          <div className="flex flex-col gap-8 mt-8">
            <Home.Contact socials={socials} />
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
