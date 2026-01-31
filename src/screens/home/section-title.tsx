interface SectionTitleProps {
  title: string
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-semibold leading-none tracking-tight text-xl">{title}</h2>
    </div>
  )
}
