import React from "react";
import { Col, Row } from "react-bootstrap";
import scrimba from "../../Assets/scrimba.png";
import cs50 from "../../Assets/cs50.jpg";
import fcc from "../../Assets/fcc.jpg";
import udemy from "../../Assets/udemy.jpg";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
          <img src={scrimba} alt="Scrimba" className="img-fluid" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://cs50.harvard.edu/college/2022/spring/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cs50} alt="CS50" className="img-fluid" />
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.freecodecamp.org/learn/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fcc} alt="freeCodeCamp" className="img-fluid" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.udemy.com/course/blockchain-developer/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={udemy} alt="udemy" className="img-fluid" />
        </a>
      </Col>
    </Row>
  );
}

export default Education;
