import { chakra } from '@chakra-ui/react'

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: '0 0 30 30',
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: '0 0 30 30',
  },

  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: '0 0 30 30',
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: '0 0 30 30',
  },
}

type IconType = 'triangle' | 'circle' | 'hexa' | 'box'

type SVGProps = {
  stroke?: boolean
  color?: string | number
  width: number
  icon: IconType
  zIndex?: number
  left: string
  top: string
  hidden?: boolean
}

const GeometricShapesSVG = ({
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
}: SVGProps): JSX.Element => (
  <chakra.svg
    sx={{
      position: 'absolute',
      stroke: stroke ? 'currentColor' : 'none',
      fill: stroke ? 'none' : 'currentColor',
      display: hidden ? 'none' : 'block',
      overflow: 'visible',
      color: color,
      zIndex,
      width,
      left,
      top,
      filter: 'blur(8px) saturate(160%)',
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </chakra.svg>
)

export default GeometricShapesSVG
