import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./Logic-gates.css";

import Sidebar from "../sidebar/sidebar";

function Logicgates() {
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <div>
              <Sidebar/>
            </div>
          </Col>
          <Col md={10} style={{ paddingTop: "20vh" }}>
            <Card style={{ minHeight: "50vh" }}>
              <CardHeader className="bg-primary">
                <h2 className="text-white">Logic Gates</h2>
              </CardHeader>
              <p
                style={{
                  fontSize: "18px",
                  textAlign: "left",
                  textAlign: "justify",
                  padding: "1rem",
                }}
              >
                <b>
                  Boolean functions may be practically implemented by using
                  electronic gates. The following points are important to
                  understand.
                </b>
                <ul>
                  <li>Electronic gates require a power supply.</li>
                  <li>
                    Gate INPUTS are driven by voltages having two nominal
                    values, e.g. 0V and 5V representing logic 0 and logic 1
                    respectively.
                  </li>
                  <li>
                    The OUTPUT of a gate provides two nominal values of voltage
                    only, e.g. 0V and 5V representing logic 0 and logic 1
                    respectively. In general, there is only one output to a
                    logic gate except in some special cases.
                  </li>
                  <li>
                    There is always a time delay between an input being applied
                    and the output responding Digital systems are said to be
                    constructed by using logic gates. These gates are the AND,
                    OR, NOT, NAND, NOR, EXOR and EXNOR gates. The basic
                    operations are described below with the aid of truth table.
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

export default Logicgates;
