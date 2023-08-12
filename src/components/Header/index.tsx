import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export function Header() {
  return (
    <header>
      <DesktopHeader />
      <MobileHeader />
    </header>
  )
}
