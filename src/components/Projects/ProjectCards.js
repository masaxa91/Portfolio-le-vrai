import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsInfoCircle, BsFileEarmarkPdf } from "react-icons/bs";

function ProjectCards(props) {
  // État pour la modale de détails
  const [show, setShow] = useState(false);
  // État pour la modale de zoom (plein écran)
  const [zoomShow, setZoomShow] = useState(false);
  // État pour stocker l'URL de l'image à zoomer
  const [imgToZoom, setImgToZoom] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleZoomClose = () => setZoomShow(false);
  
  // Fonction pour ouvrir le zoom
  const handleZoomShow = (imgUrl) => {
    setImgToZoom(imgUrl); // On retient quelle image a été cliquée
    setZoomShow(true);    // On ouvre la modale de zoom
  };

  // Style pour les images cliquables dans la modale de détails
  const imageClickableStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    cursor: "pointer", // Montre que c'est cliquable
    transition: "transform 0.3s ease"
  };

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

      {/* 1ère MODALE : DÉTAILS ET PHOTOS (L'existante) */}
      <Modal show={show} onHide={handleClose} size="lg" centered contentClassName="project-modal">
        <Modal.Header closeButton style={{ backgroundColor: "#1b1a2ea9", color: "white", borderBottom: "1px solid #be50f4" }}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#1b1a2ea9", color: "white", padding: "20px" }}>
          <h4 className="purple">Présentation du Projet</h4>
          <p style={{ textAlign: "justify", marginBottom: "25px" }}>{props.detailedExplication}</p>
          
          <Row>
            {props.imgUnicast && (
              <Col md={props.imgMulticast ? 6 : 12} className="text-center" style={{ marginBottom: "20px" }}>
                {/* Conteneur avec overflow hidden pour le style */}
                <div style={{ width: "100%", height: "250px", overflow: "hidden", borderRadius: "10px", border: "1px solid #be50f4", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
                  <img 
                    src={props.imgUnicast} 
                    alt="Illustration 1" 
                    style={imageClickableStyle}
                    onClick={() => handleZoomShow(props.imgUnicast)} // CLIC ICI
                    title="Cliquez pour agrandir"
                  />
                </div>
                <p style={{ marginTop: "12px", fontSize: "0.95em" }}>
                  Aperçu de l'infrastructure ou interface de gestion.
                </p>
              </Col>
            )}
            {props.imgMulticast && (
              <Col md={6} className="text-center" style={{ marginBottom: "20px" }}>
                <div style={{ width: "100%", height: "250px", overflow: "hidden", borderRadius: "10px", border: "1px solid #be50f4", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
                  <img 
                    src={props.imgMulticast} 
                    alt="Illustration 2" 
                    style={imageClickableStyle}
                    onClick={() => handleZoomShow(props.imgMulticast)} // CLIC ICI
                    title="Cliquez pour agrandir"
                  />
                </div>
                <p style={{ marginTop: "12px", fontSize: "0.95em" }}>
                  Détail technique ou configuration spécifique.
                </p>
              </Col>
            )}
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

      {/* 2ème MODALE : ZOOM PLEIN ÉCRAN (La nouvelle) */}
      <Modal 
        show={zoomShow} 
        onHide={handleZoomClose} 
        size="xl" // Très grande taille
        centered 
        contentClassName="project-zoom-modal" // Classe CSS perso éventuelle
        style={{ background: "rgba(0,0,0,0.8)" }} // Fond très sombre derrière
      >
        <Modal.Header closeButton style={{ backgroundColor: "#1b1a2ea9", color: "white", border: "none" }} />
        <Modal.Body style={{ backgroundColor: "transparent", padding: "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img 
            src={imgToZoom} 
            alt="Zoom" 
            style={{ width: "auto", maxHeight: "90vh", borderRadius: "10px", border: "2px solid #be50f4" }} // L'image s'adapte à la hauteur de l'écran
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCards;