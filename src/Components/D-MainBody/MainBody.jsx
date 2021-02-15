import React from "react";
import "./MainBody.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainBody = ({ Data }) => {
  return (
    <React.Fragment>
      {/* // about us page starts from here */}
      <div className="container">
        <div className="main">
          <div className="tittle">
            <h2>{Data.heading}</h2>
          </div>
          <p className="owner">{Data.discription}</p>
          <p>{Data.discription2}</p>
          <p> {Data.discription3}</p>
          {/* features  */}
          <div className="feature">
            <h3 className="headings">
              <i class="fa fa-tags" aria-hidden="true">
                FEATURES
              </i>
            </h3>
            {Data.features}
          </div>
          {/* OUR VISION  */}
          <div>
            <h3 className="headings">
              <i class="fa fa-tags" aria-hidden="true">
                OUR VISION
              </i>
            </h3>
            <p>{Data.vision}</p>
          </div>
          {/* OUR MISSION */}
          <div>
            <h3 className="headings">
              <i class="fa fa-tags" aria-hidden="true">
                OUR MISSION
              </i>
            </h3>
            {Data.mission}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainBody;
