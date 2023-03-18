import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import useApi from 'hooks/useApi'

interface ModalProps {
  modalVisibility: boolean
  setModal: () => void
  setUpdateScreen: () => void
}

const CreateModal = ({ modalVisibility, setModal, setUpdateScreen }: ModalProps) => {
  const [value, setValue] = useState(0)
  const [iconSize, setIconSize] = useState(25)
  const [fontSize, setFontSize] = useState(0)
  const [iconName, setIconName] = useState('')
  const [technology, setTechnology] = useState('')
  const { createTechnology } = useApi()

  useEffect(() => {
    setValue(0)
    setIconSize(25)
    setFontSize(0)
    setIconName('')
    setTechnology('')
  }, [modalVisibility === true])

  return (
    <ModalContainer style={{ display: modalVisibility ? 'flex' : 'none' }}>
      <button
        className="create"
        onClick={() => {
          createTechnology({ technology, iconSize, fontSize, iconName, value })
          setUpdateScreen()
        }}
      >
        Create
      </button>
      <h2>Create new technology</h2>
      <AiOutlineClose size={50} color={'#FBFBFB'} onClick={setModal} />
      <div>
        <h3>Technology name:</h3>
        <input type="text" value={technology} onChange={(e) => setTechnology(e.target.value)} />
      </div>
      <div>
        <h3>Value:</h3>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onInput={(e: any) => setValue(e.target.value)} // eslint-disable-line
        />
        <output style={{ color: '#FBFBFB' }}>{value}</output>
      </div>
      <div>
        <h3>Icon size:</h3>
        <input
          type="range"
          min={25}
          max={150}
          value={iconSize}
          onInput={(e: any) => setIconSize(e.target.value)} // eslint-disable-line
        />
        <output style={{ color: '#FBFBFB' }}>{iconSize}</output>
      </div>
      <div>
        <h3>Icon name:</h3>
        <input type="text" value={iconName} onChange={(e) => setIconName(e.target.value)} />
      </div>
      <div>
        <h3>Font size (rem):</h3>
        <input
          type="range"
          min={0}
          max={50}
          value={fontSize * 10}
          onInput={(e: any) => setFontSize(e.target.value / 10)} // eslint-disable-line
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
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    text-align: center;
  }

  svg {
    cursor: pointer;
    padding: 0;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .create {
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

export default CreateModal
