import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsInfoCircle, BsFileEarmarkPdf } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view" style={{ display: "flex", flexDirection: "column" }}>
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          style={{ height: "200px", objectFit: "contain", padding: "10px" }} 
        />
        <Card.Body style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Card.Title style={{ fontWeight: "bold", textAlign: "center", minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "center", fontSize: "0.95rem", minHeight: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {props.description}
          </Card.Text>

          <div style={{ marginTop: "auto", textAlign: "center", paddingTop: "15px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {props.demoLink && (
              <Button variant="primary" href={props.demoLink} target="_blank">
                <CgWebsite /> &nbsp; Démo
              </Button>
            )}

            {props.hasDetails && (
              <Button variant="outline-light" onClick={handleShow} style={{ borderColor: "#be50f4", color: "white" }}>
                <BsInfoCircle /> &nbsp; Détails & Photos
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* FENÊTRE DÉTAILS (MODAL) */}
      <Modal show={show} onHide={handleClose} size="lg" centered contentClassName="project-modal">
        <Modal.Header closeButton style={{ backgroundColor: "#1b1a2ea9", color: "white", borderBottom: "1px solid #be50f4" }}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1b1a2ea9", color: "white", padding: "20px" }}>
          <h4 className="purple">Architecture et Déploiement</h4>
          <p style={{ textAlign: "justify", marginBottom: "25px" }}>{props.detailedExplication}</p>
          
          <Row style={{ display: "flex", alignItems: "flex-start" }}>
            <Col md={6} className="text-center" style={{ marginBottom: "20px" }}>
              <div style={{ width: "100%", height: "250px", overflow: "hidden", borderRadius: "10px", border: "1px solid #be50f4", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
                <img src={props.imgUnicast} alt="Unicast" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p style={{ marginTop: "12px", fontSize: "0.95em" }}>
                <strong>Mode Unicast :</strong><br />Déploiement individuel par poste.
              </p>
            </Col>

            <Col md={6} className="text-center" style={{ marginBottom: "20px" }}>
              <div style={{ width: "100%", height: "250px", overflow: "hidden", borderRadius: "10px", border: "1px solid #be50f4", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
                <img src={props.imgMulticast} alt="Multicast" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p style={{ marginTop: "12px", fontSize: "0.95em" }}>
                <strong>Mode Multicast :</strong><br />Déploiement simultané du parc informatique.
              </p>
            </Col>
          </Row>

          {props.docLink && (
            <div className="text-center" style={{ marginTop: "10px", paddingTop: "15px", borderTop: "1px solid #be50f4" }}>
              <Button variant="primary" href={props.docLink} target="_blank">
                <BsFileEarmarkPdf /> &nbsp; Voir la Documentation (PDF)
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;