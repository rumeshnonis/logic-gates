import React from "react";
import gate1 from "../../images/gate-1.png";
import gate2 from "../../images/gate-2.png";
import gate3 from "../../images/gate-3.png";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";

function home() {
  return (
    <div>
      <div className="main">
        <Col md={8}>
          <Card className="">
            <CardHeader className="bg-dark">
            <h1 className="text-white">ITS for Logic gate</h1>
                
            </CardHeader>
            <br/>
            <Container>
              <Row>
                <Col>
                  <img src={gate1} className="home-image" alt="logo" />
                </Col>
                <Col>
                  <img src={gate2} className="home-image" alt="logo" />
                </Col>
                <Col>
                  <img src={gate3} className="home-image" alt="logo" />
                </Col>
              </Row>
            </Container>
            <br/>
            <Button variant="info" className="btn">
              <Link to={"/logic-gates"} className="nav-link">
                <h1>Start</h1>
                </Link>
            </Button>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default home;
