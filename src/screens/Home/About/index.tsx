import { Title } from '@/components/Title'
import { Terminal } from './Terminal'

export function About() {
  return (
    <section className="flex items-center justify-center flex-col gap-4">
      <Title>About</Title>
      <Terminal />
    </section>
  )
}
