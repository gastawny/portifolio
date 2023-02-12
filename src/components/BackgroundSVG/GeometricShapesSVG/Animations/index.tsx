import { chakra } from '@chakra-ui/react'
import React from 'react'
import './Animations.scss'

interface UpDownProps {
    children: React.ReactNode
    type: 'normal' | 'wide' | 'slow'
    zIndex?: number
}

const UpDown = ({ children, type, zIndex = -500 }: UpDownProps): JSX.Element => {
    return (
        <chakra.div
            overflow='hidden'
            position='absolute'
            className={
                // eslint-disable-next-line no-nested-ternary
                type === `wide`
                    ? `UpDownWideAnimation`
                    : type === `slow`
                        ? `UpDownSlowAnimation`
                        : `UpDownAnimation`
            }
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={zIndex}
        >
            {children}
        </chakra.div>
    )
}

export default UpDown