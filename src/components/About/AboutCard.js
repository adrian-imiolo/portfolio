import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adrian Imioło </span>
            from <span className="purple"> Wrocław, Poland.</span>
            <br />I love using React and Vue, I'm currently working on project{" "}
            <a
              href="https://climbium.pl"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
