import styles from './styles.module.scss'

interface IInputProps {
  children: React.ReactNode
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'text' | 'textarea'
}

export function Input({ children, value, onChange, type = 'text' }: IInputProps) {
  const Tag = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div className={`${styles.inputBox} ${type == 'textarea' ? styles.textarea : ''}`}>
      <Tag value={value} onChange={onChange} type={type} required />
      <span className={styles.text}>{children}</span>
      <span className={styles.line}></span>
    </div>
  )
}
