import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";
import MainBody from "../D-MainBody/MainBody";
import FooterSection from "../E-FooterSection/FooterSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HC from "../Linkpages/HC/HC";
import HS from "../Linkpages/HS/HS";

const Landing = () => {
  return (
    <div>
      <HeaderSection />
      <LeftNevigation />
      <Row>
        <Col lg={9}>
          <Router>
            <Switch>
              <Route path="/HC">
                <Row>
                  <Col lg={12}>
                    <MainBody />
                  </Col>
                </Row>
              </Route>
            </Switch>
          </Router>
        </Col>
        <RightNevigation />
      </Row>
      <FooterSection />
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
    </div>
  );
};

export default Landing;
