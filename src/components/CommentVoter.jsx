import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import * as api from '../api.js'
import PropTypes from "prop-types";

class CommentVoter extends Component {

state = {
  voteMod: 0,
  err: null
}

render () {
// if (err) return <p>Vote Failed</p>

return (<div id="articleVotes">
<p id="commentVotes">
Votes: {this.props.votes + this.state.voteMod}
</p>
<button onClick={() => this.vote("up") } disabled={this.state.voteMod===1}> <img id="votebuttons" src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Green_Arrow_Up_Darker.svg" alt="Vote Up"></img> </button>
<button onClick={() => this.vote("down") } disabled={this.state.voteMod===-1}> <img id="votebuttons" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Red_Arrow_Down.svg" alt="Vote Down" ></img> </button>
</div>)

}

vote = (direction) => {
api.commentVote(this.props.id, direction);
this.setState((state) => ({
  voteMod: direction === "up" ? state.voteMod +1 : state.voteMod -1
}))
}
}

CommentVoter.propTypes = {
  id: PropTypes.string,
  votes: PropTypes.number
};

export default CommentVoter;


