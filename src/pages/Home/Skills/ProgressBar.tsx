import { ReactElement } from 'react'
import styled, { keyframes } from 'styled-components'

interface ProgressBarProps {
  name: string | ReactElement
  progress: number
  children: ReactElement
  fontSize: number
}

interface StyledProps {
  progress?: number
  fontSize?: string
  widthConst?: number
}

const ProgressBar = ({ progress, children, fontSize, name }: ProgressBarProps) => {
  const width = window.innerWidth
  let widthConst = 1
  if (width >= 768 && width <= 1366) widthConst = 0.8

  return widthConst ? (
    <ProgressBarStyled>
      <Percent widthConst={widthConst}>
        <Dot progress={progress}></Dot>
        <CircleProgressContainer widthConst={widthConst}>
          <CircleProgress
            progress={progress}
            widthConst={widthConst}
            cx={84 * widthConst}
            cy={84 * widthConst}
            r={84 * widthConst}
          ></CircleProgress>
          <CircleProgress
            progress={progress}
            widthConst={widthConst}
            cx={84 * widthConst}
            cy={84 * widthConst}
            r={84 * widthConst}
          ></CircleProgress>
        </CircleProgressContainer>
        <Content>
          {children}
          <LanguageName fontSize={(fontSize * widthConst).toString() + 'rem'}>{name}</LanguageName>
        </Content>
      </Percent>
    </ProgressBarStyled>
  ) : (
    <></>
  )
}

const ProgressBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Percent = styled.div<StyledProps>`
  position: relative;
  width: ${({ widthConst }) => (widthConst ? 11.25 * widthConst : 11.25)}rem;
  height: ${({ widthConst }) => (widthConst ? 11.25 * widthConst : 11.25)}rem;
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
  inset: ${({ widthConst }) => (widthConst ? 0.375 * widthConst : 0.375)}rem;
  z-index: 10;
  animation: ${(props) => animateDot(props)} 2s linear forwards;

  &:before {
    content: '';
    position: absolute;
    top: ${({ widthConst }) => (widthConst ? -0.45 * widthConst : -0.45)}rem;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ widthConst }) => (widthConst ? 0.9 * widthConst : 0.9)}rem;
    height: ${({ widthConst }) => (widthConst ? 0.9 * widthConst : 0.9)}rem;
    border-radius: 50%;
    background: var(--blue);
    box-shadow: 0 0 0.75rem var(--blue), 0 0 2.25rem var(--blue);
  }
`
/* eslint-disable */
const CircleProgress = styled.circle<StyledProps>`
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: 6;
  stroke: #191919;
  transform: translate(0.375rem, 0.375rem);
  stroke-width: ${({ widthConst }) => (widthConst ? 6 * widthConst : 6)};
  stroke: #191919;
  transform: ${({ widthConst }) =>
    widthConst
      ? 'translate(' +
        (0.375 * widthConst).toString() +
        'rem' +
        ',' +
        (0.375 * widthConst).toString() +
        'rem' +
        ')'
      : 'translate(0.375rem, 0.375rem)'};

  &:nth-child(2) {
    stroke: var(--blue);
    stroke-dasharray: ${({ widthConst }) => (widthConst ? 528 * widthConst : 528)};
    stroke-dashoffset: calc(
      ${({ widthConst, progress }) =>
        widthConst && progress ? 528 * widthConst - (528 * widthConst * progress) / 100 : 0}
    );
    opacity: 0;
    animation: ${fadeIn} 1s linear forwards;
    animation-delay: 2.2s;
  }
`
/* eslint-enable */
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
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  margin-bottom: 5%;
`

const CircleProgressContainer = styled.svg<StyledProps>`
  transform: rotate(270deg);
  position: relative;
  width: ${({ widthConst }) => (widthConst ? 11.25 * widthConst : 11.25)}rem;
  height: ${({ widthConst }) => (widthConst ? 11.25 * widthConst : 11.25)}rem;
`
export default ProgressBar
