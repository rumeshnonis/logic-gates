import React from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Image,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import "./AND.css";
import Sidebar from "../sidebar/sidebar";
import andImage from "../../images/gates/and.jpg";

function And() {
  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <div>
              <Sidebar/>
            </div>
          </Col>
          <Col md={10} style={{ paddingTop: "10vh" }}>
            <Card style={{ minHeight: "50vh" }}>
              <CardHeader className="bg-success">
                <h2 className="text-white">AND</h2>
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
                  The AND gate is an electronic circuit that gives a high output
                  (1) only if all its inputs are high. A dot (.) is used to show
                  the AND operation i.e. A.B. Bear in mind that this dot is
                  sometimes omitted i.e. AB
                </b>
                <br />
                <br />
                <Container>
                  <Row>
                    <Col md={3}>
                      <Image src={andImage} style={{ width: "180px" }} />
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            <b>Inputs</b>
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            id="inputA"
                          >
                            <option value="1">True / "1"</option>
                            <option value="0">False / "0"</option>
                          </Form.Select>
                          <Form.Select
                            aria-label="Default select example"
                            id="inputB"
                          >
                            <option value="1">True / "1"</option>
                            <option value="0">False / "0"</option>
                          </Form.Select>

                          <br />
                        </Form.Group>
                        <Button variant="success" onClick={gateOutPut()}>
                          Submit
                        </Button>
                      </Form>
                    </Col>
                    <Col md={3}>
                      <Form>
                        <Form.Group
                          className="mb-3 pt-5"
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="pt-3">
                            {" "}
                            <b>Output</b>{" "}
                          </Form.Label>
                          <Form.Control type="Boolean" placeholder="Enter A" />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col md={5} className="pt-4">
                      <Table striped bordered hover size="md">
                        <thead>
                          <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>AB</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function gateOutPut(){
  let inputA = document.getElementById(inputA).value;
  let inputB = document.getElementById(inputB).value;
}

export default And;
