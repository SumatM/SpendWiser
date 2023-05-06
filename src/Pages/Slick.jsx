import React, { Component } from "react";
import Slider from "react-slick";
import Slick from "./Slick.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider">

        <Slider {...settings}>

          <div className="posts" >
         
          <p><img src="https://isavemoney.app/assets/images/team/2.png" alt="" /> <h2>Ratha Roy</h2></p>
           
          
                <h4>CEO of Facebook</h4>
                <p>Our service aims to provide <br /> a seamless experience, and we're glad <br /> to hear that you found it helpful and reliable.</p>
   
          
          </div>

          <div>
          <p><img src="https://isavemoney.app/assets/images/team/3.png" alt="" /> <h2>Ratha Roy</h2></p>
           
          
                <h4>CEO of Facebook</h4>
                <p>Our service aims to provide <br /> a seamless experience, and we're glad <br /> to hear that you found it helpful and reliable.</p>
   
          </div>

          <div>
          <p><img src="https://isavemoney.app/assets/images/team/1.png" alt="" /> <h2>Atha Roy</h2></p>
           
          
                <h4>CEO of Google</h4>
                <p>Our service aims to provide <br /> a seamless experience, and we're glad <br /> to hear that you found it helpful and reliable.</p>
   
          </div>

          <div>
          <p><img src="https://isavemoney.app/assets/images/team/2.png" alt="" /> <h2>Natha Roy</h2></p>
           
          
                <h4>CEO of Apple</h4>
                <p>Our service aims to provide <br /> a seamless experience, and we're glad <br /> to hear that you found it helpful and reliable.</p>
   
          </div>

        </Slider>
      </div>
    );
  }
}