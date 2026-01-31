import { Terminal, TerminalCommand } from '@/components/terminal'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Icon } from '@/components/ui/icon'
import { ScrollArea } from '@/components/ui/scroll-area'

export function ExperienceModal({
  topics,
  company,
}: {
  topics: Array<{ title: string; description: string }>
  company: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="px-0 mt-2 text-xs">
          <Icon.info className="hover:text-secondary duration-100" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 w-11/12 lg:w-2/3 2xl:w-1/2 max-w-[90vw] border-none"
        closeClassName="right-2 top-2"
      >
        <ScrollArea className="max-h-[90vh] z-50">
          <Terminal process={company}>
            {topics.map((topic, idx) => (
              <TerminalCommand key={idx} title={topic.title}>
                {[`${topic.description}`]}
              </TerminalCommand>
            ))}
          </Terminal>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
