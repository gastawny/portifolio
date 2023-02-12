import { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

interface ProgressBarProps {
    name: string | ReactElement
    progress: number
    children: ReactElement
    fontSize: string
}

interface StyledProps {
    progress?: number
    fontSize?: string
}

export default ({ progress, children, fontSize, name }: ProgressBarProps) => (
    <ProgressBar>
        <Percent>
            <Dot progress={progress}></Dot>
            <CircleProgressContainer>
                <CircleProgress cx='84' cy='84' r='84' ></CircleProgress>
                <CircleProgress progress={progress} cx='84' cy='84' r='84'></CircleProgress>
            </CircleProgressContainer>
            <Content>
                {children}
                <LanguageName fontSize={fontSize}>{name}</LanguageName>
            </Content>
        </Percent>
    </ProgressBar >
)

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

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const animateDot = (props: StyledProps) => keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(calc(3.6deg * ${props.progress}));
    }
`

const Dot = styled.div<StyledProps>`
    position: absolute;
    inset: .375rem;
    z-index: 10;
    animation: ${props => animateDot(props)} 2s linear forwards;

    &:before {
        content: '';
        position: absolute;
        top: -.45rem;
        left: 50%;
        transform: translateX(-50%);
        width: .9rem;
        height: .9rem;
        border-radius: 50%;
        background: var(--blue);
        box-shadow: 0 0 .75rem var(--blue), 0 0 2.25rem var(--blue);
    }
`

const CircleProgress = styled.circle<StyledProps>`
    width: 100%;
    height: 100%;
    fill: transparent;
    stroke-width: 6;
    stroke: #191919;
    transform: translate(.375rem, .375rem);
    
    &:nth-child(2) {
        stroke: var(--blue);
        stroke-dasharray: 528;
        stroke-dashoffset: calc(528 - (528 * ${props => props.progress}) / 100);
        opacity: 0;
        animation: ${fadeIn} 1s linear forwards;
        animation-delay: 2.2s;
    }
`

const Content = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    margin: 10% 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: ${fadeIn} 1s linear forwards;
    opacity: 0;
    animation-delay: 2.2s;
`

const LanguageName = styled.div<StyledProps>`
    font-weight: 600;
    font-size: ${props => props.fontSize};
    text-align: center;
    margin-bottom: 5%
`

const CircleProgressContainer = styled.svg`
    transform: rotate(270deg);
    position: relative;
    width: 11.25rem;
    height: 11.25rem;
`