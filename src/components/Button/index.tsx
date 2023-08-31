'use client'

import { ComponentProps, useState } from 'react'
import styles from './styles.module.scss'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: styles['styledButton'],
  variants: {
    isClicked: {
      true: styles['click'],
    },
  },
})

type ButtonProps = ComponentProps<'button'> &
  Omit<VariantProps<typeof button>, 'isClicked'> & {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: string
  }

export function Button({ children, onClick, className }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(event)
    setIsClicked(!isClicked)
    setTimeout(() => setIsClicked(false), 400)
  }

  return (
    <button onClick={handleClick} className={button({ isClicked, className })}>
      <span>{children}</span>
      <i></i>
    </button>
  )
}
