import useWidth from 'hooks/useWidth'
import { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

interface ProgressBarProps {
  name: string | ReactElement
  progress: number
  children: ReactElement
  fontSize: number
}

const ProgressBar = ({ progress, children, fontSize, name }: ProgressBarProps) => {
  const { widthConst } = useWidth()

  return (
    <ProgressBarStyled>
      <Percent>
        <Dot progress={progress}></Dot>
        <CircleProgressContainer>
          <CircleProgress
            progress={progress}
            cx={84 * widthConst}
            cy={84 * widthConst}
            r={84 * widthConst}
          ></CircleProgress>
          <CircleProgress
            progress={progress}
            cx={84 * widthConst}
            cy={84 * widthConst}
            r={84 * widthConst}
          ></CircleProgress>
        </CircleProgressContainer>
        <Content>
          {children}
          <LanguageName fontSize={fontSize}>{name}</LanguageName>
        </Content>
      </Percent>
    </ProgressBarStyled>
  )
}

const ProgressBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Percent = styled.div`
  position: relative;
  width: 11.25rem;
  height: 11.25rem;

  @media (max-width: 1366px) {
    width: 9rem;
    height: 9rem;
  }
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

const animateDot = (progress: number) => keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(calc(3.6deg * ${progress}));
    }
`

const Dot = styled.div<{ progress: number }>`
  position: absolute;
  inset: 0.375rem;
  z-index: 10;
  animation: ${({ progress }) => animateDot(progress)} 2s linear forwards;

  @media (max-width: 1366px) {
    inset: 0.3rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: -0.45rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background: var(--blue);
    box-shadow: 0 0 0.75rem var(--blue), 0 0 2.25rem var(--blue);

    @media (max-width: 1366px) {
      width: 0.72rem;
      height: 0.72rem;
      top: -0.36rem;
    }
  }
`

const CircleProgress = styled.circle<{ progress: number }>`
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: 6;
  stroke: #191919;
  transform: translate(0.375rem, 0.375rem);

  @media (max-width: 1366px) {
    stroke-width: 4.8;
    transform: translate(0.3rem, 0.3rem);
  }

  &:nth-child(2) {
    stroke: var(--blue);
    stroke-dasharray: 528;
    stroke-dashoffset: calc(528 - (528 * ${({ progress }) => progress}) / 100);
    opacity: 0;
    animation: ${fadeIn} 1s linear forwards;
    animation-delay: 2.2s;

    @media (max-width: 1366px) {
      stroke-dasharray: 422.4;
      stroke-dashoffset: calc(422.4 - (422.4 * ${({ progress }) => progress}) / 100);
    }
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

const LanguageName = styled.div<{ fontSize: number }>`
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize}rem;
  text-align: center;
  margin-bottom: 5%;

  @media (max-width: 1366px) {
    font-size: ${({ fontSize }) => fontSize * 0.8}rem;
  }
`

const CircleProgressContainer = styled.svg`
  transform: rotate(270deg);
  position: relative;
  width: 11.25rem;
  height: 11.25rem;

  @media (max-width: 1366px) {
    width: 9rem;
    height: 9rem;
  }
`
export default ProgressBar
