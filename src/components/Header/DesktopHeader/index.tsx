import { MenuLink } from '../MenuLink'

export function DesktopHeader() {
  return (
    <div className="hidden md:flex bg-bgColorDark/60 relative  justify-between items-center px-[10%] h-[4.4rem] 2xl:h-24">
      <img src="/assets/svgs/logo.svg" alt="Gabriel Stawny" className="w-80" />
      <nav>
        <ul className="flex items-center gap-7 2xl:gap-9">
          <MenuLink href="/">Portfolio</MenuLink>
          <MenuLink href="/projects">Projects</MenuLink>
          <MenuLink href="/contact">Contact</MenuLink>
        </ul>
      </nav>
    </div>
  )
}
