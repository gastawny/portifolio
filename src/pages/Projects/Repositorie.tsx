import styled, { keyframes } from 'styled-components'
import { BsGithub } from 'react-icons/bs'
import { IRepositorie } from 'interfaces/Repositorie'
import Technology from './Technology'
import useWidth from 'hooks/useWidth'

const Repositorie = ({ repo, technology, description, url }: IRepositorie) => {
  const { layoutType } = useWidth()

  return (
    <RepositorieContainer>
      <TitleContainer>
        <div>
          <Title>{repo}</Title>
          <Technology technology={technology} />
        </div>
        <Link href={url} target="_blank" rel="noreferrer">
          <BsGithub size={layoutType !== 'mobile' ? 28 : 36} />
        </Link>
      </TitleContainer>
      <Description>{description}</Description>
    </RepositorieContainer>
  )
}

const RepositorieContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 0.8rem;
  width: 100%;
  background: #10131abb;
  height: 6rem;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    padding: 0.8rem;
    height: 8rem;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: baseline;
      gap: 0.6rem;
    }
  }
`

const Title = styled.h4`
  color: var(--font-color);
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.2rem;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
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

const Link = styled.a`
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

const Description = styled.p`
  color: var(--font-color);
  font-weight: 300;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    letter-spacing: 0.08rem;
  }
`

export default Repositorie
