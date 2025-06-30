import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { categories, categoriesWithAttributes } from "../../localDbItems";

function HomeCategories() {
  return (
    <Container fluid className="bg-light text-center p-3">
      <Row className="py-4">
        <h4>Find the category that suits your tastes</h4>
      </Row>
      <Row className="gap-3">
        {categoriesWithAttributes.map((category) => (
          <Col className="d-flex justify-content-center" >
            <div>
                <Card className="shadow-none">
                <Card.Img src={category.imgSrc} width={298} height={200}/>
              </Card>
              <h6 className="">{category.title}</h6>
            </div>
              
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeCategories;
