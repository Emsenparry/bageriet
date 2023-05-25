import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carosel.scss";

const MyCarousel = () => {
  return (
    <>
      <div className="parent">
        <Carousel className="div1">
          <div>
            <img src={require("../../Images/slide1.jpg")} alt="image1" />
          </div>
          <div>
            <img src={require("../../Images/slide2.jpg")} alt="Image2" />
          </div>
          <div>
            <img src={require("../../Images/slide3.jpg")} alt="Image3" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;
