import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/adrian-imiolo-avatar.png";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADRIAN</strong>
                <strong className="main-name secondName"> IMIOŁO</strong>
              </h1>
              <div style={{ padding: 50, paddingTop: 10, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 0 }}>
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{ borderRadius: "100%", maxHeight: "550px" }}
                />
              </Tilt>
            </Col>
            <HashLink to="#home2">
              <div className="arrowContainer">
                <BsFillArrowDownCircleFill size={40} className="arrow" />
              </div>
            </HashLink>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
