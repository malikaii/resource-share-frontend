import React, { useState } from "react";
import "./PostListing.css";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";
import { BarLoader, PuffLoader } from "react-spinners";
import { Button } from "../Styles/Button.style";

function PostListing() {

  const [listing, setListing ] = useState({
    title: "",
    category: "",
    description: "",
    listing_price: "",
    img: ""
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);


  function handleChange(e) {
    const { name, value } = e.target;

    setListing((prevValue) => {
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
      user: "Tim"
    }

    try {
      setIsLoading(true)
      const url = "http://localhost:8080/listing/new/"
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(itemListing)
      })

      console.log("Form values: ", itemListing);
      


    } catch (error) {
      setError(error.message)
    } finally {
      setListing({
        title: "",
        category: "",
        description: "",
        listing_price: "",
        img: "",
      });

      setIsLoading(false)
    }

  }

  if(isLoading) return <BarLoader/>

  if(error) return <ErrorComponent errorText={error}/>


  return (
    <>
      <form onSubmit={postListing} className="list">
        <header>
          <h1>Post a new listing</h1>
        </header>
        <div>
          <label for="title">Title of listing*</label>
          <input
            type="text"
            name="title"
            value={listing.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="description">Description*</label>
          <input
            type="text"
            name="description"
            value={listing.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="img">Import image*:</label>
          <input type="file" id="img" name="img" accept="image/*" />
        </div>
        <div>
          <label for="price">Selling Price $*:</label>
          <input
            type="text"
            id="price"
            name="listing_price"
            value={listing.listing_price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="category">Add a tag to your item*</label>
          <select
            name="category"
            value={listing.category}
            onChange={handleChange}
          >
            <option value={""}></option>
            <option value="music">Music</option>
            <option value="furniture">Furniture</option>
            <option value="items">Textbook/Materials</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>
        <div>
          <Button>Create Listing</Button>
        </div>
      </form>
    </>
  );
}

export default PostListing;
