import styled from 'styled-components'

interface TechnologyProps {
  technology: string
}

const Technology = ({ technology }: TechnologyProps) => {
  return (
    <TechnologyStyled>
      <img src={`assets/technologies/${technology}.svg`} />
      <h4>{technology}</h4>
    </TechnologyStyled>
  )
}

const TechnologyStyled = styled.div`
  display: flex;
  width: auto;
  height: 2rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: 0.5rem;
  background: #573aff26;
  padding: 0 0.5rem;

  @media screen and (max-width: 1366px) {
    height: 1.62rem;
  }

  img {
    width: 1.4rem;
    height: 1.4rem;

    @media screen and (max-width: 1366px) {
      width: 1.12rem;
      height: 1.12rem;
    }
  }

  h4 {
    color: #9c8aff;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.05rem;

    @media screen and (max-width: 1366px) {
      font-size: 0.8rem;
    }
  }
`
export default Technology
