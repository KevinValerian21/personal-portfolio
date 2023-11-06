import React from "react"; // Make sure to import React
import { Col } from "react-bootstrap";

export const Library = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={6} sm={6} md={6}>
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
