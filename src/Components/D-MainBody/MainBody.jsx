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
            <h2>Nawab Shah Alam Khan College Of Engineering and Technology</h2>
          </div>
          <p className="owner">{Data.discription}</p>
          <p>{Data.discription2}</p>
          <p></p>
          {/* features  */}
          <div className="feature">
            <h3 className="headings">
              <i class="fa fa-tags" aria-hidden="true">
                FEATURES
              </i>
            </h3>
            <ul>
              <li>Located" at Malakpet, heart of the city of Hyderabad.</li>
              <li>
                5 acres of sprawling campus with 50,000 sft of built up area..
              </li>
              <li>
                Well connected by train and RTC buses. Very close to Malakpet
                railway station and bus station..
              </li>
              <li>Laboratories with state-of the-art infrastructure.</li>
              <li>Well qualified and experienced faculty.</li>
              <li>Seminar halls for every department.</li>
              <li>
                Full fledged training and placements cell for industry
                readiness..
              </li>
            </ul>
          </div>
          {/* OUR VISION  */}
          <div>
            <h3 className="headings">
              <i class="fa fa-tags" aria-hidden="true">
                OUR VISION
              </i>
            </h3>
            <p>
              To impart quality technical education with strong ethics,
              producing technically sound engineers capable of serving the
              society and the nation in a responsible manner.
            </p>
          </div>
          {/* OUR MISSION */}
          <div>
            <h3 className="headings">
              <i class="fa fa-tags" aria-hidden="true">
                OUR MISSION
              </i>
            </h3>
            <ul>
              <li>
                To provide adequate knowledge encompassing strong technical
                concepts and soft skills thereby inculcating sound ethics.
              </li>
              <li>
                To provide a conducive environment to nurture creativity in
                teaching- learning process.
              </li>
              <li>
                To identify and provide facilities which create opportunities
                for deserving students of all communities to excel in their
                chosen fields.
              </li>
              <li>
                To strive and contribute to the needs of the society and the
                nation by applying advanced engineering and technical concepts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainBody;
