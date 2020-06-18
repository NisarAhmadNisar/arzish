import React from "react";

// // getting and organizing all comments

class AllComments extends React.Component {
  render() {
    this.state = {
      counter: 0
    };

    const allcomments = this.props.allcomments.comments.map(comment => {
      return (
        <div className="container" key={comment.email}>
          <div className="row">
            <div className="col-sm-12">
              <h6>
                <strong>Name:</strong> {comment.name}
              </h6>
              <h6>
                <strong>Email:</strong> {comment.email}
              </h6>
              <p>
                <strong>Message:</strong> {comment.message}
              </p>
            </div>
          </div>
        </div>
      );
    });
    // counting comments
    const commentsCount = this.props.allcomments.comments.map(comment => {
      this.setState(() => {
        {
          this.state.counter += 1;
        }
      });
    });
    const commentCount = this.state.counter;

    return (
      <div>
        {allcomments}
        {commentsCount}
        TotalComments:{commentCount}
      </div>
    );
  }
}

export default AllComments;
