import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ProjectModel } from '@/config/projects'
import { FadeIn } from '@/components/animation/fade-in'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { ProjectImageModal } from './project-image-modal'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Terminal, TerminalCommand } from '@/components/terminal'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: ProjectModel
  index: number
}

export async function ProjectCard({ project, index }: ProjectCardProps) {
  const { id, imagePreviewUrl, name, sourceUrl } = project

  const shortDescription = (await getTranslations('config.projects')).rich(
    `${id}.shortDescription`,
    {
      police: (children) => (
        <Link target="_blank" href="https://www.pmpr.pr.gov.br/" className="text-secondary">
          {children}
        </Link>
      ),
    }
  )

  // eslint-disable-next-line
  const topicsRaw = (await getTranslations('config.projects')).raw(`${id}.topics` as any)
  let topics: Array<{ title: string; description: string[] | string }> = []
  if (Array.isArray(topicsRaw)) {
    topics = topicsRaw
  } else if (topicsRaw && typeof topicsRaw === 'object') {
    topics = Object.values(topicsRaw)
  }

  return (
    <FadeIn
      startOnScrollIntersect
      to={index % 2 === 0 ? 'left' : 'right'}
      delay={0.1 * index}
      id="project"
      className="flex gap-4 group flex-col-reverse items-center lg:flex-row lg:odd:flex-row-reverse"
      duration={0.4}
    >
      <div className="flex justify-center gap-1 flex-col w-full lg:w-1/2 lg:group-odd:text-end lg:group-odd:items-end">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-base text-muted-foreground">{shortDescription}</p>
        <div
          className={cn(
            'flex flex-row items-center justify-center gap-2 w-full mt-2',
            'lg:w-fit',
            index % 2 !== 0 && 'lg:flex-row-reverse lg:justify-end'
          )}
        >
          {topics && topics.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="px-0 text-primary text-sm flex items-center justify-center w-1/2 lg:w-auto lg:hidden">
                  <Icon.info
                    size={20}
                    className="hover:text-foreground duration-100 text-foreground"
                  />
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="px-0 text-sm hidden lg:flex items-center justify-center w-auto mx-1"
                >
                  <Icon.info size={24} className="hover:text-foreground duration-100" />
                </Button>
              </DialogTrigger>
              <DialogContent
                className="p-0 w-11/12 lg:w-2/3 2xl:w-1/2 max-w-[90vw] border-none"
                closeClassName="right-2 top-2"
              >
                <ScrollArea className="max-h-[90vh] z-50">
                  <Terminal process={name}>
                    {topics.map((topic, idx) => (
                      <TerminalCommand
                        key={idx}
                        title={topic.title}
                        description={topic.description}
                      />
                    ))}
                  </Terminal>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          )}
          <Button
            asChild
            variant="secondary"
            className={cn(
              'text-center flex items-center justify-center',
              topics && topics.length > 0 ? 'w-1/2 lg:w-fit' : 'w-full'
            )}
          >
            <Link href={sourceUrl} target="_blank">
              <Icon.github size={20} />
            </Link>
          </Button>
        </div>
      </div>
      <ProjectImageModal projectName={name} imageUrl={imagePreviewUrl}>
        <Image
          src={imagePreviewUrl}
          alt={`Preview of ${name} project`}
          className="dark:border-none border project-image rounded-lg max-w-[25rem] w-full max-lg:!transform-none lg:max-w-none lg:w-1/2 h-fit aspect-video shadow-2xl shadow-primary/10 cursor-zoom-in"
          width={1280}
          height={720}
        />
      </ProjectImageModal>
    </FadeIn>
  )
}
