import React, { Component } from "react";
import axios from "axios";
import ResponseComment from "./responseComment";
import classnames from "classnames";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      article: props.articleId,
      responseName: "",
      responseEmail: "",
      responseMessage: "",
      responseDone: false,
      errors: {}
    };
  }

  changeHandler = e => {
    this.setState({ errors: {} });
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();

    //Check for Errors
    const { name, email, message } = this.state;
    if (message === "") {
      this.setState({ errors: { message: "Please enter a message" } });
      return;
    }
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    try {
      const { name, email, message, article } = this.state;

      const data = {
        name,
        message,
        email,
        article
      };

      let response = await axios({
        method: "post",
        url: "http://localhost:1337/comments",
        data: data
      });
      console.log(response.data);
      if (response.data) {
        this.setState({
          name: "",
          email: "",
          message: "",
          article: this.props.articleId,
          responseName: response.data.name,
          responseEmail: response.data.email,
          responseMessage: response.data.message,
          response: true
        });
      }
    } catch (error) {
      console.log("this is Exception:", error.response);
      // console.log("this is Exception:", error.response.data);
    }
  };

  render() {
    //Comments Form - submit a comment
    const {
      name,
      email,
      message,
      articleId,
      responseEmail,
      responseMessage,
      responseName,
      errors
    } = this.state;
    return (
      <div>
        {this.state.response ? (
          <div>
            {/* RESPONSE with */}
            <ResponseComment
              responseEmail={responseEmail}
              responseMessage={responseMessage}
              responseName={responseName}
            />

            {/* <div className="container">
              <h2>Leave a comment</h2>
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-10">
                  <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label htmlFor="message">Message: </label>
                      <textarea
                        className={classnames("form-control ", {
                          "is-invalid": errors.message
                        })}
                        id="message"
                        name="message"
                        placeholder="Write message"
                        rows="5"
                        value={message}
                        onChange={this.changeHandler}
                      ></textarea>
                      {errors && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        className={classnames("form-control ", {
                          "is-invalid": errors.name
                        })}
                        id="name"
                        type="text"
                        name="name"
                        placeholder="enter your name"
                        value={name}
                        onChange={this.changeHandler}
                      />{" "}
                      {errors && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <label htmlFor="email">Email: </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className={classnames("form-control ", {
                          "is-invalid": errors.email
                        })}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={this.changeHandler}
                      />{" "}
                      {errors && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    <input type="hidden" name="articleId" value={articleId} />
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
            <section className="section-book">
              <div className="roww">
                <div className="col-1-of-1">
                  <div className="book">
                    <div className="book_form">
                      <form
                        action="#"
                        className="form"
                        onSubmit={this.submitHandler}
                      >
                        <div className="u-margin-bottom-medium">
                          <h2 className="header-tertiary-1">Leave a Comment</h2>
                        </div>

                        <div className="form_group">
                          <textarea
                            type="text"
                            name="message"
                            id="message"
                            className="form_input"
                            placeholder="Write a message..."
                            rows="5"
                            value={message}
                            onChange={this.changeHandler}
                            required
                          ></textarea>
                          <label for="message" className="form_label paragraph">
                            Message
                          </label>
                        </div>

                        <div className="form_group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form_input"
                            placeholder="Enter your name"
                            value={name}
                            onChange={this.changeHandler}
                            required
                          />
                          <label for="name" className="form_label paragraph">
                            name
                          </label>
                        </div>

                        <div className="form_group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form_input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={this.changeHandler}
                            required
                          />
                          <label for="email" className="form_label paragraph">
                            Email
                          </label>
                        </div>

                        <div className="form_group">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn btn-green"
                          />
                        </div>
                        <div className="form_group"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          //
          <section className="section-book">
            <div className="roww">
              <div className="col-1-of-1">
                <div className="book">
                  <div className="book_form">
                    <form
                      action="#"
                      className="form"
                      onSubmit={this.submitHandler}
                    >
                      <div className="u-margin-bottom-medium">
                        <h2 className="header-tertiary-1">Leave a Comment</h2>
                      </div>

                      <div className="form_group">
                        <textarea
                          type="text"
                          name="message"
                          id="message"
                          className="form_input"
                          placeholder="Write a message..."
                          rows="5"
                          value={message}
                          onChange={this.changeHandler}
                          required
                        ></textarea>
                        <label for="message" className="form_label paragraph">
                          Message
                        </label>
                      </div>

                      <div className="form_group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form_input"
                          placeholder="Enter your name"
                          value={name}
                          onChange={this.changeHandler}
                          required
                        />
                        <label for="name" className="form_label paragraph">
                          name
                        </label>
                      </div>

                      <div className="form_group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form_input"
                          placeholder="Enter your email"
                          value={email}
                          onChange={this.changeHandler}
                          required
                        />
                        <label for="email" className="form_label paragraph">
                          Email
                        </label>
                      </div>

                      <div className="form_group">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-green"
                        />
                      </div>
                      <div className="form_group"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default PostForm;
