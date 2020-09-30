import React, { Component } from "react";
// import "../../../src/customStyle/css/style.css";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopControler from "../ReusableComponents/Scroll/scrollTop";
import "../../../src/index.css";

export default class BlogMain extends Component {
  // handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   this.setState({ activePage: pageNumber });
  // }
  componentDidMount = () => {
    console.log(this.props);
    window.scrollTo(0, 0);

    AOS.init();
  };
  state = {
    search: ""
    // activePage: 15x
  };
  updateSearch = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };

  render() {
    return (
      <main>
        <ScrollToTopControler />

        <section className="container">
          <div className="row">
            <Query query={ARTICLES_QUERY}>
              {({ data: { articles } }) => {
                let filteredArticles = articles.filter(article => {
                  return (
                    article.title
                      .toLowerCase()
                      .indexOf(this.state.search.toLowerCase()) !== -1
                  );
                });
                return (
                  <div className="col-md-8 mx-auto col-10">
                    {/* <Pagination
                      activePage={this.state.activePage}
                      itemsCountPerPage={2}
                      totalItemsCount={450}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange.bind(this)}
                    /> */}

                    <div className="form_group">
                      <input
                        style={{
                          width: "92%",
                          marginLeft: "1.85rem",
                          marginTop: "1rem"
                        }}
                        className="form_input"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={this.updateSearch}
                      />
                    </div>

                    <div className="site-content">
                      {filteredArticles.map(article => {
                        return (
                          <div className="posts">
                            <div
                              className="post-content"
                              data-aos="zoom-in"
                              data-aos-delay="200"
                            >
                              <div className="post-image">
                                <div>
                                  <Link
                                    to={`/article/${article.id}`}
                                    className="btn-text"
                                  >
                                    <img
                                      style={{ height: "30rem", width: "100%" }}
                                      className="img"
                                      src={
                                        process.env.REACT_APP_BACKEND_URL +
                                        article.image[0].url
                                      }
                                      alt={article.image[0].url}
                                    />
                                  </Link>
                                </div>
                                <div className="post-info flex-row">
                                  <span className="text-gray">
                                    <i className="fas fa-user text-gray"></i>
                                    &nbsp;&nbsp;Admin
                                  </span>
                                  <span className="text-gray">
                                    <i className="fas fa-calendar-alt"></i>
                                    &nbsp;&nbsp;January 14, 2019
                                  </span>
                                  <span className="text-gray">2 Commets</span>
                                </div>
                              </div>
                              <div className="post-title">
                                <Link to={`/article/${article.id}`}>
                                  <span className="blog-link header-tertiary-1">
                                    {article.title}
                                  </span>
                                </Link>
                                <p className="paragraph-1">{article.content}</p>
                                <Link
                                  to={`/article/${article.id}`}
                                  className="btn-text"
                                >
                                  Read more &rarr;
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="pagination flex-row">
                        <a className="link" href="#">
                          <i className="fas fa-chevron-left"></i>
                        </a>
                        <a className="link" href="#" className="pages">
                          1
                        </a>
                        <a className="link" href="#" className="pages">
                          2
                        </a>
                        <a className="link" href="#" className="pages">
                          3
                        </a>
                        <a className="link" href="#">
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }}
            </Query>
            <div className="col-md-4 mx-auto col-10 site-contents">
              <aside className="sidebar ">
                <div className="category">
                  <h2>Category</h2>
                  <ul className="category-list">
                    <li
                      className="list-items"
                      data-aos="fade-left"
                      data-aos-delay="100"
                    >
                      <a href="#">Software</a>
                      <span className="text-gray">(05)</span>
                    </li>
                    <li
                      className="list-items"
                      data-aos="fade-left"
                      data-aos-delay="200"
                    >
                      <a href="#">Techonlogy</a>
                      <span className="text-gray">(02)</span>
                    </li>
                    <li
                      className="list-items"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    >
                      <a href="#">Lifestyle</a>
                      <span className="text-gray">(07)</span>
                    </li>
                    <li
                      className="list-items"
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                      <a href="#">Shopping</a>
                      <span className="text-gray">(01)</span>
                    </li>
                    <li
                      className="list-items"
                      data-aos="fade-left"
                      data-aos-delay="500"
                    >
                      <a href="#">Food</a>
                      <span className="text-gray">(08)</span>
                    </li>
                  </ul>
                </div>
                <div className="popular-post">
                  <h2>Popular Post</h2>

                  <div
                    className="post-content"
                    data-aos="flip-up"
                    data-aos-delay="600"
                  >
                    <div className="post-image">
                      <div>
                        <img
                          src="https://images.unsplash.com/photo-1506003814204-7eba0a3a6600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                          className="img"
                          alt="blog1"
                        />
                      </div>
                      <div className="post-info flex-row">
                        <span>
                          <i className="fas fa-calendar-alt text-gray"></i>
                          &nbsp;&nbsp;January 14, 2019
                        </span>
                        <span>2 Commets</span>
                      </div>
                    </div>
                    <div className="post-title">
                      <Link>
                        <span className="category-link">
                          New data recording system to better analyse road
                          accidents
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="newsletter"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h2>Newsletter</h2>
                  <div className="form-element">
                    <input
                      type="text"
                      className="input-element"
                      placeholder="Email"
                    />
                    <button className="btn form-btn">Subscribe</button>
                  </div>
                </div>
                <div className="popular-tags">
                  <h2>Popular Tags</h2>
                  <div className="tags flex-row">
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="100"
                    >
                      Software
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="200"
                    >
                      technology
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="300"
                    >
                      travel
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="400"
                    >
                      illustration
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="500"
                    >
                      design
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="600"
                    >
                      lifestyle
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="700"
                    >
                      love
                    </span>
                    <span
                      className="tag"
                      data-aos="flip-up"
                      data-aos-delay="800"
                    >
                      project
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
