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
      <ul>
        <li>Is honest and transparent.</li>
        <li>Challenges status-quo and acts for betterment.</li>
        <li>Generates high quality work and results..</li>
        <li>Laboratories with state-of the-art infrastructure..</li>
        <li>Maintains confidentiality as required.</li>
      </ul>

      {/*  */}

      <h3 className="head1">CONTINUOUS LEARNING</h3>

      <h7 cl assName="head1">
        Defination:
      </h7>
      <p className="para-cvoi">
        Deeply interested in and committed to life-long learning. A passion for
        enhancing one’s knowledge, skills, awareness and understanding in a
        variety of fields and subjects.
      </p>

      {/* accordian1*/}
      <Accordion defaultActiveKey="0">
        <Card className="cvoi">
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h3>Demonstrable / Observable Attributes: </h3>
          </Accordion.Toggle>{" "}
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  Is curious, interested and enthusiastic about learning/trying
                  new things..
                </li>
                <li>Is open to learn from as many sources..</li>
                <li>
                  Takes interest in a variety of subjects to broaden
                  understanding and perspective..
                </li>
                <li>Sets and achieves learning goals on an on-going basis..</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <h3 className="head1">ACCOUNTABILITY</h3>

      <h7 cl assName="head1">
        Defination:
      </h7>
      <p className="para-cvoi">
        Holding oneself responsible for making things happen and delivering the
        expected result/outcome as per set performance criteria.
      </p>

      <Accordion defaultActiveKey="0">
        <Card className="cvoi">
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h3>Demonstrable / Observable Attributes: </h3>
          </Accordion.Toggle>{" "}
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>Makes and keeps commitments.</li>
                <li>Takes initiative and volunteers help..</li>
                <li>Takes ownership for results.</li>
                <li> Works with a ‘boundary less’ mindset..</li>
                <li>
                  Communicates clearly and specifically to set understanding of
                  role and expectations of all parties in the process.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <h3 className="head1">TEAM WORK</h3>

      <h7 cl assName="head1">
        Defination:
      </h7>
      <p className="para-cvoi">
        Being there for each other and holding mutual accountability till the
        goal is achieved.
      </p>
      <Accordion defaultActiveKey="0">
        <Card className="cvoi">
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h3>Demonstrable / Observable Attributes: </h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  Is flexible to adapt one’s role to the changing demands of the
                  situation..
                </li>
                <li>Is willing to go the extra mile...</li>
                <li>
                  Gives priority to Team interest and welfare over own comfort.
                </li>
                <li>
                  Pushes self and others to deliver faster, better and superior
                  results..
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <h3 className="head1">SICIAL CONSCIOUNESS</h3>

      <h7 cl assName="head1">
        Defination:
      </h7>
      <p className="para-cvoi">
        Going beyond the physical boundaries of the campus to make impactful
        contribution to community and society needs at large.
      </p>

      <Accordion defaultActiveKey="0">
        <Card className="cvoi">
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h3>Demonstrable / Observable Attributes: </h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  Engages with the community to understand their problems and
                  needs.
                </li>
                <li>Is enthusiastic about engineering solutions.</li>
                <li>
                  Participates and contributes to planned community development
                  initiatives.
                </li>
                <li>
                  Encourages and involves others to contribute and make a
                  difference.
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default CVOI;
