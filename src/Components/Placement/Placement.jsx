import React from "react";
import { PlacementReducer } from "../../States/Reducers/PlacementRedeucer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Placement.css";

const Placement = () => {
  return (
    <>
      {/* <Slider className="ABC" {...settings}>  */}
      {PlacementReducer.Placement.map((PlacementData) => {
        return (
          <div>
            <p>{PlacementData.discription}</p>
            <p>{PlacementData.discription2}</p>
            <p>{PlacementData.discription3}</p>
          </div>
        );
      })}
      {/* </Slider> */}
    </>
  );
};

export default Placement;
