import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import { categories, listing } from "../localDbItems";
import { useNavigate } from "react-router-dom";


function Explore() {
  const [listCategories, setListCategories] = useState(categories);
  const [listingItems, setListingItems] = useState(listing);
  const [filterList, setFilterList] = useState([ ]);

const navigate = useNavigate();

  const filterCategories = (e) => {
    const { name } = e.target;
    console.log(name);
    setListCategories([name]);
    let newList = listingItems.filter((item) => item.category === name)
    console.log(newList);
    setListingItems(newList)
    
  };
  const resetCategoryFilter = () => {
    setListCategories(categories)
    setListingItems(listing)
  };

  function navigateToItem(id) { 
    navigate(`/item/${id}`, {state: listingItems[id]})
  }


  return (
    <>
      <Container>
        <Row
          className="m-5 p-5"
          style={{
            // backgroundImage: `url(${sofabg})`,
            // backgroundSize: "cover", // Optional: Adjusts how the image is sized
            // backgroundRepeat: "no-repeat", // Optional: Prevents image repetition
            // height: '50vh', // Example: Sets the height of the div
            // borderRadius: '5px'
          }}
        >
          <h3 className="text-center">New Listings</h3>
        </Row>
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3} className="mb-4">
              <Form.Control
                className=""
                placeholder="Search an item.."
              />
              <Button variant="secondary">Submit</Button>
            </Stack>
            <hr />

            <Row className="mb-2">
              <Col>
                <h6>All Categories</h6>
              </Col>
              <Col>
                <Button
                  style={{ width: "fit-content" }}
                  variant="outline-danger"
                  onClick={resetCategoryFilter}
                >
                  Reset
                </Button>
              </Col>
            </Row>
            <Row className="d-flex gap-2 ">
              {listCategories?.map((category, key) => (
                // <Col>
                <Button
                  style={{ width: "fit-content" }}
                  variant="outline-success"
                  name={category}
                  onClick={filterCategories}
                >
                  {category}
                </Button>
                // </Col>
              ))}
            </Row>
          </Col>
          <Col md="8" lg="9">
            <Row className="d-flex gap-5">
              {listingItems?.length === 0 ? (
                <h6>No results found that match your search</h6>
              ) : (
                listingItems.map((item, key) => (
                  <Card
                    style={{
                      width: "18rem",
                      fontSize: "15 px",
                      padding: "5px",
                    }}
                  >
                    <Card.Img variant="top" src={item.imgSrc} />
                    <Card.Body>
                      <Card.Title onClick={() => navigateToItem(item.id)}>
                        {item.title}
                      </Card.Title>
                      <Card.Text>${item.price}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              )}{" "}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Explore;
