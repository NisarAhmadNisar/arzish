import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto text-center text-uppercase text-title px-5">
            {/* <h1 className="display-3 text-title mt-3">404</h1>
            <h1 className="text-title">error</h1>
            <h2 className="text-title">page not found</h2>
            <h4 className="text-title">
              the requested URL{" "}
              <span className=" text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found{" "}
            </h4> */}
            <img
              style={{ backgroundColor: "#fff", height: "20%", width: "60%" }}
              src="img/pagenotfound.png"
              alt=""
            />
            <h3 className="text-title">
              Return back to <Link to="/">Home</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
