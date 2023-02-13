import { useRef } from 'react'
import './Button.scss'

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

const Button = ({ children, clicked = false, width = '0', fontSize = '0' }: ButtonProps) => {
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
    <button onClick={() => click()} className="Button" ref={ref}>
      <span style={styles.width != '0' ? styles : {}}>{children}</span>
      <i></i>
    </button>
  )
}

export default Button
