import React, { useState } from "react";
import "./PostListing.css";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
import { BarLoader, PuffLoader } from "react-spinners";
import { Button, Form } from "react-bootstrap";

function PostListing() {
  const [listing, setListing] = useState({
    title: "",
    category: "",
    description: "",
    listing_price: "",
    img: "",
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;

    setListing((prevValue) => {
      if (files && files[0]) {
        return {
          ...prevValue,
          [name]: URL.createObjectURL(files[0]),
        };
      }
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  async function postListing(e) {
    e.preventDefault();

    const itemListing = {
      ...listing,
      user: "Tim",
    };

    // const formData = new FormData();
    // formData.append("");

    console.log(itemListing);
    

    // try {
    //   setIsLoading(true);
    //   const url = "http://localhost:8080/listing/new/";
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(itemListing),
    //   });

    //   console.log("Form values: ", itemListing);
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setListing({
    //     title: "",
    //     category: "",
    //     description: "",
    //     listing_price: "",
    //     img: "",
    //   });

    //   setIsLoading(false);
    // }
  }

  if (isLoading) return <BarLoader />;

  if (error) return <ErrorComponent errorText={error} />;

  return (
    <>
      <Form onSubmit={postListing} className="list">
        <header>
          <h1>Post a new listing</h1>
        </header>
        <Form.Group>
          <Form.Label for="title">Title of listing*</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            name="title"
            value={listing.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="description">Description*</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            name="description"
            value={listing.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="img">Import image*:</Form.Label>
          <Form.Control
            className="border border-dark"
            onChange={handleChange}
            type="file"
            id="img"
            name="img"
            accept="image/*"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label for="price">Selling Price $*:</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            id="price"
            name="listing_price"
            value={listing.listing_price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label for="category">Add a tag to your item*</Form.Label>
          <Form.Select
            className="border border-dark"
            name="category"
            value={listing.category}
            onChange={handleChange}
          >
            <option value={""}></option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="furniture">Furniture</option>
            <option value="items">Textbook</option>
            <option value="clothing">Clothing</option>
          </Form.Select>
        </Form.Group>
        <div>
          <Button type="submit" variant="success">
            Create Listing
          </Button>
        </div>
      </Form>
      {/* <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Form.Label >Email address</Form.Form.Label>
          <Form.Control
            value={listing.title}
            onChange={handleChange}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Form.Label >Example textarea</Form.Form.Label >
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form> */}
    </>
  );
}

export default PostListing;
