import styled, { keyframes } from 'styled-components'
import { BiLinkExternal } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'
import useWidth from 'hooks/useWidth'

interface ProjectProps {
  title: string
  technologies: string[]
  text: string
  link: string
  githubLink: string
  type: string
  image: string
}

const Project = ({ title, technologies, text, link, githubLink, type, image }: ProjectProps) => {
  const { widthConst } = useWidth()

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
                    <BsGithub size={32 * widthConst} />
                  </a>
                  <a href={link} target="_blank" rel="noreferrer">
                    <BiLinkExternal size={40 * widthConst} />
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
      <ProjectImage src={`assets/images/${image}`} />
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
  width: 80vw;
`

const ProjectImage = styled.img`
  width: 80%;
  border-radius: 20px;
  margin-left: 10%;
`

const BoxContainer = styled.div<{ type: string }>`
  position: absolute;
  top: 32%;
  left: ${({ type }) => (type === 'left' ? '-5%' : 'auto')};
  right: ${({ type }) => (type === 'right' ? '-5%' : 'auto')};
  z-index: 2;
  width: 36%;
  height: 36%;
`

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 180%;
    height: 260%;
    background-image: conic-gradient(transparent, transparent, transparent, var(--blue));
    animation: ${animateProject} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 180%;
    height: 260%;
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

  @media screen and (max-width: 1366px) {
    padding: 0.8rem;
  }
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

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
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

  @media screen and (max-width: 1366px) {
    width: 4rem;
  }

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

  @media screen and (max-width: 1366px) {
    gap: 0.35rem;
  }
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

  @media screen and (max-width: 1366px) {
    height: 1.7rem;
    margin-bottom: 0.8rem;
  }

  img {
    width: 1.4rem;
    height: 1.4rem;

    @media screen and (max-width: 1366px) {
      width: 1.16rem;
      height: 1.16rem;
    }
  }

  h4 {
    color: #9c8aff;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.05rem;

    @media screen and (max-width: 1366px) {
      font-size: 0.86rem;
    }
  }
`

const Text = styled.p`
  color: var(--font-color);
  font-size: 1.2rem;
  letter-spacing: 0.08rem;
  line-height: 1.4rem;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`

export default Project
