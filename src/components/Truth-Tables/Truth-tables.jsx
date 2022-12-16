import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Truth-tables.css";
import Sidebar from "../sidebar/sidebar";

function TruthTables() {
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
