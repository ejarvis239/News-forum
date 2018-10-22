import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import PropTypes from "prop-types";

class CommentDeleter extends Component {
  render () {
    return (
    <div id="articleVotes">
      <button onClick={() => this.delete() } > DELETE COMMENT </button>
    </div>
    );
  }

  delete = () => {
    this.props.deleteComment(this.props.id);
}
}

CommentDeleter.propTypes = {
  deleteComment: PropTypes.func.isRequired,
};


export default CommentDeleter;