'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { Plus, X } from 'lucide-react'

interface FloatButtonProps {
  children: React.ReactNode
  position?: string
  orientation?: 'top' | 'bottom' | 'left' | 'right'
}

export const FloatButton: React.FC<FloatButtonProps> = ({
  children,
  position = 'bottom-4 left-4',
  orientation = 'top',
}) => {
  const STAGGER_DELAY = 100
  const ANIMATION_DURATION = 300
  const TRANSLATE_Y = 20

  const [open, setOpen] = useState(false)
  const childrenArray = React.Children.toArray(children).slice().reverse()
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (open) {
      if (visibleCount < childrenArray.length) {
        timeout = setTimeout(() => setVisibleCount((v) => v + 1), STAGGER_DELAY)
      }
    } else {
      if (visibleCount > 0) {
        timeout = setTimeout(() => setVisibleCount((v) => v - 1), STAGGER_DELAY)
      }
    }
    return () => clearTimeout(timeout)
  }, [open, visibleCount, childrenArray.length])

  useEffect(() => {
    if (!open) setVisibleCount(0)
  }, [childrenArray.length])

  let containerFlex = 'flex-col items-end'
  let childrenGap = 'gap-2'
  let childrenMargin = ''
  let childTransform = (visible: boolean) => ''

  switch (orientation) {
    case 'top':
      containerFlex = 'flex-col items-end'
      childrenMargin = 'mb-2'
      childTransform = (visible) => (visible ? 'translateY(0)' : `translateY(${TRANSLATE_Y}px)`)
      break
    case 'bottom':
      containerFlex = 'flex-col-reverse items-end'
      childrenMargin = 'mt-2'
      childTransform = (visible) => (visible ? 'translateY(0)' : `translateY(-${TRANSLATE_Y}px)`)
      break
    case 'left':
      containerFlex = 'flex-row-reverse items-center'
      childrenMargin = 'mr-2'
      childTransform = (visible) => (visible ? 'translateX(0)' : `translateX(${TRANSLATE_Y}px)`)
      break
    case 'right':
      containerFlex = 'flex-row items-center'
      childrenMargin = 'ml-2'
      childTransform = (visible) => (visible ? 'translateX(0)' : `translateX(-${TRANSLATE_Y}px)`)
      break
    default:
      containerFlex = 'flex-col items-end'
      childrenMargin = 'mb-2'
      childTransform = (visible) => (visible ? 'translateY(0)' : `translateY(${TRANSLATE_Y}px)`)
  }

  return (
    <div className={`fixed z-50 flex ${containerFlex} ${childrenGap} ${position}`}>
      {(open || visibleCount > 0) && (
        <div className={`flex ${containerFlex} ${childrenGap} ${childrenMargin}`}>
          {childrenArray.map((child, idx) => {
            const appearIndex = childrenArray.length - 1 - idx
            const visible = appearIndex < visibleCount
            return (
              <div
                key={idx}
                style={{
                  transition: `opacity 0.3s, transform 0.3s`,
                  opacity: visible ? 1 : 0,
                  transform: childTransform(visible),
                  pointerEvents: visible ? 'auto' : 'none',
                }}
              >
                {child}
              </div>
            )
          })}
        </div>
      )}
      <Button
        variant="default"
        size="icon"
        aria-label="Open floating actions"
        onClick={() => {
          if (open) {
            setOpen(false)
            setTimeout(
              () => setVisibleCount(0),
              childrenArray.length * STAGGER_DELAY + ANIMATION_DURATION
            )
          } else {
            setOpen(true)
            setVisibleCount(1)
          }
        }}
        className="shadow-lg relative overflow-hidden"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? 'opacity-0 scale-75 rotate-45' : 'opacity-100 scale-100 rotate-0'}`}
          aria-hidden={open}
        >
          <Plus />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-45'}`}
          aria-hidden={!open}
        >
          <X />
        </span>
        <span className="invisible">
          {/* For button size consistency */}
          <Plus />
        </span>
      </Button>
    </div>
  )
}
