import React from "react";
import { ProductConsumer } from "../../contextapi";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <h3 className="text-title">
            Looks like you have no items in your shopping cart
          </h3>
          <img
            src="https://cdn.dribbble.com/users/204955/screenshots/4930541/emptycart.png"
            alt="Empty Cart Icon"
          />
          <h2 className="text-title">
            Click<Link to="shop"> here</Link> to continue shopping{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
