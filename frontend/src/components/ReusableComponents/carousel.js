import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <Carousel.Item>
        <img
          src="https://images.unsplash.com/photo-1518953789413-9598f0909795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
          className="img-carousel"
        />
        <Carousel.Caption>
          <h3 className="header-tertiary">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
          className="img-carousel"
        />

        <Carousel.Caption>
          <h3 className="header-tertiary">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://images.unsplash.com/photo-1580247310131-2927f7f0c97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
          className="img-carousel"
        />

        <Carousel.Caption>
          <h3 className="header-tertiary">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
