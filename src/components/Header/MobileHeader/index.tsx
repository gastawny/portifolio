'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { MenuLink } from '../MenuLink'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

export function MobileHeader() {
  const [menu, setMenu] = useState(false)

  const openIcon = <HiOutlineMenuAlt3 size={40} color="#FBFBFB" />
  const closeIcon = <AiOutlineClose size={40} color="#FBFBFB" />

  return (
    <HeaderStyled>
      <img src="/assets/svgs/logo.svg" alt="Gabriel Stawny" className="w-52" />
      <ModalButton onClick={() => setMenu(!menu)}>{menu ? closeIcon : openIcon}</ModalButton>
      {menu && (
        <Menu>
          <ul>
            <MenuLink href="/">Portfolio</MenuLink>
            <MenuLink href="/projects">Projects</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
          </ul>
        </Menu>
      )}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 1rem;
  background: var(--bgColorDark);
  height: 5rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const ModalButton = styled.div`
  background: transparent;
  border: none;
`

const Menu = styled.nav`
  position: absolute;
  height: 10rem;
  width: 100%;
  left: 0;
  bottom: -10rem;
  background: var(--bgColorDark);
  z-index: 15;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    height: 100%;
  }
`
