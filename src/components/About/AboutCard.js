import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { GiMountainClimbing } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adrian Imioło </span>
            from <span className="purple"> Wrocław, Poland.</span>
            <br />I love using React and I'm currently working on project{" "}
            <a
              href="https://climbium.pl"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <span className="purple">CLIMBIUM</span>
            </a>
            ,<br></br>
            an e-commerce business, where we compose and deliver the best
            supplements for climbers.
            <br />
            <br />
            Some activities and interests that I love:
          </p>
          <ul>
            <li className="about-activity">
              🚀 Science and Technology(especially AI).
            </li>

            <li className="about-activity">🎸 Guitar playing</li>
            <li className="about-activity">🍻 Home-brewing</li>
            <li className="about-activity">🧗Climbing</li>
            <li className="about-activity">♟️Chess</li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Except for time spent with friends and a night with a beautiful woman,
            there is nothing more beautiful than "aha!" moments when you try
            to solve a problem!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Adrian</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

// "Except for time spent with friends and a night with a beautiful girl,
// there is nothing more beautiful than "aha!" moments when you try
// to solve a problem!"{" "}
