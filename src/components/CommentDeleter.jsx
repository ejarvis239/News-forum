import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import * as api from '../api.js'

class CommentDeleter extends Component {
  state = {
  }

  if (this.props.comment.created_by !== this.props.user._id) return null;


  render () {
    return (
    <div id="">
      <button onClick={() => this.delete() } > DELETE COMMENT </button>
    </div>
    );
  }

  delete = () => {
    this.props.deleteComment(this.props.id);
    this.setState((state) => ({
      
    }))
    }
}

export default CommentDeleter;