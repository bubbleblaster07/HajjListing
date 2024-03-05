import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            alt={`Image ${index}`}
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              margin: "auto",
              //   objectFit: "scale-down",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};
const CustomPrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    <ArrowBack />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    <ArrowForward />
  </button>
);

export default ImageSlider;
