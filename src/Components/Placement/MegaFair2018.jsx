import React from "react";
import { PlacementReducer } from "../../States/Reducers/PlacementRedeucer";

const MegaFair2018 = () => {
  return (
    <div>
      {PlacementReducer.Placement.map((PlacementData) => {
        return (
          <div>
            <iframe src={PlacementData.pdf} frameborder="0"></iframe>
          </div>
        );
      })}
    </div>
  );
};

export default MegaFair2018;
