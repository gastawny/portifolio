import styles from './styles.module.scss'
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
  hiddenlowHeight?: boolean
  hiddenMediumHeight?: boolean
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
  hiddenlowHeight,
  hiddenMediumHeight,
}: SVGProps) {
  const isHidden = hiddenMediumHeight
    ? styles['hiddenMediumHeight']
    : hiddenlowHeight
    ? styles['hiddenlowHeight']
    : ''

  return (
    <svg
      style={{
        stroke: stroke ? 'currentColor' : 'none',
        fill: stroke ? 'none' : 'currentColor',
        color: `${color}`,
        zIndex,
        width,
        left,
        top,
      }}
      className={styles['svg'] + ' ' + isHidden}
      viewBox={icons[icon].viewBox}
    >
      {icons[icon].shape}
    </svg>
  )
}
