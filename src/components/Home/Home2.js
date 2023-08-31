import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container id="home2">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Self-taught programmer, passionate about building things with
              React and Vue 🏗️ Also developing{" "}
              <a
                href="https://climbium.pl"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "" }}
              >
                <b className="purple">CLIMBIUM.</b>
              </a>
              <br />
              <br />
              My field of interest is&nbsp;
              <b className="purple">Technology</b>, especially in areas related
              to <b className="purple">AI and machine learning</b>
              <br />
              <br />
              Check out my{" "}
              <Link to="/project" style={{ textDecoration: "none" }}>
                <b className="purple">Portfolio</b>
              </Link>{" "}
              to see projects I've worked on and{" "}
              <Link to="/about" style={{ textDecoration: "none" }}>
                <b className="purple">About</b>
              </Link>{" "}
              section to find out more about me and my skills.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/adrian-imiolo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adrian-imiolo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
