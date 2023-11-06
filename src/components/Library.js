import React from "react"; // Make sure to import React
import { Col } from "react-bootstrap";

export const Library = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={4} sm={4} md={4}>
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
