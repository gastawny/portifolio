import './Animations.css'

interface UpDownProps {
  children: React.ReactNode
  type: 'normal' | 'wide' | 'slow'
}

export function UpDown({ children, type }: UpDownProps) {
  const svgType =
    type === 'wide'
      ? 'UpDownWideAnimation'
      : type === 'slow'
      ? 'UpDownSlowAnimation'
      : 'UpDownAnimation'

  return (
    <div className={`absolute top-0 left-0 right-0 bottom-0 -z-[500] ${svgType}`}>{children}</div>
  )
}
