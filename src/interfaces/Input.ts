export interface IInput {
  children: React.ReactNode
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'text' | 'textarea'
}
