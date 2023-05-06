import React from 'react'
import styled from 'styled-components'

export const How_Work = () => {
  return (
    <DIV>
        <div>
            <h1>How It Works</h1>
            <p>Take control of your finances today – get started in minutes</p>
        </div>
        <div className='HowBaneer1'>
            <div>
                <img src="https://isavemoney.app/assets/images/step-1.png" alt="" />
            </div>
            <div>
                <h3>Carasol</h3>
            </div>
        </div>
    </DIV>
  )
}

const DIV=styled.div`
    .HowBaneer1{
        display: flex;
        flex-direction:row;
        margin: auto;
        align-items: center;
        padding: 5%;
        width: 95%;

    }
`