import React, { Component } from 'react';
import "../Article.css";
import "../App.css";

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

export default CommentDeleter;