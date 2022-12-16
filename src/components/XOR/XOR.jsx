import React from "react";
import { useState } from "react";
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
import "./XOR.css";
import Sidebar from "../sidebar/sidebar";
import xorImage from "../../images/gates/xor.png";

function Xor() {
  const [inputA, setInputA] = useState("");

  const [updatedA, setUpdatedA] = useState(inputA);

  const handleChangeA = (event) => {
    setInputA(event.target.value);
  };

  //const handleClickA = () => {
  // 👇 "message" stores input field value
  //setUpdatedA(inputA);
  //};

  const [inputB, setInputB] = useState("");

  const [updatedB, setUpdatedB] = useState(inputB);

  const handleChangeB = (event) => {
    setInputB(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdatedA(inputA);
    setUpdatedB(inputB);
    gateOutPut = inputA + inputB;
  };

  function gateOutPut() {
    let gateOutput;
    if ((inputA == 0 && inputB == 0) || (inputA == 1 && inputB == 1)) {
      gateOutput = "Output AB = False (0)";
    } else {
      gateOutput = "Output AB = True (1)";
    }
    return gateOutput;
  }

  return (
    <div className="body">
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <div>
              <Sidebar />
            </div>
          </Col>
          <Col md={10} style={{ paddingTop: "10vh" }}>
            <Card style={{ minHeight: "50vh" }}>
              <CardHeader className="" style={{ backgroundColor: "brown" }}>
                <h2 className="text-white">XOR</h2>
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
                  The 'Exclusive-OR' gate is a circuit which will give a high
                  output if either, but not both, of its two inputs are high. An
                  encircled plus sign ( ) is used to show the EOR operation.
                </b>
                <br />
                <br />
                <Container>
                  <Row>
                    <Col md={3}>
                      <Image src={xorImage} style={{ height: "120px" }} />
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            <b>Inputs</b>
                          </Form.Label>
                          <br />
                          <Form.Select
                            aria-label="Default select example"
                            id="inputA"
                            name="inputA"
                            onChange={handleChangeA}
                          >
                            <option value="0">Input A = False (0)</option>
                            <option value="1">Input A = True (1)</option>
                          </Form.Select>
                          <br />
                          <Form.Select
                            aria-label="Default select example"
                            id="inputB"
                            name="inputB"
                            onChange={handleChangeB}
                          >
                            <option value="0">Input B = False (0)</option>
                            <option value="1">Input B = True (1)</option>
                          </Form.Select>

                          <br />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col md={3}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId=""
                          style={{ paddingTop: "120px" }}
                        >
                          <Form.Label>
                            <b className="text-danger">Output</b>{" "}
                          </Form.Label>
                          <Form.Control
                            className="bg-white"
                            type="Boolean"
                            placeholder={gateOutPut()}
                            disabled
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col md={5} className="pt-4">
                      <Table striped bordered hover size="md">
                        <thead>
                          <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>AB XOR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                          </tr>
                          <tr>
                            <td>0</td>
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

export default Xor;
