'use client'
import { MenuLink } from '../MenuLink'

export function DesktopHeader() {
  return (
    <header className="bg-bgColorDark/60">
      <div className="relative flex justify-between items-center mx-[10%] h-[4.4rem] xl:h-24">
        <img src="/assets/svgs/logo.svg" alt="Gabriel Stawny" className="w-80" />
        <nav>
          <ul className="flex items-center gap-7 xl:gap-9">
            <MenuLink href="/">Portfolio</MenuLink>
            <MenuLink href="/projects">Projects</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}
