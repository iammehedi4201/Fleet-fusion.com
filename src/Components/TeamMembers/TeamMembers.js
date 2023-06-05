/* eslint-disable no-global-assign */
import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./TeamMembers.css";

const TeamMembers = () => {
  return (
    <div >

<div className="text-center mt-5">
        <h2 style={{color:"tomato"}}>EXPERTS</h2>
        <h1>OUR TEAMS</h1>
        <hr style={{ width: "50%", margin: "0px auto" }} />
      </div>

      <Row className="tm-section">
        <Col sm={12} md={4}>
          <Card className="tm-card-sizing">
            <Card.Img className="tm-img-sizing" variant="top" src={require("./img/Tanim.jpg")} />
            <Card.Body>
              <Card.Text>
                 <h4 className="text-center" style={{color:'tomato'}}>Mahamudur Rahman Tanim</h4>
                 <p className="text-center">Backend Developer</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="tm-card-sizing">
            <Card.Img  className="tm-img-sizing" variant="top" src={require("./img/Ohi.jpg")} />
            <Card.Body>
              <Card.Text>
              <h4 className="text-center" style={{color:'tomato'}}>Ifte Samul Ohy</h4>
              <p className="text-center">Web Developer</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card className="tm-card-sizing">
            <Card.Img  className="tm-img-sizing" variant="top" src={require('./img/Saiful.jpg')} />
            <Card.Body>
              <Card.Text>
              <h4 className="text-center" style={{color:'tomato'}}>Saiful Islam</h4>
              <p className="text-center">App Developer</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TeamMembers;
