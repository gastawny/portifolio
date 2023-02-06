import { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'


interface ProgressBarProps {
    progress: number
    children: string | ReactElement
    fontSize: string
}

export default ({ progress, children, fontSize }: ProgressBarProps) => {
    const animateDot = keyframes`
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(calc(3.6deg * ${progress}));
        }
    `

    const Dot = styled.div`
        position: absolute;
        inset: .375rem;
        z-index: 10;
        animation: ${animateDot} 2s linear forwards;

        &:before {
            content: '';
            position: absolute;
            top: -.45rem;
            left: 50%;
            transform: translateX(-50%);
            width: .9rem;
            height: .9rem;
            border-radius: 50%;
            background: #45f3ff;
            box-shadow: 0 0 .75rem #45f3ff, 0 0 2.25rem #45f3ff;
        }
    `

    const CircleProgress = styled.circle`
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: 6;
        stroke: #191919;
        transform: translate(.375rem, .375rem);

        &:nth-child(2) {
            stroke: #45f3ff;
            stroke-dasharray: 528;
            stroke-dashoffset: calc(528 - (528 * ${progress}) / 100); //calc(528 - (528 * var(--num)))
            opacity: 0;
            animation: ${fadeIn} 1s linear forwards;
            animation-delay: 2.2s;
        }
    `

    const Language = styled.div`
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: ${fontSize};
        opacity: 0;
        animation: ${fadeIn} 1s linear forwards;
        animation-delay: 2.2s;
        text-align: center;
    `

    return (
        <ProgressBar style={{}}>
            <Percent>
                <Dot></Dot>
                <CircleProgressContainer>
                    <CircleProgress cx='84' cy='84' r='84'></CircleProgress>
                    <CircleProgress cx='84' cy='84' r='84'></CircleProgress>
                </CircleProgressContainer>
                <Language><span>{children}</span></Language>
            </Percent>
        </ProgressBar >
    )
}

const ProgressBar = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Percent = styled.div`
    position: relative;
    width: 11.25rem;
    height: 11.25rem;
`



const CircleProgressContainer = styled.svg`
    transform: rotate(270deg);
    position: relative;
    width: 11.25rem;
    height: 11.25rem;
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`