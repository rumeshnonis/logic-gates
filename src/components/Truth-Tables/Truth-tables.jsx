import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Truth-tables.css";

function TruthTables() {
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <div>
              <div className="p-3 text-bg-dark" style={{ height: "100vh" }}>
                <span className="text-right fs-4">Dashboard</span>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <a href="" className="nav-link active" aria-current="page">
                      <b>Logic Gates</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="" className="nav-link bg-light text-dark">
                      <b>Truth Tables</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="nav-link bg-success text-white">
                      <b>AND</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="nav-link bg-warning text-dark">
                      <b>OR</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="nav-link bg-danger text-white">
                      <b>NOT</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="nav-link bg-black text-white">
                      <b>NAND</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="nav-link bg-info text-white">
                      <b>NOR</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a
                      href="#"
                      className="nav-link text-white"
                      style={{ backgroundColor: "brown" }}
                    >
                      <b>EXOR</b>
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="#" className="nav-link bg-secondary text-white">
                      <b>EXNOR</b>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={10} style={{ paddingTop: "20vh" }}>
            <Card style={{ minHeight: "50vh" }}>
              <CardHeader className="bg-light">
                <h2 className="text-dark">Truth Tables</h2>
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
                  Truth tables help understand the behaviour of logic gates.
                </b>
                <br /><br />
                <ul>
                  <li>
                    They show how the input(s) of a logic gate relate to its
                    output(s).
                  </li>
                  <li>
                    Truth tables are used to help show the function of a logic
                    gate with all the different possible input combinations.
                    This is normally done by making the inputs count up in
                    binary.
                  </li>
                  <li>
                    If you are unsure about truth tables and need guidence on
                    how go about drawning them for individual gates or logic
                    circuits.
                  </li>
                </ul>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TruthTables;
