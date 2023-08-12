'use client'

import { useRef } from 'react'
import { styled } from 'styled-components'

interface ButtonProps {
  clicked?: (() => void) | false
  fontSize?: string
  children: string
  width?: string
}

interface IStyesBtn {
  width?: string
  display?: string
  justifyContent?: string
  alignItems?: string
  fontSize?: string
}

export function Button({ children, clicked = false, width = '0', fontSize = '0' }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  let styles: IStyesBtn = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  if (width != '0') styles = { ...styles, width: width }
  if (fontSize != '0') styles = { ...styles, fontSize: fontSize }

  const click = () => {
    if (clicked) clicked()
    setTimeout(() => {
      ref.current?.classList.toggle('click')
    }, 400)
    ref.current?.classList.toggle('click')
  }

  return (
    <StyledButton onClick={() => click()} ref={ref}>
      <span style={styles.width != '0' ? styles : {}}>{children}</span>
      <i></i>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  background: #000;
  color: var(--fontColor);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.15rem;
  padding: 0.55rem 1.8rem;
  transition: 0.5s;
  font-weight: 500;
  border: none;
  font-family: var(--font-cascadiaCode);

  &:hover {
    letter-spacing: 0.3rem;
    background: var(--primary);
    color: var(--primary);
    box-shadow: 0 0 2rem var(--primary);

    i::before {
      border: 0.125rem solid var(--primary);
      width: 1.25rem;
      left: 20%;
    }

    i::after {
      border: 0.125rem solid var(--primary);
      width: 1.25rem;
      left: 80%;
    }
  }

  &.click {
    background: var(--secondaryDark);
    color: var(--secondaryDark);
    box-shadow: 0 0 2rem var(--secondaryDark);

    i::before {
      border-color: var(--secondaryDark);
    }

    i::after {
      border-color: var(--secondaryDark);
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0.125rem;
    background: var(--bgColorExtraDark);
  }

  span {
    position: relative;
    z-index: 1;

    &::selection {
      background-color: transparent;
    }
  }

  i {
    position: absolute;
    inset: 0;
    display: block;

    &::before {
      content: '';
      position: absolute;
      top: -0.2rem;
      left: 80%;
      width: 0.75rem;
      height: 0.5rem;
      border: 0.125rem solid var(--secondary);
      background: var(--bgColorDark);
      transform: translateX(-50%);
      transition: 0.5s;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -0.2rem;
      left: 20%;
      width: 0.75rem;
      height: 0.5rem;
      border: 0.125rem solid var(--secondary);
      background: var(--bgColorDark);
      transform: translateX(-50%);
      transition: 0.5s;
    }
  }
`
