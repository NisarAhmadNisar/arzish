import React, { Component } from "react";
// import "../../../src/customStyle/css/style.css";
// import "../../../src/index.css";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <header className="header">
            <div className="header-text-box">
              <h1 className="header-primary">
                <span className="header-primary-main"> Arzish </span>
                <span className="header-primary-sub">where life happens</span>
              </h1>
              <a href="#section-tours" className="btn btn-white btn-animated">
                Discover Your Choice
              </a>
            </div>
          </header>

          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big u-margin-top-medium">
              <h2 className="heading-secondary">Who are We</h2>
            </div>
            <div className="roww">
              <h3
                className="header-tertiary u-margin-bottom-small"
                style={{ marginLeft: "3rem", marginRight: "3rem" }}
              >
                Check out our Blog
              </h3>

              <p
                className="paragraph"
                style={{ marginLeft: "3rem", marginRight: "3rem" }}
              >
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose t is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accid t is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accid
              </p>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
