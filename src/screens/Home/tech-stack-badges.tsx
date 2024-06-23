import { cn } from '@/lib/utils'
import { stack } from '@/config/user'

import { FadeIn } from '@/components/animation/fade-in'
import { Badge } from '@/components/ui/badge'

interface TechStackBadgesProps {
  className?: string
  limit?: number
}

export function TechStackBadges({ className, limit = stack.length }: TechStackBadgesProps) {
  return (
    <FadeIn
      delay={0.3}
      duration={0.5}
      className={cn('hidden xs:flex flex-wrap gap-2 mt-2', className)}
    >
      {stack.slice(0, limit).map((tech) => (
        <Badge variant="subtle" key={tech}>
          {tech}
        </Badge>
      ))}
    </FadeIn>
  )
}
