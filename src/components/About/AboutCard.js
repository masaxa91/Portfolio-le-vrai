import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour! je suis <span className="purple"> Marius Atzenhoffer</span>{" "}
            je viens de <span className="purple">Paris, France</span>.
            <br />
            Je suis actuellement en étude en{" "}
            <span className="purple">BTS SIO</span> à{" "}
            <span className="purple">Avranches </span>.
            <br />Je suis titulaire du baccalauréat (BAC) {" "}
            <span className="purple">Systeme Numerique.</span> {" "}

            <br />
            <br />
            En dehors du Dev et du Réseau, j'adore participer à des activités qui me permettent de rester active :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer au jeux vidéo 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Découvrir et apprendre de nouvelle compétence ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et explorer de nouveaux lieux 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
