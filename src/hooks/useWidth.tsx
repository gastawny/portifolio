import { useLayoutEffect, useState } from 'react'

const useWidth = () => {
  const [size, setSize] = useState(0)
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size !== 0 ? size : window.innerWidth
}

export default useWidth
