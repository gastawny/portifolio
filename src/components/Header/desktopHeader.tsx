import './desktopHeader.scss'
import { ReactComponent as Logo } from 'assets/svgs/logo.svg'
import MenuLink from './MenuLink'

const DesktopHeader = () => (
  <header className="Header">
    <div className="container">
      <svg transform="translate(0, 0)">
        <Logo />
      </svg>
      <nav>
        <ul className="links">
          <MenuLink to="/">Portfolio</MenuLink>
          <MenuLink to="/projects">Projects</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </ul>
      </nav>
    </div>
  </header>
)

export default DesktopHeader
