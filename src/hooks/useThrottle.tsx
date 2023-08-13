'use client'

import { useRef } from 'react'

export function useThrottle(cb: () => void, limit: number) {
  const lastRun = useRef(Date.now())

  return function () {
    if (Date.now() - lastRun.current >= limit) {
      cb()
      lastRun.current = Date.now()
    }
  }
}
