import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import * as api from '../api.js'


/*
class CommentPoster extends Component {
  state = {
    body: ""
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        aria-label="comment body"
        onChange={this.handleChange}
        name="body"
        />
        <button>Post!</button>
      </form>
    );
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  this.props.addComment
  this.setState{
``
  }

}

handleChange = (event) => {
  const {name, value} = event.target;
  this.setState({
    [name]: value
  })
}

// in comments file
sent addcomment function via props.....

addComment = (body) => {
  api.postComment(this.props.id, body, this.props.user._id)
  .then(comment => {
    this.setState({
      comments: [comment, ...this.state.comments]
    })
  })
}