import React from 'react';
import { PlacementReducer } from '../../States/Reducers/PlacementRedeucer';

const Placement = () => {
    return (
      <div>
        <div>
            {PlacementReducer.Placement.map((PlacementData) => {
              return (
                <div>
                  <p>{PlacementData.discription}</p>
                  <p>{PlacementData.discription2}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
};

export default Placement;