'use client'

import { useLayoutEffect, useState } from 'react'
import { useThrottle } from './useThrottle'

export function useWidth() {
  const [width, setWidth] = useState(0)

  const throttledSetSize = useThrottle(() => {
    setWidth(window.innerWidth)
  }, 500)

  useLayoutEffect(() => {
    window.addEventListener('resize', throttledSetSize)

    return () => window.removeEventListener('resize', throttledSetSize)
  }, [])

  return {
    layout: (() => {
      const widthLayoutType = window.innerWidth || width
      if (widthLayoutType > 1536) return '2xl'
      else if (widthLayoutType >= 500) return 'xl'
      else return 'sm'
    })(),
  }
}
