import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ITechnology from 'interfaces/Technology'
import { AiOutlineClose } from 'react-icons/ai'
import useApi from 'hooks/useApi'

interface ModalProps extends ITechnology {
  modalVisibility: boolean
  setModal: () => void
  setUpdateScreen: () => void
}

const UpdateModal = ({
  technology,
  value,
  iconName,
  modalVisibility,
  fontSize,
  iconSize,
  setModal,
  setUpdateScreen,
}: ModalProps) => {
  const [techValue, setTechValue] = useState(value)
  const [techIconSize, setTechIconSize] = useState(iconSize)
  const [techIconName, setTechIconName] = useState(iconName)
  const [techFontSize, setTechFontSize] = useState(fontSize)
  const { updateTechnology } = useApi()

  useEffect(() => {
    setTechValue(value)
    setTechIconSize(iconSize)
    setTechIconName(iconName)
    setTechFontSize(fontSize)
  }, [modalVisibility === true])

  return (
    <ModalContainer style={{ display: modalVisibility ? 'flex' : 'none' }}>
      <button
        className="update"
        onClick={() => {
          updateTechnology({
            technology,
            value: techValue,
            iconSize: techIconSize,
            iconName: techIconName,
            fontSize: techFontSize,
          })
          setUpdateScreen()
        }}
      >
        Update
      </button>
      <h2>{technology}</h2>
      <AiOutlineClose size={50} color={'#FBFBFB'} onClick={setModal} />
      <div>
        <h3>Value:</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={techValue}
          onInput={(e: any) => setTechValue(e.target.value)} // eslint-disable-line
        />
        <output style={{ color: '#FBFBFB' }}>{techValue}</output>
      </div>
      <div>
        <h3>Icon size (rem):</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={techIconSize * 10}
          onInput={(e: any) => setTechIconSize(e.target.value / 10)} // eslint-disable-line
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
        <output style={{ color: '#FBFBFB' }}>{techFontSize}</output>
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

  svg {
    cursor: pointer;
    padding: 0;
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
    cursor: pointer;

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
    width: 90%;
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

export default UpdateModal
