import './Skills.scss'
import ProgressBar from './ProgressBar'
import { DiJava, DiReact, DiNodejsSmall, DiGit, DiMysql } from 'react-icons/di'
import { FiBook } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'
import { useEffect, useRef } from 'react'
import { useScroll } from 'contexts/Scroll'

const Skills = () => {
  const SkillsRef = useRef<HTMLElement>(null)
  const { setBreakpoints } = useScroll()
  const width = window.innerWidth
  let widthConst = 1
  if (width >= 768 && width <= 1366) widthConst = 0.8

  useEffect(
    () =>
      setBreakpoints({
        offsetTop: SkillsRef.current?.offsetTop,
        name: SkillsRef.current?.className,
      }),
    []
  )

  return (
    <section ref={SkillsRef} className="Skills">
      <div className="title-container">
        <span className="S">S</span>
        <h2 className="title">Skills</h2>
      </div>
      <div className="Programing-languages">
        <ProgressBar
          fontSize={1.2}
          progress={70}
          name=<span>
            React
            <br />
            Typescript
          </span>
        >
          <DiReact size={90 * widthConst} color="var(--purple)" />
        </ProgressBar>
        <ProgressBar name="Java" fontSize={2.2} progress={30}>
          <DiJava size={90 * widthConst} color="var(--purple)" />
        </ProgressBar>
        <ProgressBar name="MySQL" fontSize={1.8} progress={40}>
          <DiMysql size={90 * widthConst} color="var(--purple)" />
        </ProgressBar>
        <ProgressBar name="Node.js" fontSize={1.6} progress={55}>
          <DiNodejsSmall size={85 * widthConst} color="var(--purple)" />
        </ProgressBar>
        <ProgressBar
          name=<span>
            Git
            <br />
            Github
          </span>
          fontSize={1.4}
          progress={85}
        >
          <DiGit size={85 * widthConst} color="var(--purple)" />
        </ProgressBar>
      </div>
      <div className="sub-skills">
        <div className="language">
          <h3 className="sub-title">Language</h3>
          <span className="horizontal-line"></span>
          <h4 className="language-type">Portuguese</h4>
          <div className="container-progress">
            <Filler progress={100}>
              <div className="label">Native</div>
            </Filler>
          </div>
          <h4 className="language-type">English</h4>
          <div className="container-progress">
            <Filler progress={80}>
              <div className="label">Good</div>
            </Filler>
          </div>
        </div>
        <div className="studies">
          <h3 className="sub-title">Studies</h3>
          <span className="horizontal-line"></span>
          <div className="studies-content">
            <div className="circle">
              <FiBook size={40} />
            </div>
            <div>
              <h4 className="studies-type">Computer science</h4>
              <h5 className="studies-complement">UTFPR 2022</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const progressBarAnimate = (progress: number) => keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: ${progress}%;
    }
`

const Filler = styled.div<{ progress: number }>`
  position: relative;
  height: 100%;
  animation: ${(props) => progressBarAnimate(props.progress)} 2s linear forwards;
  background: linear-gradient(to right, var(--blue), var(--purple));
  border-radius: inherit;
  text-align: right;
`

export default Skills
