'use client'

import styled, { keyframes, css } from 'styled-components'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface MenuLinkProps {
  href: string
  children: string
  onClick?: () => void
}

interface StyledProps {
  href: string
  path: string
}

export function MenuLink({ href, children, onClick }: MenuLinkProps) {
  const path = usePathname()

  return (
    <li>
      <MenuLinkStyled
        className="text-2xl tracking-widest font-medium relative z-10"
        href={href}
        path={path}
        onClick={onClick}
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
  bottom: 0.15rem;
  height: 0.75rem;
  background: ${({ href, path }) => (href === path ? 'var(--secondary)' : 'transparent')};
  opacity: 0.3;
`

const animationOn = css`
  animation: ${hoverAnimation} 0.2s linear forwards;
`

const animationOff = css`
  animation: none;
`

const MenuLinkStyled = styled(Link)<StyledProps>`
  &:before {
    width: 100%;
    ${textHighlight}
  }

  &:hover {
    &::before {
      background: var(--secondary);
      ${({ href, path }) => (href !== path ? animationOn : animationOff)}
    }
  }
`
