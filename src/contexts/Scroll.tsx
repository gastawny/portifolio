import { IScroll } from 'interfaces/Scroll'
import { createContext, ReactNode, useContext } from 'react'

interface ScrollProps {
  children: ReactNode
}

const ScrollContext = createContext<IScroll[]>([])

export const ScrollProvider = ({ children }: ScrollProps) => {
  const breakpoints: IScroll[] = []

  return <ScrollContext.Provider value={breakpoints}>{children}</ScrollContext.Provider>
}

export const useScroll = () => {
  const breakpoints = useContext(ScrollContext)

  const setBreakpoints = (newBreakpoint: IScroll) => {
    if (breakpoints.filter((breakpoint) => breakpoint.name === newBreakpoint.name).length !== 0)
      return
    breakpoints.push(newBreakpoint)
  }

  const getBreakpoints = (): IScroll[] => {
    const AuxBreakpoints = breakpoints
    return AuxBreakpoints
  }

  const scrollToLocal = (local: string) => {
    const breakpoint = breakpoints.filter((breakpoint) => breakpoint.name === local)

    window.scrollTo({
      top: breakpoint[0].offsetTop,
      behavior: 'smooth',
    })
  }

  return {
    setBreakpoints,
    getBreakpoints,
    scrollToLocal,
  }
}
