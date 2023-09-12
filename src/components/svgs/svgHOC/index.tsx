'use client'

import { useWidth } from '@/hooks/useWidth'
import { ISVG } from '@/interfaces/Svg'

export function svgHOC(Component: any) {
  return function Wrapper({ responsiveSize, ...props }: ISVG) {
    'use client'
    const { layout } = useWidth()

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
