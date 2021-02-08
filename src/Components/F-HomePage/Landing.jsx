import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";
import MainBody from "../D-MainBody/MainBody";
import FooterSection from "../E-FooterSection/FooterSection";
import HC from "../Linkpages/HC/HC";

const Landing = () => {
  return (
    <div>
      <HeaderSection />
      <LeftNevigation />
      <Row>
        <Col lg={9}>
          <MainBody />
        </Col>
        <Col lg={3}>
          <RightNevigation />
        </Col>
        <Col>
          <HC />
        </Col>
      </Row>
      <FooterSection />
    </div>
  );
};

export default Landing;
