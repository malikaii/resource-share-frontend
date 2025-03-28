import React from "react";
import { useAuth } from "../Components/Auth";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { Button } from "../Styles/Button.style";

import Slider from "react-slick";
import Carousel from "../Components/Carousel";
import SwiperComponent from "../Components/Swiper/SwiperComponent";
function Home() {
  const auth = useAuth();

  const navigate = useNavigate();

  function explore() {
    navigate("/feed");
  }

  return (
    <>
      <div className="home-container">
        <div className="title">
          <h2>Sharing has never been easier</h2>
          <p>The e-commerce app for students in need</p>
          <p>Take a look below for some of our features</p>

          <Button onClick={explore}>Explore</Button>
        </div>
      </div>
      <div className="section-two">
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
      </div>
      <div class="section-three">
        <div className="join-desc">
          <h1>Want to get started?</h1>
          <h4>To create and save listings, join the resource community by <Link to={"/login"}>signing up</Link></h4>
        </div>
      </div>
    </>
  );
}

export default Home;
