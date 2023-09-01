import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: styles['styledButton'],
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    children: string
  }

export function Button({ children, onClick, className }: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick(event)

    const buttonElement = event.currentTarget
    buttonElement.classList.add(styles['click'])
    setTimeout(() => {
      buttonElement.classList.remove(styles['click'])
    }, 400)
  }

  return (
    <button onClick={handleClick} className={button({ className })}>
      <span>{children}</span>
      <i></i>
    </button>
  )
}
