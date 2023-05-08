import React from 'react'
import wave1 from "../images/wave1.svg"
import styled from 'styled-components'

export const Wave1 = () => {
  return (
    <DIV>
        <img src={wave1} alt="" />
    </DIV>
  )
}

const DIV=styled.div`
  margin-bottom:0px;

  width: 100%;
`