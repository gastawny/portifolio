import './Header.scss'
import { Outlet } from 'react-router-dom'
import MenuLink from './MenuLink'

const Header = () => (
  <>
    <header className="Header">
      <div className="container">
        <h2 className="name">Gabriel Stawny</h2>
        <nav>
          <ul className="links">
            <MenuLink to="/">Portfolio</MenuLink>
            <MenuLink to="/projects">Projects</MenuLink>
            <MenuLink to="/contact">Contact</MenuLink>
          </ul>
        </nav>
      </div>
    </header>
    <Outlet />
  </>
)

export default Header
