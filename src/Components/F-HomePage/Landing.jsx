import React from "react";
import { Row, Col } from "react-bootstrap";
import HeaderSection from "../A-HeaderSection/HeaderSection";
import LeftNevigation from "../B-LeftNevigation/LeftNevigation";
import RightNevigation from "../C-RightNevigation/RightNevigation";

import FooterSection from "../E-FooterSection/FooterSection";

import AllRouting from "../All-Routing/AllRouting";
import Placement from "../Placement/Placement";

const Landing = () => {
  return (
    <div>
      <Row>
        {/* <HeaderSection /> */}
        {/* <LeftNevigation /> */}
        {/* <AllRouting /> */}

        {/* right nevigation bar routing here */}

        <Col lg={3}>{/* <RightNevigation /> */}</Col>
      </Row>
      <FooterSection />
      <Placement />
    </div>
  );
};
export default Landing;
