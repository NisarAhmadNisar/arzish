import React, { Component } from "react";
// import "../../../src/customStyle/css/style.css";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopControler from "../ReusableComponents/Scroll/scrollTop";
// import "../../../src/index.css";
import BlogPagination from "../Pagination/blogPagination";

export default class HomeBlog extends Component {
  componentDidMount = () => {
    console.log(this.props);
    window.scrollTo(0, 0);

    AOS.init();
  };
  state = {
    search: "",
    loading: false,
    posts: [],
    currentPosts: [],
    currentPage: 1,
    postsPerPage: 3
  };
  updateSearch = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  paginatePosts = pageNumber => {
    return this.setState({
      currentPage: pageNumber
    });
  };

  render() {
    //Pagination
    // get current post
    const indexOfLastProduct = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - this.state.postsPerPage;

    return (
      <main>
        <ScrollToTopControler />

        <section className="container">
          <div className="row">
            <Query query={ARTICLES_QUERY}>
              {({ data: { articles } }) => {
                const currentPosts = articles.slice(
                  indexOfFirstProduct,
                  indexOfLastProduct
                );
                let filteredArticles = currentPosts.filter(article => {
                  return (
                    article.title
                      .toLowerCase()
                      .indexOf(this.state.search.toLowerCase()) !== -1
                  );
                });
                return (
                  <div className="col-md-8 col-10 u-margin-top-medium-1 mx-auto">
                    <div className="site-content ">
                      <Link to="/blog">
                        <h1
                          style={{ marginLeft: "2rem" }}
                          className="heading-secondary u-center-text"
                        >
                          Our Blog
                        </h1>
                      </Link>
                      {filteredArticles.map(article => {
                        return (
                          <div className="posts" key={article.id}>
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
                    </div>
                  </div>
                );
              }}
            </Query>
            <div className="col-md-4 mx-auto col-10 site-contents">
              <aside className="sidebar ">
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
