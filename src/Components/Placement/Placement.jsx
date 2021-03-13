import React from "react";
import { PlacementReducer } from "../../States/Reducers/PlacementRedeucer";
import "./Placement.css";

const Placement = () => {
  return (
    <>
      {/* <Slider >  */}
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
