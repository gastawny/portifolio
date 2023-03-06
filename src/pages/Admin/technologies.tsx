import ITechnology from 'interfaces/Technology'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Technologies = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([])

  useEffect(() => {
    fetch('http://api.gastawny.com/technologies')
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
  }, [])

  return (
    <>
      <Title>Technologies</Title>
      {technologies.map((technology, index) => (
        <Technology key={index}>
          <div>
            <h2>{technology.technology}</h2>
            <h3>value: {technology.value}</h3>
          </div>
          <div>
            <button>Update value</button>
            <button>Remove</button>
          </div>
        </Technology>
      ))}
    </>
  )
}

const Title = styled.h1`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  font-size: 4rem;
  letter-spacing: 0.3rem;
  font-weight: 600;
`

const Technology = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border: 4px solid #03383d;
  background: #131823;
  width: 80%;
  margin: 1rem auto;

  div {
    display: flex;
    gap: 2rem;
    align-items: baseline;
    letter-spacing: 0.3rem;
    font-weight: 600;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  button {
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    background: #03383d;
    color: #fbfbfb;
    letter-spacing: 0.2rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: 0.3s;

    &:hover {
      background: #022123;
    }
  }
`

export default Technologies
