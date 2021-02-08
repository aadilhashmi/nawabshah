import React from "react";
import { ListGroup } from "react-bootstrap";
import "./RightNevigation.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HC from "../Linkpages/HC/HC";

const RightNevigation = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebars">
          <ListGroup>
            <ListGroup.Item className="about" href="">
              ABOUT NSAKCET
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Honorary Chairman
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Honorary Secretrary
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Joint Secretrary
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Director
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Principle
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Eminent Proffessors
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Core Values Of Institute
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Code Of Conduct
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Plagiarism Code Of Ethices
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Service Rules
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Committes
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              IPR Cell
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Proffessiional Code
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Organisation Code
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Organisation Chart
            </ListGroup.Item>
            <ListGroup.Item className="anchor" action href="">
              Best Practice
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </Router>
  );
};

export default RightNevigation;
