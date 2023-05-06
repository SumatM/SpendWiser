import React from 'react'
import styled from 'styled-components'
import wave1 from "../images/wave1.svg"
import  Wave  from '../images/wave.svg'
export const How_Work = () => {
   



  return (
    <DIV>
        <div id='bg1'>
            <h1>How It Works</h1>
            <p>Take control of your finances today – get started in minutes</p>
        </div>
        <div className='HowBaneer1'>
            <div>
                <img width="60%" src="https://img.freepik.com/free-vector/blank-screen-laptop-gadget-icon-isolated-white-background_1308-46353.jpg" alt="" />
            </div>
            <div>
              <div>
                <h1><img width="5%" src="https://www.funimada.com/assets/images/cards/big/1-15.gif" alt="" /> Downlaod App</h1>
                <h6>Just Search isMoney on google's <br /> playstore and tap install</h6>
              </div>
              <div>
              <h1><img width="5%" src="https://www.funimada.com/assets/images/cards/big/2-15.gif" alt="" />Create your Budget</h1>
                <h6>Decide when you want your budget <br />to Start and end with the dates</h6>
              </div>
              <div>
              <h1><img width="5%" src="https://www.funimada.com/assets/images/cards/big/3-15.gif" alt="" />Set your income and Categories</h1>
                <h6>Just Search is Money on google</h6>
                <h6>choose from our suggestions or craet <br/>your own, then set your spending limit </h6>
              </div>
            </div>
        </div>
        <div>
            <div>
                <h1>Manage Your Money Simply And Easily</h1>
                <p>See exactly where you stand financially when you open the app</p>
                <div className='flexit'>
                <div>
                    <p><img width="3%" src="https://www.pngkit.com/png/full/1005-10058573_free-check-mark-transparent-background-clipart-hd-images.png" alt="" />Clean and simple design</p>
                    <p><img width="3%" src="https://www.pngkit.com/png/full/1005-10058573_free-check-mark-transparent-background-clipart-hd-images.png" alt="" />See your finances at a glace</p>
                    <p><img width="3%" src="https://www.pngkit.com/png/full/1005-10058573_free-check-mark-transparent-background-clipart-hd-images.png" alt="" />Add your expenses with a tap</p>
                </div>
                <div>
                <img width="80%" src="https://img.freepik.com/free-vector/blank-screen-laptop-gadget-icon-isolated-white-background_1308-46353.jpg" alt="" />
                </div>
                </div>
            </div>
        </div>
        <img src={Wave} alt="" />
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
    .flexit{
        display: flex;
        flex-direction:row;
       
    }
   
`