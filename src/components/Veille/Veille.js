import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import { BsRss, BsSearch, BsCpu } from "react-icons/bs";

function Veille() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Veille <strong className="purple">Technologique </strong>
        </h1>
        <p style={{ color: "white" }}>
          Comment je me tiens informé des évolutions du monde numérique.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* MÉTHODOLOGIE */}
          <Col md={4} className="veille-card">
            <Card className="project-card-view">
              <Card.Body>
                <BsRss size={40} className="purple" style={{ marginBottom: "20px" }} />
                <Card.Title>Moyens de Veille</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  J'utilise principalement <strong>Feedly</strong> pour centraliser mes flux RSS. Je suis également des comptes d'experts sur <strong>X (Twitter)</strong> et je consulte régulièrement <strong>IT-Connect</strong> et <strong>L'Informaticien</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* THÉMATIQUE 1 */}
          <Col md={4} className="veille-card">
            <Card className="project-card-view">
              <Card.Body>
                <BsCpu size={40} className="purple" style={{ marginBottom: "20px" }} />
                <Card.Title>Sujet : La Virtualisation</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Suivi de l'évolution des conteneurs (Docker/Kubernetes) et des solutions d'hyperconvergence comme Proxmox pour optimiser les infrastructures réseaux.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* THÉMATIQUE 2 */}
          <Col md={4} className="veille-card">
            <Card className="project-card-view">
              <Card.Body>
                <BsSearch size={40} className="purple" style={{ marginBottom: "20px" }} />
                <Card.Title>Sujet : Cybersécurité</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Veille active sur les nouvelles vulnérabilités (CVE) et les méthodes de protection périmétrique pour garantir l'intégrité des données en entreprise.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Veille;