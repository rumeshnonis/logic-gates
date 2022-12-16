import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Notes.css";
import Sidebar from "../sidebar/sidebar";

function Notes() {
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <Sidebar/>
          </Col>
          <Col md={10} style={{ paddingTop: "20vh" }}>
            <Card style={{ minHeight: "50vh" }}>
              <CardHeader className="bg-light">
                <h2 className="text-dark">Special Notes</h2>
              </CardHeader>
              <p
                style={{
                  fontSize: "18px",
                  textAlign: "left",
                  textAlign: "justify",
                  padding: "1rem",
                }}
              >
                <br />
                <b>
                The NAND and NOR gates are called universal functions since with either one the AND and OR functions and NOT can be generated.
<br />
A function in sum of products form can be implemented using NAND gates by replacing all AND and OR gates by NAND gates.
<br />
A function in product of sums form can be implemented using NOR gates by replacing all AND and OR gates by NOR gates.
                </b>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Notes;
