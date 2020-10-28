import React, { Component } from "react";
// import "../../../src/customStyle/css/style.css";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer class="footer">
          <div class="footer_logo-box">
            <picture>
              <source
                srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                media="(max-width: 37.5rem)"
              />
              <img
                srcset="img/logo-green-1x.png 1x,  img/logo-green-2x.png 2x"
                alt=""
                class="footer_logo"
              />
            </picture>
          </div>
          <div class="row">
            <div class="col-10 mr-auto col-md-6">
              <div class="footer_navigation">
                <ul class="footer_list">
                  <li class="footer_item">
                    <a href="#" class="footer_link">
                      About us
                    </a>
                  </li>
                  <li class="footer_item">
                    <a href="#" class="footer_link">
                      Home
                    </a>
                  </li>
                  <li class="footer_item">
                    <a href="#" class="footer_link">
                      Blog
                    </a>
                  </li>
                  <li class="footer_item">
                    <a href="#" class="footer_link">
                      Shop
                    </a>
                  </li>
                  <li class="footer_item">
                    <a href="#" class="footer_link">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-10 mr-auto col-md-6">
              <p class="footer_copyright">
                Coded by{" "}
                <a href="#" class="footer_link">
                  Nisar Ahmad
                </a>
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
