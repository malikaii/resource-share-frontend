import React from "react";
import { useAuth } from "../Components/Auth";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Slider from "react-slick";
import SwiperComponent from "../Components/Swiper/SwiperComponent";
import { Button } from "react-bootstrap";
import { useOktaAuth } from "@okta/okta-react";
import bgclothing from "../Assets/backgroundclothing.png"
import dormbg from "../Assets/dormbg.jpg"
import HomeCategories from "../Components/HomeCategories/HomeCategories";
function Home() {
  const navigate = useNavigate();
  const { oktaAuth, authState } = useOktaAuth();

  function explore() {
    navigate("/explore");
  }

  return (
    <>
      <div className="Container home-container m-3 my-5">
        <div className="title">
          <h1>Sharing has never been easier</h1>
          <p>The e-commerce app for students in need</p>
          <p>Take a look below for some of our features</p>

          <div className="button-group">
            <Button variant="success" size="lg" onClick={explore}>
            Explore
          </Button>
          <Button variant="outline-success" size="lg" onClick={explore}>
            Learn More
          </Button>
          </div>
          
        </div>
        <img className="bgclothing" src={dormbg} alt="" />
      </div>
      <HomeCategories/>
      {/* <div className="section-two bg-light">
        <div className="section-image">
          <img
            src="https://cdn4.volusion.store/euhfr-xvuyx/v/vspfiles/photos/JF01-BEIGE-2.jpg?v-cache=1723552021"
            alt=""
          />
        </div>
        <div className="section-description">
          <h2>Sell pieces like the one on the left</h2>
          <p>Create easy listings for dorm furniture and other items</p>
        </div>
      </div> */}
      {/* {authState?.isAuthenticated ? (
        <></>
      ) : (
        <div class="section-three">
          <div className="join-desc">
            <h1>Want to get started?</h1>
            <h4>
              To create and save listings, join the resource community by{" "}
              <Link to={"/login"}>signing up</Link>
            </h4>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Home;
