'use client'
import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    /* eslint-disable-next-line */
    function handleClick(e: any) {
      const target = e.target.closest('[data-scroll-link]')
      if (target) {
        const id = target.getAttribute('data-scroll-link')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
  return null
}
