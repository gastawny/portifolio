import styled, { keyframes } from 'styled-components'
import { BiLinkExternal } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'

interface ProjectProps {
  title: string
  technologies: string[]
  text: string
  link: string
  githubLink: string
  type: string
}

const Project = ({ title, technologies, text, link, githubLink, type }: ProjectProps) => {
  return (
    <ProjectContainer>
      <BoxContainer type={type}>
        <Box>
          <Border>
            <ContentContainer>
              <TitleContainer>
                <Title>{title}</Title>
                <Links>
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <BsGithub size={32} />
                  </a>
                  <a href={link} target="_blank" rel="noreferrer">
                    <BiLinkExternal size={40} />
                  </a>
                </Links>
              </TitleContainer>
              <Technologies>
                {technologies.map((technology) => (
                  <Technology key={uuidv4()}>
                    <img src={`assets/technologies/${technology}.svg`} />
                    <h4>{technology}</h4>
                  </Technology>
                ))}
              </Technologies>
              <Text>{text}</Text>
            </ContentContainer>
          </Border>
        </Box>
      </BoxContainer>
      <ProjectImage src={`assets/images/${title}.png`} />
    </ProjectContainer>
  )
}

const animateProject = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 32rem;
`

const ProjectImage = styled.img`
  height: 100%;
  border-radius: 20px;
`

const BoxContainer = styled.div<{ type: string }>`
  position: absolute;
  top: 9rem;
  left: ${({ type }) => (type === 'left' ? '-15rem' : 'auto')};
  right: ${({ type }) => (type === 'right' ? '-15rem' : 'auto')};
  z-index: 2;
`

const Box = styled.div`
  position: relative;
  width: 30rem;
  height: 14rem;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 32.8rem;
    height: 32.8rem;
    background-image: conic-gradient(transparent, transparent, transparent, var(--blue));
    animation: ${animateProject} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 32.8rem;
    height: 32.8rem;
    background-image: conic-gradient(transparent, transparent, transparent, var(--purple));
    animation: ${animateProject} 4s linear infinite;
    animation-delay: -2s;
  }
`

const Border = styled.span`
  position: absolute;
  inset: 0.28rem;
  border-radius: 1rem;
  background: var(--background-color-mixed);
  padding: 1rem;
  z-index: 1;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const Title = styled.h2`
  color: var(--font-color);
  font-size: 2.4rem;
  font-weight: 600;
  letter-spacing: 0.24rem;
`

const linkAnimation = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    fill: transparent;
  }

  25% {
    stroke-width: 1;
  }

  60%,
  100% {
    stroke-width: 0.3;
    stroke-dasharray: 100 1;
  }
`

const Links = styled.div`
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: var(--purple);

    &:hover {
      opacity: 1;
      fill: var(--blue);

      path {
        animation: ${linkAnimation} 3s ease alternate;
      }
    }
  }
`

const Technologies = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Technology = styled.div`
  display: flex;
  width: auto;
  height: 2rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background: #573aff26;
  padding: 0 0.5rem;

  img {
    width: 1.4rem;
    height: 1.4rem;
  }

  h4 {
    color: #9c8aff;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`

const Text = styled.p`
  color: var(--font-color);
  font-size: 1.2rem;
  letter-spacing: 0.08rem;
  line-height: 1.4rem;
`

export default Project
