import { useLayoutEffect, useState, useEffect } from 'react'

const useWidth = () => {
  const [size, setSize] = useState(0)
  const [widthConst, setWidthConst] = useState(1)

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if (size >= 1366) setWidthConst(1)
    if (size <= 1366) setWidthConst(0.8)
  }, [size])

  return {
    width: size !== 0 ? size : window.innerWidth,
    widthConst,
  }
}

export default useWidth
