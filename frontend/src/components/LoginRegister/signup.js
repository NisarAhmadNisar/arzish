import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthenticationConsumer } from "./autheticationapi";
import ProfilePage from "./ProfilePage";
import { ProductConsumer } from "../../contextapi";
export default class SignUp extends Component {
  userProfileRedirect = () => {
    return this.props.history.push("/userprofile");
  };
  userShippingRedirect = () => {
    return this.props.history.push("/shippingaddress");
  };
  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          const { email, password, username } = authValue;
          const { handleSignUpChange, handleSignUpSubmit } = authValue;
          return (
            <ProductConsumer>
              {productValue => {
                if (authValue.isSignedUp && productValue.cart.length < 1) {
                  return <div>{this.userProfileRedirect()}</div>;
                } else if (!authValue.isSignedUp) {
                  return (
                    <React.Fragment>
                      <section className="section-book">
                        <div className="roww">
                          <div className="book">
                            <div className="book_form">
                              <form
                                action="#"
                                className="form"
                                onSubmit={handleSignUpSubmit}
                              >
                                <div className="u-margin-bottom-medium">
                                  <h2 className="heading-secondary">
                                    {/* <img
                                      height="40"
                                      width="50"
                                      src="icons/user-plus-solid.svg"
                                      alt=""
                                    /> */}
                                    Sign Up
                                  </h2>
                                </div>

                                {/* <div className="form_group">
                                  <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form_input"
                                    placeholder="User Name"
                                    onChange={handleSignUpChange}
                                    value={username}
                                    required
                                  />
                                  <label
                                    for="username"
                                    className="form_label paragraph"
                                  >
                                    User Name
                                  </label>
                                </div> */}

                                <div className="form_group">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form_input"
                                    placeholder="Email address"
                                    onChange={handleSignUpChange}
                                    value={email}
                                    required
                                  />
                                  <label
                                    for="email"
                                    className="form_label paragraph"
                                  >
                                    Email address
                                  </label>
                                </div>

                                <div className="form_group">
                                  <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form_input"
                                    placeholder="password"
                                    onChange={handleSignUpChange}
                                    value={password}
                                    required
                                  />
                                  <label
                                    for="password"
                                    className="form_label paragraph"
                                  >
                                    Password
                                  </label>
                                </div>

                                <div className="form_group">
                                  <input
                                    type="submit"
                                    value="submit"
                                    className="btn btn-green"
                                  />
                                </div>
                                <div className="form_group">
                                  <Link to="/login" className="link-nav">
                                    <h2 className="text-capitalize">
                                      Want to Login instead?
                                    </h2>
                                  </Link>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </section>
                    </React.Fragment>

                    // <div className=" container">
                    //   <div className="row">
                    //     <div className="col-10 mx-auto">
                    //       <h1 className="text-center text-primary text-capitalize">
                    //         SignUp
                    //       </h1>
                    //       <form onSubmit={handleSignUpSubmit}>
                    //         <div className="form-group">
                    //           <label htmlFor="name">UserName:</label>
                    //           <input
                    //             className="form-control"
                    //             type="name"
                    //             name="name"
                    //             id="name"
                    //             value={name}
                    //             onChange={handleSignUpChange}
                    //           />
                    //         </div>
                    //         <div className="form-group">
                    //           <label htmlFor="email">Email:</label>
                    //           <input
                    //             className="form-control"
                    //             type="email"
                    //             name="email"
                    //             id="email"
                    //             value={email}
                    //             onChange={handleSignUpChange}
                    //             required
                    //           />
                    //         </div>
                    //         <div className="form-group">
                    //           <label htmlFor="password">Password:</label>
                    //           <input
                    //             className="form-control"
                    //             type="password"
                    //             id="password"
                    //             name="password"
                    //             value={password}
                    //             onChange={handleSignUpChange}
                    //             required
                    //           />
                    //         </div>
                    //         {/* <Link to="#"> */}
                    //         <input
                    //           type="submit"
                    //           value="submit"
                    //           className="btn btn-primary mt-2"
                    //         />
                    //         {/* </Link> */}
                    //       </form>

                    //       <Link to="/login">
                    //         <h4
                    //           style={{ cursor: "pointer" }}
                    //           className="text-primary mt-4"
                    //         >
                    //           Want to Login instead?
                    //         </h4>
                    //       </Link>
                    //     </div>
                    //   </div>
                    // </div>
                  );
                } else if (authValue.isLogged && productValue.cart.length > 0) {
                  return <div>{this.userShippingRedirect()}</div>;
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}
