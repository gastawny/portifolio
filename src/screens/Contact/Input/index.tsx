import { memo } from 'react'
import styles from './styles.module.scss'
import { IInput } from '@/interfaces/Input'

function Input({ children, value, onChange, type = 'text' }: IInput) {
  const Tag = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={`${styles.inputBox} ${type == 'textarea' ? styles.textarea : ''}`}>
      <Tag value={value} onChange={onChange} type={type} required />
      <span className={styles.text}>{children}</span>
      <span className={styles.line}></span>
    </div>
  )
}

function InputHOC(Component: any) {
  function Wrapper(props: IInput) {
    return <Component {...props} />
  }

  return memo(Wrapper, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  })
}

const InputMemoized = InputHOC(Input)

export { InputMemoized as Input }
