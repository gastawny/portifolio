import { icons } from './icons'

type IconType = 'triangle' | 'circle' | 'hexa' | 'box'

interface SVGProps {
  stroke?: boolean
  color?: string | number
  width: number
  icon: IconType
  zIndex?: number
  left: string
  top: string
  hidden?: boolean
}

export function GeometricShapesSVG({
  stroke = false,
  color = `${
    [
      '#45F3FF',
      '#4596BA',
      '#808080',
      '#4596BA',
      '#B2229C',
      '#7C3992',
      '#455087',
      '#443875',
      '#573AFF',
      '#B0C4DE',
    ][Math.floor(Math.random() * 10)]
  }${Math.floor(Math.random() * 40) + 20}`,
  zIndex = 10,
  width,
  icon,
  left,
  top,
  hidden,
}: SVGProps) {
  return (
    <svg
      style={{
        position: 'absolute',
        stroke: stroke ? 'currentColor' : 'none',
        fill: stroke ? 'none' : 'currentColor',
        display: hidden ? 'none' : 'block',
        overflow: 'visible',
        color: `${color}`,
        zIndex,
        width,
        left,
        top,
        filter: 'blur(8px) saturate(160%)',
      }}
      viewBox={icons[icon].viewBox}
    >
      {icons[icon].shape}
    </svg>
  )
}
