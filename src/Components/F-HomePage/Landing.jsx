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
import P from "../Linkpages/P/P";
import EP from "../Linkpages/EP/EP";

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

        {/* Hs page routing starts from here */}

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
                <Col lg={10}>
                  <EP />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>

        {/* right nevigation bar routing here */}
        <Col lg={3}>
          <RightNevigation />
        </Col>

        <FooterSection />
      </Row>
    </div>
  );
};

export default Landing;
