import { Title } from '@/components/Title'
import { DesktopAbout } from './desktopAbout'
import { MobileAbout } from './mobileAbout'

export function About() {
  return (
    <section
      id="About"
      className="flex items-center justify-center flex-col gap-4 2xl:gap-20 mb-12 2xl:mb-20"
    >
      <Title>About me</Title>
      <MobileAbout />
      <DesktopAbout />
    </section>
  )
}
