import React, { Component } from "react";
import Slider from "react-slick";
import Slick2 from "./Slick2.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="slider2">

        <Slider {...settings}>

          <div className="posts2" >
         
          <img src="https://media.istockphoto.com/id/487846550/vector/target-icon-on-a-round-button.jpg?s=612x612&w=0&k=20&c=H2i4Gk49cdJ1vcSh_S7MuXA-kEuye0RJbZPf66Yjxc4=" alt="" /> 
           
                <h2>Set your own Dates</h2>
                
                <p>Make your Budget Truly your own by setting <br /> your start and end dates to suit when <br /> your money comes in</p>
   
          
          </div>

          <div className="posts2" >
         
          <img src="https://icon-library.com/images/message-app-icon/message-app-icon-6.jpg" alt="" /> 
           
                <h2>Create your own Categoies</h2>
                
                <p>Choose from our Categoies or make your own. <br /> Set your own target abd see <br /> exactly where you stand</p>
   
          
          </div>


          <div className="posts2" >
         
          <img src="https://static.vecteezy.com/system/resources/previews/005/177/924/original/music-app-icon-in-trendy-blue-eyes-style-isolated-on-soft-blue-background-free-vector.jpg" alt="" /> 
           
                <h2>Simple to use</h2>
                
                <p>Add your income and track your expenses <br /> and see what you've spent at a glance <br /> and track a record on your own</p>
   
          
          </div>

          <div className="posts2" >
         
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsqB7d5m0zPIHy1Qg0Qvtedi8LL9PNrib0SPjXvj4xRXiuu0DDXh27pEKK0aDcY40CE0&usqp=CAU" alt="" /> 
           
                <h2>Analyse your spending</h2>
                
                <p>See Detail report on your spending <br /> habits and create forecasts of your <br /> spending</p>
   
          
          </div>

      

        </Slider>
      </div>
    );
  }
}