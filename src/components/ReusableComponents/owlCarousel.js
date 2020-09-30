import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OwlCarousels() {
  useEffect(() => {
    AOS.init();
  });
  const responsive = {
    0: {
      items: 1
    },
    320: {
      items: 1
    },
    560: {
      items: 1
    },
    760: {
      items: 2
    },
    960: {
      items: 3
    }
  };
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      nav
      autoplay={true}
      autoplayTimeout={4000}
      autoplayHoverPause={true}
      responsive={responsive}
      dots={false}
    >
      <div
        className=" item carousel-container"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <img
          src="https://images.unsplash.com/photo-1580247310131-2927f7f0c97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="post-1"
          className="img-owl-carousel"
        />
        <div className="item-header">
          <h3 className="header-tertiary-1">
            London Fashion week's continued the evolution
          </h3>
          <button className="btn btn-green">Add To Cart</button>
        </div>
      </div>

      <div
        className=" item carousel-container"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <img
          src="https://images.unsplash.com/photo-1580247310131-2927f7f0c97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="post-1"
          className="img-owl-carousel"
        />
        <div className="item-header">
          <h3 className="header-tertiary-1">
            London Add To Cart week's continued the evolution
          </h3>
          <button className="btn btn-green ">Add To Cart</button>
        </div>
      </div>
      <div
        className=" item carousel-container"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          src="https://images.unsplash.com/photo-1580247310131-2927f7f0c97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="post-1"
          className="img-owl-carousel"
        />
        <div className="item-header">
          <h3 className="header-tertiary-1">
            London Add To Cart week's continued the evolution
          </h3>
          <button className="btn btn-green ">Add To Cart</button>
        </div>
      </div>
      <div
        className=" item carousel-container"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <img
          src="https://images.unsplash.com/photo-1580247310131-2927f7f0c97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="post-1"
          className="img-owl-carousel"
        />
        <div className="item-header">
          <h3 className="header-tertiary-1">
            London Add To Cart week's continued the evolution
          </h3>
          <button className="btn btn-green">Add To Cart</button>
        </div>
      </div>
    </OwlCarousel>
  );
}
