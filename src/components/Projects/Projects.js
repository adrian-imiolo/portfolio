import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tenzies from "../../Assets/Projects/tenzies.png";
import photoshop from "../../Assets/Projects/photoshop.png";
import fastTyping from "../../Assets/Projects/fast-typing.png";
import memes from "../../Assets/Projects/memes.png";
import pacman from "../../Assets/Projects/pacman.png";
import snake from "../../Assets/Projects/snake.png";
import chrome from "../../Assets/Projects/chrome.png";
import notes from "../../Assets/Projects/notes.png";
import adwokat from "../../Assets/Projects/adwokat_urszulak.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {" "}
        <h1 className="project-heading">
          My <strong className="purple ">PORTFOLIO </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <p style={{ color: "white" }}>
            <br></br>
            <strong>
              Here are a few personal projects I've worked on recently:
            </strong>
          </p>{" "}
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}></Row>
        <h2>
          <strong className="purple">React JS</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adwokat}
              isBlog={false}
              title="Law Firm Website - in progress..."
              description="Website created for Professional Law Firm Kancelaria Adwokacka Adwokat Gabriela Urszulak"
              tools="React • TypeScript • HTML • CSS • EmailJS"
              link="https://adwokaturszulak.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description="The player can choose if he wants to play with doted dies or with numbered. When the game starts, the timer is running until all same dies are found. Then confetti comes🎉"
              tools="React • JavaScript • HTML • CSS"
              link="https://tenzies-game-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastTyping}
              isBlog={false}
              title="Fast Typing Game"
              description="Click enter and rewrite words from box above as fast as you can in 10 sec. and see how many words you can correctly rewrite in one minute. Check yourself!"
              tools="React • JavaScript • HTML • CSS"
              link="https://fast-typing-game-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photoshop}
              isBlog={false}
              title="E-Photo"
              description="Demo version of e-commerce website where user can add pictures to favorite, to a cart and then choose the size and send an order."
              tools="React • JavaScript • HTML • CSS"
              link="https://ephoto-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes"
              description="Notes app."
              tools="React • JavaScript • HTML • CSS"
              link="https://notes-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memes}
              isBlog={false}
              title="Memes Generator"
              description="Elon Musk would be delighted!"
              tools="React • JavaScript • REST API • HTML • CSS"
              link="https://meme-generator-123.netlify.app/"
            />
          </Col>
          <h2>
            <strong className="purple">Vanilla JavaScript </strong>
          </h2>
          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "center" }}
              imgPath={chrome}
              isBlog={false}
              title="Dashboard"
              description="Chrome extension built using several APIs"
              tools="JavaScript • HTML • CSS"
              link="https://adrian-momentum-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              style={{ textAlign: "center" }}
              imgPath={pacman}
              isBlog={false}
              title="Pacman"
              description="Classic game built with JavaScript"
              tools="JavaScript • HTML • CSS"
              link="https://pacman-123.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake"
              description="🐍Classic game built with JavaScript🐍 Nokia 3310, I miss you.."
              tools="JavaScript • HTML • CSS"
              link="https://snake-123.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
