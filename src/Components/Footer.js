import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container fluid className=''>
      <Row className="bg-success text-white p-4">
        <Col lg="5" className=''>
          <Nav className="flex-column fs-6">
            <h6> Links </h6>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>
        </Col>
        <Col lg="5">
          <h6>Contact Us!</h6>
          <p>whymalick@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;