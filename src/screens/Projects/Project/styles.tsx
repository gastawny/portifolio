'use client'

import { styled } from 'styled-components'

const Bg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${() =>
      ['0deg', '45deg', '90deg', '120deg', '180deg', '210deg', '270deg', '330deg'][
        Math.floor(Math.random() * 8)
      ]},
    rgba(69, 243, 255, 1) 0%,
    rgba(87, 58, 255, 1) 100%
  );
  width: 80%;
  height: 70vh;
  border-radius: 20px;
  margin-left: 10%;

  @media screen and (max-width: 500px) {
    height: 35vh;
    width: 90%;
    margin-left: 0;
    border-radius: 20px 20px 0 0;
  }
`

const BoxContainer = styled.div<{ type: string }>`
  position: absolute;
  top: 32%;
  left: ${({ type }) => (type === 'left' ? '-2%' : 'auto')};
  right: ${({ type }) => (type === 'right' ? '-2%' : 'auto')};
  z-index: 2;
  width: 36%;
  height: 36%;

  @media screen and (max-width: 500px) {
    position: static;
    width: 90%;
    height: 100%;
  }
`

export { Bg, BoxContainer }
