import './Header.scss'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MenuLink from './MenuLink'
import useWidth from 'hooks/useWidth'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

const Header = () => {
  const { layoutType } = useWidth()
  const [menu, setMenu] = useState(false)

  const openIcon = <HiOutlineMenuAlt3 size={40} color="#FBFBFB" />
  const closeIcon = <AiOutlineClose size={40} color="#FBFBFB" />

  return layoutType !== 'mobile' ? (
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
  ) : (
    <>
      <HeaderStyled>
        <div className="container">
          <h2 className="name">Gabriel Stawny</h2>
        </div>
        <ModalButton active={!menu} onClick={() => setMenu(!menu)}>
          {menu ? closeIcon : openIcon}
        </ModalButton>
        {menu ? (
          <Menu>
            <ul>
              <MenuLink to="/">Portfolio</MenuLink>
              <MenuLink to="/projects">Projects</MenuLink>
              <MenuLink to="/contact">Contact</MenuLink>
            </ul>
          </Menu>
        ) : (
          <></>
        )}
      </HeaderStyled>
      <Outlet />
    </>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: var(--background-color-mixed);
  height: 5rem;

  h2 {
    margin-left: 1rem;
    letter-spacing: 0.08rem;
    font-size: 1.6rem;
    font-family: var(--font-spooky);
  }
`

const ModalButton = styled.div<{ active: boolean }>`
  right: 1rem;
  position: absolute;
  background: transparent;
  border: none;
`

const Menu = styled.nav`
  position: absolute;
  height: 8rem;
  width: 100%;
  bottom: -8rem;
  background: #10131aaa;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    height: 100%;
  }
`

export default Header
