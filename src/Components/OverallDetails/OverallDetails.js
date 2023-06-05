import React from "react";
import { Col, Row } from "react-bootstrap";
import "./OverallDetails.css";

const OverallDetails = () => {
  return (
    <div style={{margin:"20px 0px"}}>
      <Row className="overdetails-section">
        <Col>
          <div>
             <h1 className="h1-style">20+</h1>
            <h4>Cars For Rent </h4>
          </div>
        </Col>
        <Col>
          <div>
             <h1 className="h1-style">40+</h1>
            <h4>Happy clients</h4>
          </div>
        </Col>
        <Col>
          <div>
             <h1 className="h1-style">40+</h1>
            <h4>Positive Reviws</h4>
          </div>
        </Col>
        <Col>
          <div>
             <h1 className="h1-style">40+</h1>
            <h4>Drivers</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OverallDetails;
