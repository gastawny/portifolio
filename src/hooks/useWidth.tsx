'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { useThrottle } from './useThrottle'

export function useWidth() {
  const [width, setWidth] = useState(0)

  const throttledSetSize = useThrottle(() => {
    setWidth(window.innerWidth)
  }, 200)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)

      window.addEventListener('resize', throttledSetSize)

      return () => window.removeEventListener('resize', throttledSetSize)
    }
  }, [])

  return {
    layout: (() => {
      if (width > 1536) return '2xl'
      else if (width >= 500) return 'xl'
      else return 'sm'
    })(),
  }
}
