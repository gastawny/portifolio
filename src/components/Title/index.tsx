import styles from './styles.module.scss'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const title = tv({
  base: styles['title'],
})

type TitleProps = ComponentProps<'title'> & {
  children: string
}

export function Title({ children, className }: TitleProps) {
  return <h1 className={title({ className })}>{children}</h1>
}
