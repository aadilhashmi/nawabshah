import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";
import MainBody from "../D-MainBody/MainBody";
import HC from "../Linkpages/HC/HC";
import FooterSection from "../E-FooterSection/FooterSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HS from "../Linkpages/HS/HS";

const Landing = () => {
  return (
    <div>
      <Row>
        <HeaderSection />
        <LeftNevigation />
        <RightNevigation />

        <Col lg={9}>
          <Router>
            <Switch>
              <Route path="/Mainbody">
                <Row>
                  <Col lg={12}>
                    <MainBody />
                  </Col>
                </Row>
              </Route>
            </Switch>
          </Router>
        </Col>

        <Router>
          <Switch>
            <Route path="/HC">
              <Row>
                <Col lg={12}>
                  <HC />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>

        <FooterSection />
      </Row>
    </div>
  );
};

export default Landing;
