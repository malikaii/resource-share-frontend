import React, { useState } from "react";
import { Card, Row, Col, Container, Nav, Form } from "react-bootstrap";

function ProfileComp() {

  const [] = useState(false);

  function setTabContent(params) {
    
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem", fontSize: "15 px", padding: "5px" }}>
              <img
                style={{ borderRadius: "50%", width: "65%", margin: "0 auto" }}
                src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Visit_of_Tim_Cook_to_the_European_Commission_-_P061904-946789.jpg"
                alt=""
              />

              <Card.Body>
                <div className="text-center">
                  <h4>Tim Cook</h4>
                  <p>CEO of Apple</p>
                </div>

                <Card.Text>Opportunities applied</Card.Text>
                <Card.Text>Opportunities won</Card.Text>
                <Card.Text>Current Opportunities</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8" lg="8">
            <Card style={{ fontSize: "15 px", padding: "5px" }}>
              <Nav
                variant="tabs"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link href="" eventKey="Details">
                    Details
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Settings">Settings</Nav.Link>
                </Nav.Item>
              </Nav>
              <Form>
                <Form.Group>
                  <Form.Label for="title">First Name</Form.Label>
                  <Form.Control
                    className="border border-dark"
                    type="text"
                    name="title"
                  />
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileComp;
