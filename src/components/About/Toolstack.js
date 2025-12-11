import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import proxmox from "../../Assets/TechIcons/proxmox.svg";
import wordpress from "../../Assets/TechIcons/wordpress.svg";

function Toolstack() {

  const tools = [
    { icon: chrome, name: "Google Chrome", level: 5 },
    { icon: vsCode, name: "Vs Code", level: 5 },
    { icon: proxmox, name: "Proxmox", level: 3 },
    { icon: wordpress, name: "Wordpress", level: 2 },
  ];

  const renderStars = (level) => {
    return "★★★★★".slice(0, level) + "☆☆☆☆☆".slice(0, 5 - level);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          <img src={tool.icon} alt={tool.name} className="tech-icon-images" />

          <div className="tech-icons-text">{tool.name}</div>

          {/* Étoiles */}
          <div style={{ color: "#d06cff", fontSize: "14px", marginTop: "5px" }}>
            {renderStars(tool.level)}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
