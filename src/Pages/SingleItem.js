import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

function SingleItem() {
  const { id } = useParams();
  const { state } = useLocation();
  console.log(state);

  return (
    <Container>
      <Row>
        <Link to="/explore">Explore</Link>
      </Row>
      <Row>
        <Col lg="8">
          <h2>
            {state?.title} ${state?.price}
          </h2>
          <Card style={{ width: "50rem" }}>
            <Card.Img variant="top" src={state?.imgSrc} />
          </Card>
          <hr />
          <h2>Description</h2>
          <p>{state?.description}</p>
          <hr />
          <Button variant="secondary">Bookmark</Button>
        </Col>
        <Col>
            <h2>Seller details:</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleItem;
