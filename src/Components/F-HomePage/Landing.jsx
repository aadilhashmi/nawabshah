import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";
import MainBody from "../D-MainBody/MainBody";
import FooterSection from "../E-FooterSection/FooterSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HC from "../Linkpages/E-HC/HC";
import HS from "../Linkpages/A-HS/HS";
import P from "../Linkpages/C-P/P";
import EP from "../Linkpages/D-EP/EP";
import CVOI from "../Linkpages/CVOI/CVOI";
import JS from "../Linkpages/B-JS/JS";

const Landing = () => {
  return (
    <div>
      <Row>
        <HeaderSection />
        <LeftNevigation />
        {/* main body routing starts from here */}
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
        {/* Hs page routing starts from here  */}+
        <Router>
          <Switch>
            <Route path="/HS">
              <Row>
                <Col lg={12}>
                  <HS />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
        {/* Hc page routing starts from here  */}
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
        {/* JS rosuting stars from here */}
        <Router>
          <Switch>
            <Route path="/JS">
              <Row>
                <Col lg={10}>
                  <JS />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
        {/* principle routing starts from here */}
        <Router>
          <Switch>
            <Route path="/P">
              <Row>
                <Col lg={10}>
                  <P />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
        {/* Ep page routing starts from here */}
        <Router>
          <Switch>
            <Route path="/EP">
              <Row>
                <Col lg={9}>
                  <EP />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
        {/* CVOI page routing starts from here */}
        <Router>
          <Switch>
            <Route path="/CVOI">
              <Row>
                <Col lg={10}>
                  <CVOI />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
        {/* right nevigation bar routing here */}
        <Col lg={3}>
          <RightNevigation />
        </Col>
      </Row>
      <FooterSection />
    </div>
  );
};

export default Landing;
