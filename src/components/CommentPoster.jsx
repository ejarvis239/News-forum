import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import * as api from '../api.js'

class CommentPoster extends Component {
  state = {
    body: ""
  }

  render () {
    return (
    <div id="postCommentContainer">
      <form id="postCommentContainer" onSubmit={this.handleSubmit}>
        <input id="postCommentBox" type="text"
        aria-label="comment body"
        placeholder="Post a comment..."
        onChange={this.handleChange}
        name="body"
        />
        <button>Post</button>
      </form>
    </div>
    );
  }

handleSubmit = (event) => {
  event.preventDefault();
  this.props.addComment(this.state.body)

}

handleChange = (event) => {
  const { value } = event.target;
  this.setState({
    body: value
  })
}
}

export default CommentPoster;