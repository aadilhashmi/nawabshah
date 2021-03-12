import React from 'react';
import { PlacementReducer } from '../../States/Reducers/PlacementRedeucer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Placement.css";




const Placement = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <>
           
           <Slider className="ABC" {...settings}> 
            {PlacementReducer.Placement.map((PlacementData) => {
              return (
                <div>
                  {/* <p>{PlacementData.discription}</p>
                  <p>{PlacementData.discription2}</p>
                  <p>{PlacementData.discription3}</p> */}
                  <iframe src={PlacementData.pdf} frameborder="0"></iframe>
                </div>
              );
              
            })}
            </Slider>
            </>
    );
};

export default Placement;