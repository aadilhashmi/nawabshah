import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { PlacementReducer } from "../../States/Reducers/PlacementRedeucer";

const PlacementCarasoul = () => {
  return (
    <div>
      <Slider>
        {PlacementReducer.Placement.map((PlacementData) => {
          return (
            <div>
              <img src={PlacementData.image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PlacementCarasoul;
