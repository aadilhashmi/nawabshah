import React from "react";
import "./CVOI.css";
import { Form, Button, Row, Col, Card, Accordion } from "react-bootstrap";
const CVOI = () => {
  return (
    <div className="container">
      <h2 className="head1">
        <b>
          <u>Core Values Of Institute</u>
        </b>
      </h2>
      <h3 className="head1">Integrity</h3>
      <h7 className="head1">Defination:</h7>
      <p className="para-cvoi">
        Setting the highest ethical standards for self and others in everything
        we do. Our actions, behaviours and conduct must always generate trust
        and confidence in our stakeholders.
      </p>

      <div>
        <Accordion defaultActiveKey="0">
          <Card className="cvoi">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h3>Demonstrable / Observable Attributes:</h3>
              </Accordion.Toggle>
            </Card.Header>
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
          <Card className="cvoi">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
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
