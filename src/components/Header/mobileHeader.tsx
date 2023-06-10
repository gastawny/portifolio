import { useState } from 'react'
import MenuLink from './MenuLink'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'
import { ReactComponent as Logo } from 'assets/svgs/logo.svg'

const MobileHeader = () => {
  const [menu, setMenu] = useState(false)

  const openIcon = <HiOutlineMenuAlt3 size={40} color="#FBFBFB" />
  const closeIcon = <AiOutlineClose size={40} color="#FBFBFB" />

  return (
    <HeaderStyled>
      <svg transform="scale(0.8) translate(-30, 0)">
        <Logo />
      </svg>
      <ModalButton active={!menu} onClick={() => setMenu(!menu)}>
        {menu ? closeIcon : openIcon}
      </ModalButton>
      {menu && (
        <Menu>
          <ul>
            <MenuLink to="/">Portfolio</MenuLink>
            <MenuLink to="/projects">Projects</MenuLink>
            <MenuLink to="/contact">Contact</MenuLink>
          </ul>
        </Menu>
      )}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 1rem;
  background: var(--background-color-mixed);
  height: 5rem;
`

const ModalButton = styled.div<{ active: boolean }>`
  background: transparent;
  border: none;
`

const Menu = styled.nav`
  position: absolute;
  height: 10rem;
  width: 100%;
  left: 0;
  bottom: -10rem;
  background: #10131a;
  z-index: 15;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    height: 100%;
  }
`

export default MobileHeader
