import './Skills.scss'
import ProgressBar from './ProgressBar'
import { FiBook } from 'react-icons/fi'
import { FiArrowDownCircle } from 'react-icons/fi'
import styled, { keyframes } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { useScroll } from 'contexts/Scroll'
import useApi from 'hooks/useApi'
import ITechnology from 'interfaces/Technology'

const Skills = () => {
  const SkillsRef = useRef<HTMLElement>(null)
  const { setBreakpoints } = useScroll()
  const [renderFlag, setRenderFlag] = useState(false)
  const { getTechnologies } = useApi()
  const [technologies, setTechnologies] = useState<ITechnology[]>([])

  useEffect(
    () =>
      setBreakpoints({
        offsetTop: SkillsRef.current?.offsetTop,
        name: SkillsRef.current?.className,
      }),
    []
  )

  useEffect(() => {
    // prettier-ignore
    (async () => {
      setTechnologies(await getTechnologies())
    })()
  }, [])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && !renderFlag) {
        setTimeout(() => setRenderFlag(true), 50)
      }
    })
    intersectionObserver.observe(SkillsRef.current!) // eslint-disable-line
    return () => intersectionObserver.disconnect()
  }, [renderFlag])

  return (
    <section ref={SkillsRef} className="Skills">
      <div className="title-container">
        <span className="S">S</span>
        <h2 className="title">Skills</h2>
      </div>
      {renderFlag ? (
        <>
          <div className="Programing-languages">
            {technologies.map((technology, index) => (
              <ProgressBar
                key={index}
                name={technology.technology}
                fontSize={technology.fontSize}
                progress={technology.value}
                iconSize={technology.iconSize}
              >
                <img src={`assets/technologies/${technology.iconName}.svg`} />
              </ProgressBar>
            ))}
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
              <div className="studies-container">
                <div className="studies-content">
                  <div className="circle">
                    <FiBook size={40} />
                  </div>
                  <div>
                    <h4 className="studies-type">Computer science</h4>
                    <h5 className="studies-complement">UTFPR 2022</h5>
                  </div>
                </div>
                <div className="studies-content">
                  <a href="https://imgur.com/a/58DyPmc" target="_blank" rel="noopener noreferrer">
                    <div className="circle">
                      <FiArrowDownCircle size={45} />
                    </div>
                  </a>
                  <div>
                    <h4 className="studies-type">Algorithms monitor</h4>
                    <h5 className="studies-complement">2022/2</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
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
