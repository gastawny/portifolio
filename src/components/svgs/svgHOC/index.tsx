'use client'

import { useWidth } from '@/hooks/useWidth'
import { ISVG } from '@/interfaces/Svg'

export function svgHOC<T extends ISVG>(Component: React.ComponentType<T & ISVG>) {
  return function Wrapper(props: T) {
    'use client'
    const { layout } = useWidth()
    const { responsiveSize } = props

    const modifiedProps = {
      ...props,
      fontSize: responsiveSize
        ? layout === '2xl'
          ? responsiveSize['2xl']
          : layout === 'xl'
            ? responsiveSize['xl']
            : responsiveSize['sm']
        : props.fontSize,
    }
    return <Component {...modifiedProps} />
  }
}
