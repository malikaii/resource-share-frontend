import React, { useEffect, useState } from "react";
import { ListingContainer, ListingItem } from "../Styles/Card.style";
import "./Feed.css";
import Listing from "../Components/Listing";
import { PuffLoader } from "react-spinners";
import ErrorComponent from "../Components/ErrorComponent/ErrorComponent";

function Feed() {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getPosts() {
    setIsLoading(true);
    try {
      const urlEndpoint = "//localhost:8080/listings/all";
      const response = await fetch(urlEndpoint);
      const result = await response.json();
      console.log(result);
      setListings(result);
    } catch (error) {
      console.log(error);
      if (error.message === "Failed to fetch") {
        setError("Resource Share is having trouble connecting to the server");
      } else {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading)
    return (
      <div>
        <PuffLoader />
        
      </div>
    );

  if (error) return <ErrorComponent errorText={error} />;

  return (
    <>
      <h2>Local Posts</h2>
      <div className="card-container">
        {listings &&
          listings.map((listing, key) => (
            //  <Listing imgSrc={listing.img} title={listing.title} price={listing.price}/>
            <div className="card">
              <img src={listing.img} alt="blank" />
              <div className="card-content">
                <p>{listing.description}</p>
                {/* <p>${listing.price}</p> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Feed;
