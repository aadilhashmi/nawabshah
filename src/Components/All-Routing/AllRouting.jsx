import React from "react";
import { Row, Col } from "react-bootstrap";
import HC from "../Linkpages/A-HC/HC";
import HS from "../Linkpages/B-HS/HS";
import P from "../Linkpages/E-P/P";
import EP from "../Linkpages/F-EP/EP";
import JS from "../Linkpages/C-JS/JS";
import D from "../Linkpages/D-D/D";
import CVOI from "../Linkpages/G-CVOI/CVOI";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainBodyReducers } from "../../States/Reducers/MainBodyReducers";
import MainBody from "../D-MainBody/MainBody";
const AllRouting = () => {
  return (
    <div>
      <React.Fragment>
        {/* main body routing starts from here */}
        <Router>
          <Switch>
            <Route path="/MainBody">
              <Row>
                <Col lg={12}>
                  {MainBodyReducers.mainBody.map((fecthData) => {
                    return <MainBody Data={fecthData} />;
                  })}
                </Col>
              </Row>
            </Route>

            {/* Hc page routing starts from here  */}

            <Route path="/HC">
              <Row>
                <Col lg={12}>
                  <HC />
                </Col>
              </Row>
            </Route>

            {/* Hs page routing starts from here */}

            <Route path="/HS">
              <Row>
                <Col lg={12}>
                  <HS />
                </Col>
              </Row>
            </Route>

            {/* JS routing here */}

            <Route path="/JS">
              <Row>
                <Col lg={9}>
                  <JS />
                </Col>
              </Row>
            </Route>

            {/* DIRECTOR Page routing here */}

            <Route path="/D">
              <Row>
                <Col lg={12}>
                  <D />
                </Col>
              </Row>
            </Route>

            {/* principle routing starts from here */}
            <Route path="/P">
              <Row>
                <Col lg={10}>
                  <P />
                </Col>
              </Row>
            </Route>

            {/* Ep page routing starts from here */}

            <Route path="/EP">
              <Row>
                <Col lg={12}>
                  <EP />
                </Col>
              </Row>
            </Route>

            {/* CORE Value page routing from here */}

            <Route path="/CVOI">
              <Row>
                <Col lg={9}>
                  <CVOI />
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default AllRouting;
