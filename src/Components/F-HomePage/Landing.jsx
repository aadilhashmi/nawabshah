import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";
import MainBody from "../D-MainBody/MainBody";
import FooterSection from "../E-FooterSection/FooterSection";
import HS from "../Linkpages/HS/HS";

const Landing = () => {
  return (
    <div>
      <HeaderSection />
      <LeftNevigation />
      <Row>
        <Col lg={9}>
          <MainBody />
        </Col>
        <RightNevigation />
      </Row>
      <FooterSection />
    </div>
  );
};

export default Landing;
