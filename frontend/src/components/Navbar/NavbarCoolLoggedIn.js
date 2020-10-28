import React, { Component } from "react";
import { Link } from "react-router-dom";

import Query from "../Query";
import CATEGORIES_QUERY from "../../queries/category/categories";
import { AuthenticationConsumer } from "../LoginRegister/autheticationapi";
import { ProductConsumer } from "../../contextapi";

export default class NavbarCoolLoggedIn extends Component {
  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          return (
            <ProductConsumer>
              {productValue => {
                return (
                  <Query query={CATEGORIES_QUERY}>
                    {({ data: { categories } }) => {
                      return (
                        <div>
                          <nav
                            className="navbar navbar-expand-lg navbar-light"
                            style={{ "background-color": "#f6f6f6" }}
                          >
                            <Link to="/" className="link-nav">
                              <h1 className="navbar-brands"> Arzish </h1>
                            </Link>
                            <button
                              className="navbar-toggler"
                              type="button"
                              data-toggle="collapse"
                              data-target="#navbarNav"
                              aria-controls="navbarNav"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                            >
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                              className="collapse navbar-collapse "
                              style={{ display: "relative" }}
                              id="navbarNav"
                            >
                              <ul className="navbar-nav nav-element-center">
                                <li className="nav-links ">
                                  <Link to="/" className="Links">
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                  </Link>
                                </li>
                                <li className="nav-links ">
                                  <Link to="/shop" className="Links">
                                    Shop
                                  </Link>
                                </li>
                                <li className="nav-links ">
                                  <Link to="/blog" className="Links">
                                    Blog
                                  </Link>
                                </li>
                                <li className="nav-links ">
                                  <Link to="/contact" className="Links">
                                    Contact Us
                                  </Link>
                                </li>
                              </ul>
                              <div class="social text-gray ml-auto">
                                <Link
                                  to="/cart"
                                  className="nav-links btn btn-green-small"
                                >
                                  <span className="Links-cart">
                                    <i
                                      class="fa fa-shopping-cart"
                                      aria-hidden="true"
                                    ></i>
                                    My Cart
                                  </span>
                                </Link>
                                <Link
                                  className="nav-links"
                                  onClick={() => {
                                    productValue.clearCart();
                                    authValue.logout();
                                    authValue.notifyLogout();
                                  }}
                                >
                                  <i
                                    className="fa fa-sign-out Links"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="Links">LogOut</span>
                                </Link>
                                <Link to="/userprofile" className="nav-links">
                                  <span className=" Links mr-2">
                                    <i className="fas fa-user-circle"></i>
                                  </span>
                                  <span className="Links">Account</span>
                                </Link>

                                <Link to="#" className="Links">
                                  <i class="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="#" className="Links">
                                  <i class="fab fa-instagram"></i>
                                </Link>
                                <Link to="#" className="Links">
                                  <i class="fab fa-twitter"></i>
                                </Link>
                                <Link to="#" className="Links">
                                  <i class="fab fa-youtube"></i>
                                </Link>
                              </div>
                            </div>
                          </nav>
                        </div>
                      );
                    }}
                  </Query>
                );
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}
