import React from "react";
import "./CVOI.css";
import { Form, Button, Row, Col, Card, Accordion } from "react-bootstrap";
const CVOI = () => {
  return (
    <div className="container">
      <h2 className="head1">
        <b>CORE VALUES OF INSTITUTE</b>
      </h2>
      <div className="border"></div>
      <br />
      <h3 className="head1">Integrity</h3>
      <h7 cl assName="head1">
        Defination:
      </h7>
      <p className="para-cvoi">
        Setting the highest ethical standards for self and others in everything
        we do. Our actions, behaviours and conduct must always generate trust
        and confidence in our stakeholders.
      </p>

      {/* accordian  */}

      <div className="accordian">
        <Accordion defaultActiveKey="0">
          <Card className="cvoi">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <h3>Demonstrable / Observable Attributes:</h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>Is honest and transparent.</li>
                  <li>Challenges status-quo and acts for betterment.</li>
                  <li>Generates high quality work and results..</li>
                  <li>Laboratories with state-of the-art infrastructure..</li>
                  <li>Maintains confidentiality as required.</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/*  */}

        <h2 className="head1">
          <b>CONTINUOUS LEARNING</b>
        </h2>
        <div className="border"></div>
        <br />
        <h3 className="head1">Integrity</h3>
        <h7 cl assName="head1">
          Defination:
        </h7>
        <p className="para-cvoi">
          Deeply interested in and committed to life-long learning. A passion
          for enhancing one’s knowledge, skills, awareness and understanding in
          a variety of fields and subjects.
        </p>

        {/* accordian2 */}
        <Accordion defaultActiveKey="0">
          <Card className="cvoi">
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>{" "}
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default CVOI;
