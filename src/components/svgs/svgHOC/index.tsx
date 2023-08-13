'use client'

import { useThrottle } from '@/hooks/useThrottle'
import { ISVG } from '@/interfaces/Svg'
import { useEffect, useLayoutEffect, useState } from 'react'

export function svgHOC(Component: any) {
  return function Wrapper({ responsiveSize, ...props }: ISVG) {
    'use client'
    const [size, setSize] = useState(0)
    const [constant, setConstant] = useState(0)

    function updateConstant() {
      setConstant(() => {
        if (size > 1536) return 1
        else if (size >= 500) return 0.8
        else if (size > 0) return 0.5
        else {
          const widthLayoutType = window.innerWidth
          if (widthLayoutType > 1536) return 1
          else if (widthLayoutType >= 500) return 0.8
          else return 0.5
        }
      })
    }

    const throttledSetSize = useThrottle(() => {
      setSize(window.innerWidth)
    }, 500)

    useLayoutEffect(() => {
      updateConstant()

      window.addEventListener('resize', throttledSetSize)

      return () => window.removeEventListener('resize', throttledSetSize)
    }, [])

    useEffect(() => {
      updateConstant()
    }, [size])

    const modifiedProps = {
      ...props,
      fontSize: responsiveSize
        ? constant === 1
          ? responsiveSize['2xl']
          : constant === 0.8
          ? responsiveSize['xl']
          : responsiveSize['sm']
        : props.fontSize,
    }
    return <Component {...modifiedProps} />
  }
}
