import styled from 'styled-components'
import { useState } from 'react'
import ITechnology from 'interfaces/Technology'
import { AiOutlineClose } from 'react-icons/ai'

interface ModalProps extends ITechnology {
  modalVisibility: boolean
  setModal: () => void
}

const Modal = ({
  technology,
  value,
  iconName,
  modalVisibility,
  fontSize,
  iconSize,
  setModal,
}: ModalProps) => {
  const [TechValue, TechVetValue] = useState(value)
  const [techIconSize, setTechIconSize] = useState<number>(iconSize)
  const [techIconName, setTechIconName] = useState(iconName)
  const [techFontSize, setTechFontSize] = useState(fontSize)

  return (
    <ModalContainer style={{ display: modalVisibility ? 'flex' : 'none' }}>
      <button className="update">Update</button>
      <h2>{technology}</h2>
      <button>
        <AiOutlineClose size={50} color={'#FBFBFB'} onClick={setModal} />
      </button>
      <div>
        <h3>Value:</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={TechValue}
          onInput={(e: any) => TechVetValue(e.target.value)} // eslint-disable-line
        />
        <output style={{ color: '#FBFBFB' }}>{TechValue}</output>
      </div>
      <div>
        <h3>Icon size:</h3>
        <input
          type="range"
          min={25}
          max={150}
          value={techIconSize}
          onInput={(e: any) => setTechIconSize(e.target.value)} // eslint-disable-line
        />
        <output style={{ color: '#FBFBFB' }}>{techIconSize}</output>
      </div>
      <div>
        <h3>Icon name:</h3>
        <input type="text" value={techIconName} onChange={(e) => setTechIconName(e.target.value)} />
      </div>
      <div>
        <h3>Font size (rem):</h3>
        <input
          type="range"
          min={0}
          max={50}
          value={techFontSize * 10}
          onInput={(e: any) => setTechFontSize(e.target.value / 10)} // eslint-disable-line
        />
        <output style={{ color: '#FBFBFB' }}>{fontSize}</output>
      </div>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  height: 70%;
  width: 50%;
  left: 25%;
  top: 15%;
  background: #0c0f17;
  border: 4px solid #5b43e5;
  padding: 1rem;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 4rem;
    letter-spacing: 0.4rem;
    text-align: center;
  }

  button {
    background: transparent;
    cursor: pointer;
    padding: 0;
    border: none;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .update {
    color: #fbfbfb;
    left: 2rem;
    right: 0;
    background: #1e193a;
    border: 3px solid #665c9d;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    width: min-content;
    padding: 0.6rem 1.2rem;

    &:hover {
      background: #2f2956;
      border: 3px solid #7e73bb;
    }
  }

  h3 {
    margin-bottom: 0.2rem;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
  }

  input[type='range'] {
    width: 92%;
    margin-right: 1rem;
  }

  output {
    font-size: 1.4rem;
  }

  input[type='text'] {
    width: 92%;
    margin-right: 1rem;
    background: #070a0f;
    border: none;
    color: #fbfbfb;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
    padding: 0.6rem;

    &:focus {
      border: 2px solid purple;
      outline: none;
    }
  }
`

export default Modal
