import styles from './styles.module.scss'
import { memo } from 'react'
import { IInput } from '@/interfaces/Input'

function Input({ children, value, onChange, type = 'text' }: IInput) {
  const Tag = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={`${styles['inputBox']} ${type == 'textarea' ? styles['textarea'] : ''}`}>
      <Tag value={value} onChange={onChange} type={type} required />
      <span className={styles.text}>{children}</span>
      <span className={styles.line}></span>
    </div>
  )
}

function InputHOC<T extends IInput>(Component: React.ComponentType<T>) {
  function Wrapper(props: T) {
    return <Component {...props} />
  }

  return memo(Wrapper, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  })
}

function HOC<T extends object>(Component: React.ComponentType<T>) {
  return (props: T) => {
    return <Component {...props} />
  }
}

const InputMemoized = InputHOC(Input)

export { InputMemoized as Input }
