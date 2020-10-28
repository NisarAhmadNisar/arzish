import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../contextapi";
import PropTypes from "prop-types";
import ButtonContainer from "../ReusableComponents/Buttons/button";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductConsumer>
        {value => {
          return (
            <div
              className="col-9 mx-auto col-md-6 col-lg-4"
              onClick={() => {
                value.handleDetail(this.props.product.id);
              }}
            >
              <div className="containers">
                <div className="card u-margin-bottom-medium">
                  <Link to={`/details/${id}`}>
                    {img.map(product => {
                      return (
                        <div className="imgBx">
                          <img
                            key={product.id}
                            className="img"
                            src={
                              process.env.REACT_APP_BACKEND_URL + product.url
                            }
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </Link>

                  <div className="contentBx">
                    <Link to={`/details/${id}`}>
                      <h2>{title}</h2>
                    </Link>

                    <div className="price">
                      <h3>
                        Price: <span>{price}$</span>
                      </h3>
                    </div>

                    <ButtonContainer
                      cart
                      className="add"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        // value.openModal(id);
                        value.notify();
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
