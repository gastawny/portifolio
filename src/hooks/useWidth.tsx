import { useLayoutEffect, useState, useEffect } from 'react'

type layouttypeOptions = 'mobile' | 'smallDesktop' | 'largeDesktop'

const initialValue = window.innerWidth <= 500 ? 'mobile' : 'smallDesktop'

const useWidth = () => {
  const [size, setSize] = useState(0)
  const [widthConst, setWidthConst] = useState(1)
  const [layoutType, setLayoutType] = useState<layouttypeOptions>(initialValue)

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if (size >= 1366) {
      setWidthConst(1)
      setLayoutType('largeDesktop')
    }
    if (size <= 1366) {
      setWidthConst(0.8)
      setLayoutType('smallDesktop')
    }
    if (size <= 500) {
      setWidthConst(0.5)
      setLayoutType('mobile')
    }
    if (size === 0) {
      const widthLayoutType = window.innerWidth
      if (widthLayoutType >= 1366) setLayoutType('largeDesktop')
      else if (widthLayoutType <= 1366) setLayoutType('smallDesktop')
      else if (widthLayoutType <= 500) setLayoutType('mobile')
    }
  }, [size])

  return {
    width: size !== 0 ? size : window.innerWidth,
    widthConst,
    layoutType,
  }
}

export default useWidth
