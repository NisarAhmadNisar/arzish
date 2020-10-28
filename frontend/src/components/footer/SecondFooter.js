import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../src/index.css";

export default class SecondFooter extends Component {
  componentDidMount = () => {
    AOS.init();
    window.scrollTo(0, 0);
  };

  handleMoveTop = () => {
    const move = findDOMNode(this.refs.moveUp);
    $(move).click(function() {
      console.log("YOU clicked");
      $("html, body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <div
              className="about-us"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="footer_navigation">
                <ul className="footer_list">
                  <li className="footer_item">
                    <Link to="/about" className="footer_link">
                      About us
                    </Link>
                  </li>
                  <li className="footer_item">
                    <Link to="/home" className="footer_link">
                      Home
                    </Link>
                  </li>
                  <li className="footer_item">
                    <Link to="/blog" className="footer_link">
                      Blog
                    </Link>
                  </li>
                  <li className="footer_item">
                    <Link to="/shop" className="footer_link">
                      Shop
                    </Link>
                  </li>
                  <li className="footer_item">
                    <Link to="/contact" className="footer_link">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="newsletter"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h2>Newsletter</h2>
              <p>Stay update with our latest</p>
              <div className="form-element">
                <input type="text" placeholder="Email" />
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            </div>
            <div className="follow" data-aos="fade-left" data-aos-delay="200">
              <h2>Follow us</h2>
              <p>Let us be Social</p>
              <div>
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>

                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>

                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>

                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="rights flex-row">
            <h4 className="text-gray">Copyright ©2020 All rights reserved</h4>
          </div>
          <Link to="#">
            <div data-aos="fade-left" data-aos-delay="300" className="move-up">
              <i
                className="fas fa-arrow-circle-up fa-2x"
                ref="moveUp"
                onClick={this.handleMoveTop}
              ></i>
            </div>
          </Link>
        </footer>
      </React.Fragment>
    );
  }
}
