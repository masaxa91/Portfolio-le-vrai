import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Modal, Button } from "react-bootstrap";
import Particle from "../Particle";

// --- SECTION IMPORT DES PHOTOS ---
// Remplace "nom-du-fichier" par le vrai nom de tes images (ex: public.jpg)
import vpnSchema from "../../Assets/vpn-schema.png"; 
import imgPublic from "../../Assets/vpn-grandpublic.png"; 
import imgPro from "../../Assets/vpn-pro.png";
import imgNomade from "../../Assets/vpn-nomade.png";
import imgS2S from "../../Assets/vpn-s2s.png";
// ---------------------------------

import { 
  BsShieldLock, 
  BsDiagram3, 
  BsGlobe, 
  BsBriefcase, 
  BsHddNetwork, 
  BsLink45Deg,
  BsBook,
  BsEye
} from "react-icons/bs";

function Veille() {
  // Gestion de l'état pour chaque modal
  const [modalStates, setModalStates] = useState({
    main: false,
    public: false,
    pro: false,
    nomade: false,
    s2s: false
  });

  const toggleModal = (key, isOpen) => {
    setModalStates(prev => ({ ...prev, [key]: isOpen }));
  };

  return (
    <Container fluid className="project-section">
      <style>
        {`
          .veille-link {
            color: white !important;
            text-decoration: none !important;
            transition: all 0.3s ease !important;
            display: inline-block;
          }
          .veille-link:hover {
            color: #be50f4 !important;
            transform: translateX(10px);
          }
          .zoom-img {
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .zoom-img:hover {
            transform: scale(1.02);
          }
          .modal-content {
            background-color: rgba(26, 25, 36, 0.95) !important;
            border: 1px solid #be50f4 !important;
          }
          .card-text, .project-card-view p {
            text-align: justify;
            text-justify: inter-word;
          }
          .view-btn {
            background-color: transparent !important;
            border: 1px solid #be50f4 !important;
            color: white !important;
            margin-top: 15px;
            transition: 0.3s !important;
          }
          .view-btn:hover {
            background-color: #be50f4 !important;
            transform: translateY(-3px);
          }
        `}
      </style>

      <Particle />
      <Container>

        <h1 className="project-heading text-center mb-4">
          Veille <strong className="purple">Technologique </strong>
        </h1>

        <p style={{ color: "white", marginBottom: "20px", textAlign: "center" }}>
          Étude approfondie sur les solutions de réseaux privés virtuels et la sécurisation des flux.
        </p>

        <p style={{ color: "#ccc", marginBottom: "50px", textAlign: "center", fontStyle: "italic" }}>
          Problématique : Les VPN traditionnels sont-ils toujours adaptés aux besoins de sécurité modernes face à l’émergence du Zero Trust ?
        </p>

        <h2 className="project-heading text-center mb-5">
          Sujet : <strong className="purple">Le VPN (Virtual Private Network)</strong>
        </h2>
        
        {/* SECTION 1 : DEFINITION */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <Card className="project-card-view">
              <Card.Body>
                <h3 className="purple mb-4 text-center">
                  <BsBook /> Définition
                </h3>
                <p>
                  Un <strong>VPN (Virtual Private Network)</strong> est un tunnel sécurisé établi à travers un réseau public (Internet). Il permet de chiffrer les données et de masquer l'adresse IP de l'utilisateur, garantissant ainsi la <strong>confidentialité</strong> et l'<strong>intégrité</strong> des échanges entre deux points.
                </p>
                
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <img 
                    src={vpnSchema} 
                    alt="Schéma VPN" 
                    className="zoom-img"
                    onClick={() => toggleModal('main', true)} 
                    style={{ width: "100%", maxWidth: "550px", borderRadius: "10px" }} 
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* TYPES */}
        <Row className="mb-4 g-4">
          <Col md={6}>
            <Card className="project-card-view h-100 text-center">
              <Card.Body className="d-flex flex-column">
                <BsGlobe size={40} className="purple mb-3" />
                <Card.Title className="mb-3">VPN Grand Public</Card.Title>
                <Card.Text>
                  Principalement utilisé pour l'anonymisation et le contournement de restrictions géographiques. Il permet aux utilisateurs de sécuriser leur navigation sur des réseaux non protégés.
                </Card.Text>
                <Button className="view-btn mt-auto" onClick={() => toggleModal('public', true)}>
                  <BsEye style={{ marginRight: "8px" }} /> Voir illustration
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card-view h-100 text-center">
              <Card.Body className="d-flex flex-column">
                <BsBriefcase size={40} className="purple mb-3" />
                <Card.Title className="mb-3">VPN Professionnel</Card.Title>
                <Card.Text>
                  Outil d'infrastructure permettant d'étendre le réseau local de l'entreprise. Il assure un accès sécurisé aux ressources internes pour les collaborateurs distants.
                </Card.Text>
                <Button className="view-btn mt-auto" onClick={() => toggleModal('pro', true)}>
                  <BsEye style={{ marginRight: "8px" }} /> Voir illustration
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* TOPOLOGIES */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <Card className="project-card-view h-100 text-center">
              <Card.Body className="d-flex flex-column">
                <BsDiagram3 size={40} className="purple mb-3" />
                <Card.Title className="mb-3">Accès Nomade</Card.Title>
                <Card.Text>
                  Connexion sécurisée établie entre un utilisateur distant et le réseau de l'entreprise via un client VPN logiciel.
                </Card.Text>
                <Button className="view-btn mt-auto" onClick={() => toggleModal('nomade', true)}>
                  <BsEye style={{ marginRight: "8px" }} /> Voir schéma
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card-view h-100 text-center">
              <Card.Body className="d-flex flex-column">
                <BsHddNetwork size={40} className="purple mb-3" />
                <Card.Title className="mb-3">Site-à-Site</Card.Title>
                <Card.Text>
                  Interconnexion permanente entre deux réseaux distincts (siège et filiale) via des passerelles VPN dédiées.
                </Card.Text>
                <Button className="view-btn mt-auto" onClick={() => toggleModal('s2s', true)}>
                  <BsEye style={{ marginRight: "8px" }} /> Voir schéma
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ANALYSE TECHNIQUE */}
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <Card className="project-card-view">
              <Card.Body>
                <h3 className="purple mb-4 text-center">
                  <BsShieldLock /> Protocoles et Analyse
                </h3>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li className="mb-2"><strong>• IPsec :</strong> Protocole historique de couche 3, extrêmement sécurisé mais complexe à configurer.</li>
                  <li className="mb-2"><strong>• OpenVPN :</strong> Solution SSL/TLS flexible, très répandue mais parfois gourmande en ressources.</li>
                  <li className="mb-4"><strong>• WireGuard :</strong> Protocole moderne, rapide et léger, optimisé pour la performance.</li>
                </ul>

                <h5 className="purple mt-4 mb-3 text-center">Limites des VPN traditionnels</h5>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li className="mb-2"><strong>• Performance :</strong> Le chiffrement peut ralentir la bande passante.</li>
                  <li className="mb-2"><strong>• Sécurité :</strong> Point d’entrée unique qui peut exposer tout le réseau interne.</li>
                  <li className="mb-2"><strong>• Périmètre :</strong> Manque de granularité sur les accès applicatifs.</li>
                </ul>

                <p className="mt-4 text-center">
                  Le modèle <strong>ZTNA (Zero Trust)</strong> complète ces limites par une vérification d'identité systématique.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CAS + CONCLUSION */}
        <Row className="mb-5 g-4">
          <Col md={6}>
            <Card className="project-card-view h-100">
              <Card.Body>
                <h4 className="purple mb-3">Cas concret</h4>
                <p>
                  Une entreprise déployant le télétravail massif utilise des passerelles VPN. Cependant, une machine infectée se connectant peut propager des malwares sur le réseau interne.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card-view h-100">
              <Card.Body>
                <h4 className="purple mb-3">Conclusion</h4>
                <p>
                  Les VPN restent essentiels mais doivent évoluer vers des modèles "Zero Trust" où l'analyse de l'utilisateur et du poste est indispensable.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FLUX ACTUALITES */}
        <h2 className="project-heading text-center mb-4">
          Flux <strong className="purple">Actualités </strong>
        </h2>
        <Row className="justify-content-center mb-5">
          <Col md={10}>
            <Card className="project-card-view">
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "1px solid #be50f4" }}>
                    <BsLink45Deg className="purple" /> 
                    <a href="https://www.cloudflare.com/fr-fr/learning/network-layer/what-is-a-vpn/" target="_blank" rel="noreferrer" className="veille-link">
                      Cloudflare : Comprendre le fonctionnement technique des VPN
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: "transparent", borderBottom: "1px solid #be50f4" }}>
                    <BsLink45Deg className="purple" /> 
                    <a href="https://www.frandroid.com/tags/vpn" target="_blank" rel="noreferrer" className="veille-link">
                      Frandroid : Actualités, tests et évolutions du marché VPN
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                    <BsLink45Deg className="purple" /> 
                    <a href="https://openvpn.net/blog/" target="_blank" rel="noreferrer" className="veille-link">
                      OpenVPN Blog : Mises à jour techniques et sécurité
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* --- TOUTES LES MODALS POUR LES PHOTOS --- */}
        
        {/* Modal Principale */}
        <Modal show={modalStates.main} onHide={() => toggleModal('main', false)} centered size="lg">
          <Modal.Header closeButton closeVariant="white" style={{ border: "none" }} />
          <Modal.Body style={{ padding: "0", textAlign: "center" }}>
            <img src={vpnSchema} alt="Schéma Principal" style={{ width: "100%", borderRadius: "5px" }} onClick={() => toggleModal('main', false)} />
          </Modal.Body>
        </Modal>

        {/* Modal Grand Public */}
        <Modal show={modalStates.public} onHide={() => toggleModal('public', false)} centered size="lg">
          <Modal.Header closeButton closeVariant="white" style={{ border: "none" }} />
          <Modal.Body style={{ padding: "0", textAlign: "center" }}>
            <img src={imgPublic} alt="VPN Grand Public" style={{ width: "100%", borderRadius: "5px" }} onClick={() => toggleModal('public', false)} />
          </Modal.Body>
        </Modal>

        {/* Modal Professionnel */}
        <Modal show={modalStates.pro} onHide={() => toggleModal('pro', false)} centered size="lg">
          <Modal.Header closeButton closeVariant="white" style={{ border: "none" }} />
          <Modal.Body style={{ padding: "0", textAlign: "center" }}>
            <img src={imgPro} alt="VPN Professionnel" style={{ width: "100%", borderRadius: "5px" }} onClick={() => toggleModal('pro', false)} />
          </Modal.Body>
        </Modal>

        {/* Modal Nomade */}
        <Modal show={modalStates.nomade} onHide={() => toggleModal('nomade', false)} centered size="lg">
          <Modal.Header closeButton closeVariant="white" style={{ border: "none" }} />
          <Modal.Body style={{ padding: "0", textAlign: "center" }}>
            <img src={imgNomade} alt="Accès Nomade" style={{ width: "100%", borderRadius: "5px" }} onClick={() => toggleModal('nomade', false)} />
          </Modal.Body>
        </Modal>

        {/* Modal Site-à-Site */}
        <Modal show={modalStates.s2s} onHide={() => toggleModal('s2s', false)} centered size="lg">
          <Modal.Header closeButton closeVariant="white" style={{ border: "none" }} />
          <Modal.Body style={{ padding: "0", textAlign: "center" }}>
            <img src={imgS2S} alt="Site-à-Site" style={{ width: "100%", borderRadius: "5px" }} onClick={() => toggleModal('s2s', false)} />
          </Modal.Body>
        </Modal>

      </Container>
    </Container>
  );
}

export default Veille;