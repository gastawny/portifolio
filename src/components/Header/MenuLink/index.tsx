'use client'

import styled, { keyframes, css } from 'styled-components'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface MenuLinkProps {
  href: string
  children: string
}

interface StyledProps {
  href: string
  path: string
}

export function MenuLink({ href, children }: MenuLinkProps) {
  const path = usePathname()
  return (
    <li>
      <MenuLinkStyled
        className="text-2xl tracking-widest font-medium relative z-10"
        href={href}
        path={path}
      >
        {children}
      </MenuLinkStyled>
    </li>
  )
}

const hoverAnimation = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
`

const textHighlight = css<StyledProps>`
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 0.2rem;
  height: 0.8rem;
  background: ${({ href, path }) => (href === path ? 'var(--secondary)' : 'transparent')};
`

const animationOn = css`
  animation: ${hoverAnimation} 0.2s linear forwards;
`

const animationOff = css`
  animation: none;
`

const MenuLinkStyled = styled(Link)<StyledProps>`
  &:before {
    box-shadow: ${({ href, path }) =>
      href === path ? '0 0 .25rem var(--secondary), 0 0 1.25rem var(--secondary)' : 'none'};

    width: 100%;
    ${textHighlight}

    @media screen and (max-width: 500px) {
      box-shadow: none;
    }
  }

  &:hover {
    &::before {
      background: var(--secondary);
      ${({ href, path }) => (href !== path ? animationOn : animationOff)}
    }
  }
`
