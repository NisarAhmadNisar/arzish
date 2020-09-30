import React from "react";
import { Link } from "react-router-dom";
import Paypal from "../Paypal/Paypal";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTotal, cartTax, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/shop">
              <button
                type="button"
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <Link to="/shippingaddress">
              <button className="btn btn-outline-primary text-uppercase text-center px-1 mb-4">
                Continue to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
